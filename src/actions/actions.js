export const addTask = (text) => {
    return {
      type: 'ADD_TASK',
      payload: {
        title: text
      },
    };
  };
  