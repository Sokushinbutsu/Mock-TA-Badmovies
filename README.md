# Bad Movies

A student-made teaching tool designed to cover the fundamentals of fullstack

Learn the fundamentals of application structure and database integration by making a web app that renders the most horrible movies as listed on 'themoviedb.org' based on certain search criteria, namely genre. The user should be able to save a movie to their 'favorites' list and delete movies from this list.

### Basic functionality:

[ ] User should be able to search for the worst movies from any of the official genres listed on 'themoviedb.org'

[ ] User should be given this official list of genres to select from and search with, filtering by selected genre

[ ] A search should find and display a limited list of movies sorted by rating in ascending order, showing the movies with the worst ratings first (figure out how to modify the API endpoint to do so)

[ ] User should be able to click on any movie in order to save it to their favorites list (mySQL database, you must make your own Schema)

[ ] If a user has navigated to their favorites page, clicking on a movie should delete it from their favorites (unlike on the main page, where clicking on a movie adds it to their favorites list)

[ ] Store your data in MySQL db (or MongoDB if/when you feel comfortable)

### The API for the application, where you will query for worst movies and all official genres:

https://developers.themoviedb.org/3/getting-started/introduction

---

_To start the server and start webpack check out package.json_

On page load:
componentDidMount: Check if genre collection exists, Get list of movie genres from database.
display default genre (horror) in table.
On search:
query API with /discover/movie?with_genres=878&sort_by=vote_average.desc

let save = (repos) => {
return Promise.all(repos.map(repo => {
return Repo.findOneAndUpdate(
{url: repo.html_url}.
{everything else},
{upsert: true}
)
}))
}
