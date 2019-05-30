export const getAvatars = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch avatars';

      return json;
    })
    .then(json => json.map(avatar => ({
      name: avatar.name,
      photoUrl: avatar.photoUrl
    })));
};
