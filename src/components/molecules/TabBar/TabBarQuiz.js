import React, {useState} from 'react';
import {TabBarQuizView, TitleQuiz, TouchableQuiz} from './TabBarStyles';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import {
  ICChecklistQuiz,
  ICChecklistQuizActive,
  ICNextOff,
  ICNextOn,
  ICPreviousOff,
  ICPreviousOn,
} from '../../../assets/Task';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const TabBarQuiz = ({
  section,
  maxLength,
  sectionGetActive,
  numberGetActive,
  getActiveNumber,
}) => {
  const dispatch = useDispatch();

  // const {activeNumber, activePage} = useSelector(state => state.pageReducer);

  const {pageReducer, answerCounter} = useSelector(state => state);
  const activeNumber = pageReducer.activeNumber;
  const activePage = pageReducer.activePage;

  console.log('dataa ,', answerCounter);

  const numberActive = (idActive, resNumber) => {
    if (resNumber >= maxLength) {
      console.log('Data sudah tidActiveak ada');
    } else {
      dispatch({type: 'SET_NUMBER', value: resNumber});
      const length = 5;
      var enableDropDown = [];

      for (let i = 0; i < length; i++) {
        if (idActive === i) {
          if (activeNumber[i] === true && idActive === i) {
            enableDropDown.push(true);
          } else {
            if (activeNumber[i] === true) {
              enableDropDown.push(false);
            } else {
              enableDropDown.push(true);
            }
          }
        } else {
          enableDropDown.push(false);
        }
      }

      dispatch({
        type: 'SET_ACTIVE_NUMBER',
        value: enableDropDown,
      });
      console.log('sssss', activeNumber);
    }
  };

  //   const firstTitleAction = () => {
  //     setDasbor(true);
  //     activeDashboard(true);
  //   };
  //   const secondTitleAction = () => {
  //     setDasbor(false);
  //     activeDashboard(false);
  //   };

  const squares = new Array();
  for (var i = 0; i < section; i++) {
    squares[i] = new Array();
    for (var j = i * 5 + 1; j <= 5 * i + 5; j++) {
      if (squares[i] == null) {
        squares[i] = j;
      } else {
        squares[i].push(j);
      }
    }
  }

  const PreviousAction = () => {
    dispatch({type: 'SET_ACTIVE_PAGE', value: activePage - 1});
    // activePage(squares[activePage - 1][0] - 1);
    dispatch({type: 'SET_NUMBER', value: squares[activePage - 1][0] - 1});

    dispatch({
      type: 'SET_ACTIVE_NUMBER',
      value: [true],
    });
  };
  const NextAction = () => {
    dispatch({type: 'SET_ACTIVE_PAGE', value: activePage + 1});
    dispatch({type: 'SET_NUMBER', value: squares[activePage + 1][0] - 1});
    dispatch({
      type: 'SET_ACTIVE_NUMBER',
      value: [true],
    });
  };

  useEffect(() => {}, []);

  return (
    <TabBarQuizView>
      <TouchableOpacity
        onPress={PreviousAction}
        disabled={activePage === 0}
        style={styles.previous}>
        {activePage === 0 ? <ICPreviousOff /> : <ICPreviousOn />}
      </TouchableOpacity>
      {squares[activePage].map((res, index) => {
        const objIndex = answerCounter.findIndex(obj => obj.quizId === res);

        let checklist = false;
        if (objIndex !== -1) {
          checklist = true;
        }
        return (
          <TouchableQuiz
            key={index}
            disabled={res > maxLength}
            active={activeNumber[index]}
            onPress={() => numberActive(index, res - 1)}>
            {checklist === true ? (
              <View style={{alignItems: 'center'}}>
                {activeNumber[index] ? (
                  <ICChecklistQuizActive />
                ) : (
                  <ICChecklistQuiz />
                )}
              </View>
            ) : (
              <TitleQuiz active={activeNumber[index]}>{res}</TitleQuiz>
            )}
          </TouchableQuiz>
        );
      })}
      {/* <TouchableQuiz active={enable[0]} onPress={() => numberActive(0)}>
        {checklist === true ? (
          <View style={{alignItems: 'center'}}>
            {enable[0] === true ? (
              <ICChecklistQuizActive />
            ) : (
              <ICChecklistQuiz />
            )}
          </View>
        ) : (
          <TitleQuiz active={enable[0]}>{nameBar[activePage].number1} </TitleQuiz>
        )}
      </TouchableQuiz>
      <TouchableQuiz active={enable[1]} onPress={() => numberActive(1)}>
        <TitleQuiz active={enable[1]}>{nameBar[activePage].number2} </TitleQuiz>
      </TouchableQuiz>
      <TouchableQuiz active={enable[2]} onPress={() => numberActive(2)}>
        <TitleQuiz active={enable[2]}>{nameBar[activePage].number3} </TitleQuiz>
      </TouchableQuiz>
      <TouchableQuiz active={enable[3]} onPress={() => numberActive(3)}>
        <TitleQuiz active={enable[3]}>{nameBar[activePage].number4} </TitleQuiz>
      </TouchableQuiz>
      <TouchableQuiz active={enable[4]} onPress={() => numberActive(4)}>
        <TitleQuiz active={enable[4]}>{nameBar[activePage].number5} </TitleQuiz>
      </TouchableQuiz> */}

      <TouchableOpacity
        disabled={activePage === section - 1}
        onPress={() => NextAction()}
        style={styles.next}>
        {activePage === section - 1 ? <ICNextOff /> : <ICNextOn />}
      </TouchableOpacity>
    </TabBarQuizView>
  );
};

export default TabBarQuiz;

const styles = StyleSheet.create({
  next: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  previous: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
