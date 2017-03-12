var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  {title: "Theory of Everything", year: "2014", length: 183, rating: "7.7", genre: "biography"}, // added
  {title: "The Dark Knight Rises", year: "2012", length: 164, rating: "8.5", genre: "thriller"} // added
];

function getMovieTitle( index )
{
  return movieList[index].title;
}

console.log();
console.log(getMovieTitle(3));

function addMovie( movie )
{
  movieList.push(movie);
  return JSON.stringify( movieList);
}

var newMovie =  {title: "The Dark Knight", year: "2008", length: 152, rating: '9.0', genre: 'thriller'};

console.log();
addMovie(newMovie);
console.log("--------------------------------------------------------------------");
function movieByRating(){
  movieList.sort(function(a, b){
     return b.rating - a.rating
  });
  return JSON.stringify( movieList);
}

console.log();
console.log(movieByRating());


console.log("---------------------------------------------------------------");

function findByTitle( title )
{
  var fbt = [];
  for (var i = 0; i < movieList.length; i++)
  {
    if (movieList[i].title.search(title) != -1)
      fbt.push(movieList[i]);
  }
  return JSON.stringify(fbt); // because multiple movie may have the same title
}

console.log();
console.log(findByTitle("Dark Knight"));
