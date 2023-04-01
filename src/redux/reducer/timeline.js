const initTimeline = {
  quizTimeline: [],
  taskTimeline: [],
};

export const timelineReducer = (state = initTimeline, action) => {
  if (action.type === 'SET_QUIZ_TIMELINE') {
    return {
      ...state,
      quizTimeline: action.value,
    };
  }

  if (action.type === 'SET_TASK_TIMELINE') {
    return {
      ...state,
      taskTimeline: action.value,
    };
  }

  return state;
};
