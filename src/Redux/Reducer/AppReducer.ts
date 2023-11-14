const AppState = {
  tableList: [],
}

export const AppReducer = (state = AppState, action) => {
  switch (action.type) {
    case 'getList':
      return { ...state, tableList: action.payload }
    default:
      return state
  }
}