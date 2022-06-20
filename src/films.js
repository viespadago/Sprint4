// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  [];
  for(i=0; i<array.length; i++){
           result.push(array[i].director);
  }
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director == director) ;
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result =  [];
  for(i=0; i<array.length; i++){
    if (array[i].director==director){
           result.push(array[i].score);
    }
  }
  const average = result.reduce((a, b) => a + b, 0) / result.length;
  console.log("EXERCICE 3 ->", result, average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result =  [];
  for(i=0; i<array.length; i++){
    result.push(array[i].title);
  }
  const ordered = result.sort((a, b) => a.localeCompare(b));
  result =  [];
  if (ordered.length>20){
    for(i=0; i<20 ; i++){
      result.push(ordered[i]);
  }
  }else{
    for(i=0; i<ordered.length; i++){
      result.push(ordered[i]);
    }
  }
  console.log("EXERCICE 4 ->", ordered, result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result =  [];
  var found=0;
    for(i=0; i<array.length; i++){
        /*for(j=0; j<result.length; j++){
            if (result[j].year==array[i].year){
                /*var title=[];
                title.title=array[i].title;
                result[j].push(title);
                const ordered = result[j].sort((a, b) => a.title.localeCompare(b.title));
                found=1;
            }
        }
        if (found==0){
            movie.title=array[i].title;
            movie.year=array[i].year;*/
            result.push({title: array[i].title, year: array[i].year});
        }
        /*found=0;
    }*/    
  const ordered = result.sort((a, b) => a.year - b.year);
  console.log("EXERCICE 5 ->", ordered);
  return ordered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let result =  [];
  for(i=0; i<array.length; i++){
    if ((array[i].genre==genre)&&(array[i].score != '')){
           result.push(array[i].score);
    }
  }
  const average = result.reduce((a, b) => a + b, 0) / result.length;
  console.log("EXERCICE 6 ->", result, average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result =  [];
  for(i=0; i<array.length; i++){
          var movie=array[i];
          var horas=parseInt(movie.duration.substring(0,1))*60;
          if (array[i].duration.slice(4,5)=='m'){
            var minutos=parseInt(movie.duration.substring(3,4));
          }else if (array[i].duration.slice(4,5)==''){
            var minutos=0;  
          }else{
            var minutos=parseInt(movie.duration.substring(3,5));
          }
          movie.duration=horas+minutos;
          result.push(movie);
  }
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = [];
  for(i=0; i<array.length; i++){
      if (array[i].year==year){
           result.push(array[i]);
      }
  }
  const theBest = result.sort((a, b) => b.score - a.score);
  let trueBest=[];
  trueBest.push(theBest[0]);
  console.log("EXERCICE 8 ->", result, theBest, theBest[0], trueBest);
  return trueBest;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
