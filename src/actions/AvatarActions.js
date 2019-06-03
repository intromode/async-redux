//this is where our actions change from being just objects to being async functions 
import { getAvatars } from '../services/AvatarApi';

//our action is used to update the state (happens when we use it in our reducer) whereas our selector is used to retrieve the data. selector is used in mapPropsToWhatever


//not default?
export function fetchAvatars() {
  return function(dispatch) {
    return getAvatars()
      .then(avatarList => {
        console.log(avatarList);
        dispatch({
          type: 'FETCH_AVATARS',
          payload: avatarList
        });
      });
  };
}

