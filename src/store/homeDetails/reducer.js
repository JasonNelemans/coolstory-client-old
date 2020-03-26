const initialState = {
  stories: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'HOMEPAGE_BY_ID': 
      return {...action.payload, stories: [...action.payload.stories]}
    default:
      return state;
  }
}

