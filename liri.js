// Javascript for Liri node app
// Adam Specker

// require packages used
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var request = require("request");
var fs = require('fs');
var inquirer = require('inquirer');

// import keys from .env thru keys.js
var spotify = new Spotify({id: keys.spotify.id,secret: keys.spotify.secret});
var client = new Twitter(keys.twitter);

// inquirer prompts for user input and then runs the cooresponding function using the search term put in
var question = inquirer.prompt([
    {
     type: "list",
     name: 'funSel',
     message: "\nWhat function do you want to perform?",
     choices: ["Display tweets",'Search spotify','Search OMDB','Do what it says']
    },
    {
     type: 'input',
     name: 'searchTerm',
     message: '\nWhat are you searching for?'
    }
]).then(function(user){
    var searchTerm = user.searchTerm;
    var userChoice = user.funSel;
    switch (user.funSel){
        case 'Display tweets':
            getTweets(searchTerm);
            logFile(userChoice,searchTerm);
            break;
        case 'Search spotify':
            getSpotify(searchTerm);
            logFile(userChoice,searchTerm);
            break;
        case 'Search OMDB':
            getMovie(searchTerm);
            logFile(userChoice,searchTerm);
            break;
        case 'Do what it says':
            // DWIS function goes here
            logFile(userChoice,searchTerm);
            break;
    }
});
// get movie function querys OMDB api and outputs information about the movie
var getMovie = (movie) => {
    if (!movie){
        movie = "Memento";
    };
    // make the API call with search term
    request("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=trilogy", function(error, response, body) {
        if (!error && response.statusCode === 200) {
            //console log various information about the movie
            console.log('\nTitle: '+JSON.parse(body).Title);
            console.log('Release Year: '+JSON.parse(body).Year);
            console.log('IMDB Rating: '+JSON.parse(body).Ratings[0].Value);
            console.log('Rotten Tomatoes Rating: '+JSON.parse(body).Ratings[1].Value);
            console.log('Produced in: '+JSON.parse(body).Country);
            console.log('Language: '+JSON.parse(body).Language);
            console.log('Synopsis: '+JSON.parse(body).Plot);
            console.log('Cast: '+JSON.parse(body).Actors);
        }
    });
};
// get tweet function calls twitter api and displays a list of tweets and their timestamp
var getTweets = (handle) =>{
    if (!handle){
        handle = "KenJennings";
    };
    console.log(`Tweets by ${handle}`)
    //make API call to twitter api
    var params = {screen_name: handle};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error && response.statusCode === 200) {
            // over the entire tweet array returned, console log the date and text of each tweet
            for (var i=0; i<tweets.length;i++){
                console.log("\nDate posted: "+ tweets[i].created_at);
                console.log("Tweet: "+tweets[i].text);

            }
        }
    });
};
// get spotify info function queries spotify api and outputs information about a song
var getSpotify = (songTitle) =>{
    if (!songTitle){
        songTitle = "Paris in the rain";
    };
    spotify.search({ type: 'track', query: songTitle}, function(error, data) {
        if (!error) {
        console.log(`\nTitle: ${data.tracks.items[0].name}`);
        console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
        console.log(`Album: ${data.tracks.items[0].album.name}`);
        console.log(`Preview link: ${data.tracks.items[0].preview_url}`);
        }
    });
};
// do what it says - pulls information from random.txt and passes it into the program
var DWIS = () =>{
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        
});
}
//logs a record of the search type and query in log.txt
var logFile = (choice,search)=>{
    fs.writeFile("./log.txt",[choice,search],function(error){
        if (!error) {
            // console.log("Search logged.");
        }
    });
};

