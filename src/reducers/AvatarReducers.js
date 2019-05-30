//reducers take state and action, so next well need action

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_AVATARS':
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
