var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
  {title: "Theory of Everything", year: "2014", length: 183, rating: "7.7", genre: "biography"} // added
];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));  // works

function addMovie( movie ){
  //add code
  //var mov_title = prompt("Name of the movie?");
  //var mov_year = prompt("Year of release?");
  //var mov_length = prompt("Duration (in min)?");
  //var mov_rating = prompt("Rating?");
  //var mov_genre = prompt("Genre?");

  //movieList.push(mov_title, mov_year, mov_length, mov_rating, mov_genre);
  movieList.push(movie);

}

var newMovie = {"Dark Knight", "2008", 160, '8.0', 'thriller'};

console.log(JSON.stringify(addMovie(newMovie)));

function movieByRating(){
  var arr =[], arr2=[];
  for (var i = 0; i < movieList.length; i++) {
    arr.push(parseFloat(movieList[i].rating));
  }
  arr.sort();
  //console.log(arr.length);
  for (var i = 0; i < arr.length; i++){

  console.log(arr[i]);
  }
for (var i = 0; i < arr.length; i++)
{
  for (var j = 0; j < arr.length; j++)
  {
    if (arr[i] == parseFloat(movieList[j].rating))
    {
      console.log(movieList[i]);
    }
  }
}
}
console.log(movieByRating());

function findByTitle( title ){
  //add code
}

console.log(findByTitle("matrix"));
