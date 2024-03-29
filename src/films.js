// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(item => item.director === director)
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesForDirector = array.filter(item => item.director === director)
  let result = moviesForDirector.reduce((a,b) => (a + b.score),0)
  result = +(result/moviesForDirector.length).toFixed(2)
  return result
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(film => film.title)
  .sort((a,b) => a.localeCompare(b))
  .map((film , index) => {
      if(index < 20){
          return film
      }
  })

  return result
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.map(movie => {
     return  {
          title : movie.title,
          year : movie.year
      }
  }).sort((a,b) => {
    if(a.title < b.title ) return -1
    if(a.title > b.title ) return 1
    else return 0
  })
  .sort((a,b) => a.year - b.year)
  return result
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  let filterArray = array.filter(movie => movie.genre.map(gen => {
    if(gen.toLowerCase()===genre.toLowerCase()){
      return movie
    }
  }))
  let result = filterArray.reduce((acc,b) => acc + b.score, 0)
  result = result/filterArray.length
  return +result.toFixed(2)
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
 
  const result = array.map(movie => {
    let minuteOne = +movie.duration.substring(3,4) 
    let minuteTwo = +movie.duration.substring(4,5)
    let minutsPartTwo
    if(Number.isInteger(minuteTwo)){
      let minuteOneStr = minuteOne.toString()
      let minuteTwoStr = minuteTwo.toString()
      minutsPartTwo = +(minuteOneStr + minuteTwoStr)
    }else{
      minutsPartTwo = +movie.duration.substring(3,4)
    }
    return {...movie ,duration : (movie.duration.slice(0,1)*60)+minutsPartTwo}
  })
  return result
}

// Exercise 8: Get the best film of a year
  function bestFilmOfYear(array,year) {
   
    let highScore = 0
    let arrayScore = array.map(movie => {
      if(movie.year === year){
       return +movie.score
      }
    })
    highScore = Math.max(...arrayScore)
    
    let result = array.filter(movie => movie.score === highScore && movie.year===year)
    return result
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
