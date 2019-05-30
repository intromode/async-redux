export const getChars = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch characters';

      return json;
    })
    .then(json => json.map(character => ({
      name: character.name,
      photoUrl: character.photoUrl
    })));
};
