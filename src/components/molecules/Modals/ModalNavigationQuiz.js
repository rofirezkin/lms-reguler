import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ButtonDefault, Gap} from '../../atoms';

import {Text} from '../../atoms/typography/text.component';

import {ICExit} from '../../../assets/icon';
import {IndicatorCurrentView, TitleQuiz, TouchableQuiz} from './ModalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RowView} from '../../../utils';
const ModalNavigationQuiz = ({
  visible,
  onRequestClose,
  onSuccess,
  section,
  currentNumber,
  maxLength,
}) => {
  const dispatch = useDispatch();
  const squares = new Array();
  for (var i = 0; i < section; i++) {
    squares[i] = new Array();
    for (var j = i * 5 + 1; j <= 5 * i + 5; j++) {
      if (squares[i] == null) {
        if (currentNumber + 1 === j) {
          squares[i] = {id: j, enable: false, current: true};
        } else {
          squares[i] = {id: j, enable: false, current: false};
        }
      } else {
        if (currentNumber + 1 === j) {
          squares[i].push({id: j, enable: false, current: true});
        } else {
          squares[i].push({id: j, enable: false, current: false});
        }
      }
    }
  }

  // const {activeNumber} = useSelector(state => state.pageReducer);
  const {pageReducer, answerCounter} = useSelector(state => state);
  const activeNumber = pageReducer.activeNumber;

  const actionNavigation = (pageActive, numberActive, index) => {
    if (numberActive >= maxLength) {
      console.log('Data sudah tpageActiveak ada');
    } else {
      const length = 5;
      var numbTempDropDown = [];

      for (let x = 0; x < length; x++) {
        if (pageActive === x) {
          if (activeNumber[x] === true && pageActive === x) {
            numbTempDropDown.push(true);
          } else {
            if (activeNumber[x] === true) {
              numbTempDropDown.push(false);
            } else {
              numbTempDropDown.push(true);
            }
          }
        } else {
          numbTempDropDown.push(false);
        }
      }

      dispatch({type: 'SET_NUMBER', value: numberActive});

      dispatch({type: 'SET_ACTIVE_NUMBER', value: numbTempDropDown});
      dispatch({type: 'SET_ACTIVE_PAGE', value: index});
      onRequestClose();
    }
  };

  return (
    <View>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <Gap height={20} />
            <RowView justifyContent>
              <Text variant="headerProfile"> Quiz Navigation </Text>
              <TouchableOpacity onPress={onRequestClose}>
                <ICExit />
              </TouchableOpacity>
            </RowView>
            <Gap height={20} />
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              {squares.map((resOneDimension, index) => {
                return (
                  <RowView key={`${index}-section`} aroundContent>
                    {resOneDimension.map((res, indexD) => {
                      const objIndex = answerCounter.findIndex(
                        obj => obj.quizId === res.id,
                      );
                      let checklist = false;
                      if (objIndex !== -1) {
                        checklist = true;
                      }
                      console.log('res enable ', res.enable);
                      return (
                        <View key={res.id}>
                          <TouchableQuiz
                            disabled={res.id > maxLength}
                            active={checklist}
                            onPress={() =>
                              actionNavigation(indexD, res.id - 1, index)
                            }>
                            <TitleQuiz active={checklist}>{res.id}</TitleQuiz>
                            {res.current === true && <IndicatorCurrentView />}
                          </TouchableQuiz>
                        </View>
                      );
                    })}
                  </RowView>
                );
              })}
              <Gap height={30} />
              <ButtonDefault onPress={onSuccess} title="Kumpulkan" />
              <Gap height={40} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalNavigationQuiz;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: '100%',
    height: '45%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
  },
});
