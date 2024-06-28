const initialState = {
    tasks: [
        {
            id: 1,
            title: "Todo 1",
            completed: false
        },
        {
            id: 2,
            title: "Todo 2",
            completed: false
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
          return {
            ...state,
            tasks: [...state.tasks, {
                ...action.payload, title: action.payload.title
            }],
          };
        default:
          return state;
      }
}
export default todoReducer;