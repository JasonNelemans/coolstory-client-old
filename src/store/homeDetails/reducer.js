const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'HOMEPAGE_BY_ID': 
      return [...action.payload];
    default:
      return state;
  }
}

