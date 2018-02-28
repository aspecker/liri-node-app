# Liri.js homework
## Adam Specker

## Packages Installed
* spotify, spotify-web-api-node, twitter
* dotenv, request, require



## Instructions
spotify-this-song,"I Want it That Way"
Make a JavaScript file named liri.js.

At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();
Add the code required to import the keys.js file and store it in a variable.
You should then be able to access your keys information like so
  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);
Make it so liri.js can take in one of the following commands:
* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`
What Each Command Should Do
node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.
node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.

You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

Step One: Visit https://developer.spotify.com/my-applications/#!/

Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

node liri.js movie-this '<movie name here>'
This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!
You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.
BONUS
In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

Make sure you append each command you run to the log.txt file.

Do not overwrite your file each time you run a command.

Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

Create a README.md
Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:

About READMEs

Mastering Markdown

Add To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

One More Thing
If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

Good Luck!