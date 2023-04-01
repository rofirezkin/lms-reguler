import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';

import {
  BgCircle1,
  BgCircle2,
  BgCircle3,
  BgGradient,
  CardQuizView,
  ContentQuiz,
  DescriptionQuizText,
  OptionButton,
  OptionText,
} from './QuizStyles';
import {
  BgCircleBottom,
  BgCircleCenter,
  BgCircleTop,
} from '../../assets/background';
import {
  Gap,
  Header,
  Loading,
  ModalBasic,
  ModalNavigationQuiz,
  TabBarQuiz,
} from '../../components';

import {fonts} from '../../utils/theme/fonts';
import {ICPin} from '../../assets/Task';

import normalize from 'react-native-normalize';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Draggable from 'react-native-draggable';

import {Countdown} from './Countdown';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {addTodo, toggleTodo} from '../../redux/reducer/answerCounter';
import {SafeArea, SpacingView} from '../../utils';

const Quiz = ({navigation}) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const {quizReducer} = useSelector(state => state);
  const DEFAULT_TIME = quizReducer.timer;
  const [imageStorage, setImageStorage] = useState([]);
  const device = devices.front;
  const [button, setButton] = useState(false);
  // const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(true);

  const [optionActive, setOptionActive] = useState({
    quizId: null,
    answerId: null,
  });
  const {number} = useSelector(state => state.pageReducer);
  const {answerCounter} = useSelector(state => state);

  const numberQuizCompare = quizReducer.dataQuiz.length / 5;
  let splitNumber = [
    numberQuizCompare > 0
      ? Math.floor(numberQuizCompare)
      : Math.ceil(numberQuizCompare),
    numberQuizCompare % 1,
  ];

  let sectionQuiz = splitNumber[0];

  if (splitNumber[0] === 0) {
    sectionQuiz += 1;
  } else if (splitNumber[1] !== 0) {
    sectionQuiz += 1;
  }

  const MINUTE_MS = 20000;
  useEffect(() => {
    if (answerCounter.length > 0) {
      const objIndex = answerCounter.findIndex(
        obj => obj.quizId === quizReducer.dataQuiz[number].id,
      );
      if (objIndex !== -1) {
        setOptionActive(answerCounter[objIndex]);
      }
    }
  }, [answerCounter, quizReducer, number]);
  useEffect(() => {
    const interval = setInterval(async () => {
      const snapshot = await camera.current.takeSnapshot({
        quality: 85,
        skipMetadata: true,
      });
      console.log('data snapshot ', snapshot);
      const pathFile = `file://${snapshot.path}`;

      setImageStorage(i => [...i, pathFile]);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  const onKumpulkan = () => {
    setButton(false);
    setShowModal(true);
  };
  const onSuccess = () => {
    setShowModal(false);
    navigation.replace('ImageMapping', imageStorage);
  };

  // const handleNumber = value => {
  //   setNumber(value);
  // };
  // const handleActivePage = (value, onTabBar) => {
  //   setNumber(value);
  // };

  const window = Dimensions.get('window');

  const handleNavigation = () => {
    setButton(true);
  };

  if (device == null) {
    return <Loading />;
  }

  const onEnd = () => {
    setMinutes(DEFAULT_TIME);
    navigation.replace('ImageMapping', imageStorage);
    setIsStarted(false);
  };

  const handleAnswer = (quizId, answerId) => {
    if (answerCounter.length === 0) {
      dispatch(addTodo({quizId: quizId, answerId: answerId}));
    } else {
      const objIndex = answerCounter.findIndex(obj => obj.quizId === quizId);

      if (objIndex !== -1) {
        if (
          answerCounter[objIndex].quizId === quizId &&
          answerCounter[objIndex].answerId !== answerId
        ) {
          dispatch(toggleTodo({quizId: objIndex, answerId: answerId}));
          // dispatch({
          //   type: 'SET_ANSWER',
          //   value: [{answerId: answerId, quizId: quizId}],
          // });
        }
      } else {
        dispatch(addTodo({quizId: quizId, answerId: answerId}));
        // answerCounter.push({quizId: quizId, answerId: answerId});
        // dispatch({
        //   type: 'SET_ANSWER',
        //   value: [answer],
        // });
      }
    }

    setOptionActive({quizId, answerId});
  };

  return (
    <>
      <View style={styles.cameraCard}>
        <Draggable x={window.width - 110} y={50}>
          <Camera
            style={styles.cameraActive}
            ref={camera}
            photo={true}
            device={device}
            isActive={true}
          />
        </Draggable>
      </View>
      <ModalNavigationQuiz
        section={sectionQuiz}
        visible={button}
        currentNumber={number}
        onSuccess={onKumpulkan}
        onRequestClose={() => setButton(false)}
        showWarningFalse={() => setButton(false)}
        maxLength={quizReducer.dataQuiz.length}
      />
      <ModalBasic
        title="Apakah Anda sudah yakin ?"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onSuccess={onSuccess}
      />
      <BgGradient>
        <BgCircle1 source={BgCircleTop} />
        <BgCircle2 source={BgCircleCenter} />
        <BgCircle3 source={BgCircleBottom} />
      </BgGradient>
      <ContentQuiz>
        <SafeArea quiz>
          <Header
            onPressNavigationMenu={handleNavigation}
            green={true}
            transparentBg={true}
            title="Quiz 01"
            onPress={() => navigation.goBack()}
          />
          <SpacingView contentFlex>
            <TabBarQuiz
              maxLength={quizReducer.dataQuiz.length}
              section={sectionQuiz}
              // activePage={handleActivePage}
              // getActiveNumber={handleNumber}
              numberGetActive={number}
            />
            <Gap height={normalize(20)} />
            <Countdown minutes={minutes} isPaused={!isStarted} onEnd={onEnd} />
            {/* <Timer /> */}

            <Gap height={normalize(20)} />
            <CardQuizView>
              <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{flexGrow: 1}}>
                <View style={{padding: 15}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{fontFamily: fonts.primary[700], fontSize: 20}}>
                      {quizReducer.dataQuiz[number].id}
                    </Text>
                    <Gap width={10} />
                    <View style={{justifyContent: 'center'}}>
                      <ICPin />
                    </View>
                  </View>
                  <DescriptionQuizText>
                    {quizReducer.dataQuiz[number].pertanyaan}
                  </DescriptionQuizText>
                  <Gap height={20} />
                  {quizReducer.dataQuiz[number].option.map((res, index) => {
                    return (
                      <View key={index}>
                        <OptionButton
                          active={
                            optionActive.answerId === index &&
                            optionActive.quizId ===
                              quizReducer.dataQuiz[number].id
                          }
                          onPress={() =>
                            handleAnswer(quizReducer.dataQuiz[number].id, index)
                          }>
                          <OptionText
                            active={
                              optionActive.answerId === index &&
                              optionActive.quizId ===
                                quizReducer.dataQuiz[number].id
                            }>
                            {res}
                          </OptionText>
                        </OptionButton>
                        <Gap height={20} />
                      </View>
                    );
                  })}
                  {/* <OptionButton>
                    <OptionText>
                      {quizReducer.dataQuiz[number].option.opsi1}
                    </OptionText>
                  </OptionButton>
                  <Gap height={15} />
                  <OptionButton>
                    <OptionText>
                      {quizReducer.dataQuiz[number].option.opsi2}
                    </OptionText>
                  </OptionButton>
                  <Gap height={15} />
                  <OptionButton>
                    <OptionText>
                      {quizReducer.dataQuiz[number].option.opsi3}
                    </OptionText>
                  </OptionButton>
                  <Gap height={15} />
                  <OptionButton>
                    <OptionText>
                      {quizReducer.dataQuiz[number].option.opsi4}
                    </OptionText>
                  </OptionButton>
                  <Gap height={15} /> */}
                </View>
              </ScrollView>
            </CardQuizView>
          </SpacingView>
        </SafeArea>
      </ContentQuiz>
    </>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  cameraActive: {
    borderRadius: 10,
    width: 60,
    height: 100,
    zIndex: 1000,
  },
  cameraCard: {zIndex: 10000},
});
