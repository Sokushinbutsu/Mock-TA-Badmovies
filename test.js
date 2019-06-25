const API_KEY = '359319ef6edadbbdbaff85baa20125bc';
const axios = require('axios');

axios
  .get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  )
  .then(response => {
    console.log(response.data);
    res.send(response);
  })
  .catch(err => {
    res.status(500).send(err);
  });
