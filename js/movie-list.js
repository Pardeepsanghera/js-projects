let movies = [
{ 
title: 'Pirates of the Caribbean: The Curse of the Black Pearl ',
year: 2008, 
genre: 'Action','Adventure': 'Fantasy', 
description:"Captain jack sparrow, a pirate and Will Turner, a blacksmith search for Elizabeth Swann, who has been kidnapped by feared Captain Barbossa", 
ImdRating: "8.0/10" },

{ 
title:'The Mummy', 
year: 1999, 
genre: 'Action','Adventure': 'Fantasy', 
description: "An archaeological dig in a ancient city where they awake a mummy who bring havoc to search for a reincarnation for long lost love", 
ImdRating: "7.0/10" },

{ 
title:'Transformers: Revenge of the Fallen', 
year: 2009, 
genre: 'Action', 'Adventure': 'Sci-Fi', 
description:"Sam goes to college leaving the auto bots back, but with cryptic symbols the Decepticons bring him back into war", 
ImdRating: "6.0/10" },

{ 
title:'Back to the Future', 
year: 1985, 
genre:'Adventure', 'comedy': 'Sci-fi', 
description:"A 17 year old kid marty travels 30 years back in a time-traveling DeLorean. who must make his parents fall in love again", 
ImdRating: "8.5/10" },

{ 
title:'13 Hours', 
year: 2016, 
genre:'Action', 'Drama': 'History', 
description:"Attack on the U.S Compound 6 CIA contractors must hold off armed locals while hoping for some backup", 
ImdRating: "7.3/10" },
];
//b. Create a function that when called loops through your array and console.logs
// movies.forEach((movie) => {
//     console.log(`${movie.title} was made in ${movie.year}.  Its rating were ${movie.ImdRating} on IMDB in the genres of ${movie.genre}, with the following description: ${movie.description}`);
// });
    movies.forEach(movie => {
        console.log(movie);
    });

//c. Create a function that will find a movie by it's title 
// and then console.logs the details of the movie. 
// The function should take a movieTitle parameter that lets you search by different titles
const movieDetails = (movieTitle) => {
    const foundItem = movies.find(movie => {
        return movie.title === movieTitle;
    });
    console.log(foundItem);
};
movieDetails("13 Hours");
movieDetails("The Mummy");
