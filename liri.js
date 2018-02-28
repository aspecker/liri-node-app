// Javascript for Liri node app
// Adam Specker

// require packages used
require("dotenv").config();
var keys = require("./keys.js");
var SpotifyWebApi = require("spotify-web-api-node");
var Twitter = require("twitter");
var request = require("request");

// import keys from .env thru keys.js
let spotify = new SpotifyWebApi({
    clientId: keys.spotify.id,
    clientSecret: keys.spotify.secret
});
var client = new Twitter(keys.twitter);

// declare global variables, such as placeholders and user input
var nodeArgs = process.argv;
var input = process.argv[2];
var searchTerm = "";

// loop through anything index 3+, as 2 will be the command
// then set this to the search term which will be used to query spotify and omdb
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      searchTerm = searchTerm + "+" + nodeArgs[i];
    }
    else {
      searchTerm += nodeArgs[i];
    }
  }

// get movie function
var getMovie = () => {
    if (!searchTerm){
        searchTerm = "Mr Nobody";
    };
    // make the API call with search term
    request("http://www.omdbapi.com/?t="+searchTerm+"&y=&plot=short&apikey=trilogy", function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("");
            //console log various information about the movie
            console.log('Title: '+JSON.parse(body).Title);
            console.log('Release Year: '+JSON.parse(body).Year);
            console.log('IMDB Rating: '+JSON.parse(body).Ratings[0].Value);
            console.log('Rotten Tomatoes Rating: '+JSON.parse(body).Ratings[1].Value);
            console.log('Produced in: '+JSON.parse(body).Country);
            console.log('Language: '+JSON.parse(body).Language);
            console.log('Synopsis: '+JSON.parse(body).Plot);
            console.log('Cast: '+JSON.parse(body).Actors);
        }
    });
}
// get tweet function
var getTweet = () =>{
    console.log("");
    //make API call to twitter api
    var params = {screen_name: '25ch11'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // over the entire tweet array returned, console log the date and text of each tweet
            for (var i=0; i<tweets.length;i++){
                console.log("Date posted: "+ tweets[i].created_at);
                console.log("Tweet: "+tweets[i].text);
                console.log("");
            }
        }
    });
}
// get spotify info function
var getSpotify = () =>{

}

// test calls of functions 
getMovie();
// getTweet();

