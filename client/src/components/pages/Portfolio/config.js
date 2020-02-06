const projects = [];

const Project = function(name, type, thumbnail, date) {
	this.name = name;
	this.type = type;
	this.thumbnail = '/assets/'+thumbnail;
	this.featured = false;
	this.date = date;
	projects.push(this);

	this.setTechnologies = function(arr, apiArr, modArr) {
		this.tech = arr;
		if(apiArr) this.apis = arr;
		if(modArr) this.nodeModules = modArr;
	};

	this.setLinks = function(links) {
		this.github = links[0];
		this.link = links[1];
	};
};
Project.setFeatured = project => {
	project.featured = true;
};

const sellOut = new Project('Sell Out!', 'Project', 'sell-out.png', 'February 2020');
sellOut.setTechnologies(['ReactJS', 'Bootstrap', 'Node.js', 'MySQL', 'Express.js', 'CSS'], [], ['Axios', 'React Bootstrap', 'React Particles']);
sellOut.setLinks(["https://github.com/matt319940/sellout", "http://matt-sellout.herokuapp.com/"]);
sellOut.desc = "From the 'About' page: Sell Out is a two-part web application. Firstly, we employ a Business to Business (B2B) model to facilitate the exchange of goods and services among its business users. And secondly, the sales of these goods and services are facilitated via our own personally employed sales force, which consists of a team of contractors qualified through training - thereby outsourcing any need of a Sales Department for our business users.";

const keepCheerful = new Project("Keep Cheerful", "Project", "keep-cheerful.png", "December 2019");
keepCheerful.setTechnologies(["HTML & CSS", "Bootstrap", "Javascript & jQuery", "Node.js", "Express.js", "Handlebars.js", "MySQL", "AJAX"], ["Dark Sky", "icanhazdadjoke", "Unofficial Astrology.com API"], ["Axios", "Sequelize", "dotenv", "Reverse Geocode"]);
keepCheerful.setLinks(["https://github.com/mattjuskiw/projectTwo", "https://juskiw-keepcheerful.herokuapp.com/"]);
keepCheerful.desc = "Keep Cheerful is the result of a group project I completed by myself. As a 'cheer me up' web application, Keep Cheerful is designed to provide wholesome, brief distractions from upcoming stressful events, without becoming to consuming of a distraction. The application features a dynamic calendar, which I designed and implemented myself, where users can enter in stressful upcoming events, with details such as dates, times, location, and a description. There is a second page of the application where users can be briefly distracted by current weather conditions in 3 locations: the user's location (determined with Javascript's native navigator library), somewhere worse (the South Pole in Antarctica) and somewhere better (Honolulu, Hawaii). Below weather data, the user can be amused with a random 'dad joke,' as well as a daily horoscope based on zodiac sign. ";

const artistry = new Project("Artistry", "Group Project", "microphone1.jpg", "October 2019");
artistry.setTechnologies(["HTML & CSS", "Bootstrap", "Javascript & jQuery", "Two APIs", "AJAX"], ["Last.fm", "Discogs"]);
artistry.setLinks(["https://github.com/mattjuskiw/Artist-inquiry", "https://tyeshiawilcox.github.io/Artist-inquiry/"]);
artistry.desc = "Artistry was the result of a group project in my Web Development course. " + 
    "We agreed to do a basic application functioning as a music database. " + 
    "Using it is simple: in the input box: type in the name of your favorite music artist or band, click search, " + 
    "and this application will load a short bio, an image of the artist/group, a list of 5 genres to describe his/her/their style, " + 
    "as well as 5 similar artists/groups. Shortly afterwards, the page also loads the artist's discography, " +
    "showing all of their albums in chronological order, each with an image of the cover art, the title and release year, and a " +
    "tracklisting including song lengths. Feel free to search for another, or click on one of the links we generated for " +
	"similar artists and enjoy more researching!";
	
const youtuberRPG = new Project("YouTuber Musician Fight!", "Game", "youtuber-musician-fight.png", "September 2019");
youtuberRPG.setTechnologies(["HTML & CSS", "Bootstrap", "Javascript & jQuery"]);
youtuberRPG.setLinks(["https://github.com/mattjuskiw/HomeworkFour", "https://mattjuskiw.github.io/HomeworkFour/"]);
youtuberRPG.desc = "Modelled after a Star Wars character battle RPG program, this dynamic game allows you to choose " +
    "among 8 different musicians on YouTube as your and the computer's characters. More complex then my Hangman game, " +
    "this project makes use of jQuery animations, JavaScript classes, arrays, and objects, as well as heavier usage of Bootstrap CSS. " +
    "Each character has 3 different 'powers' that are used against the opposer, each with their own strength. " +
    "Upon the user chooosing a power to use, the computer immediately responds with a random choice of their powers. " +
    "A Bootstrap progress bar keeps track of both characters' health levels. Once one of the characters' health runs to 0%, an alert " +
    "is displayed, telling the user whether they won or lost, and the game starts over again.";

const liri = new Project("Liri", "Node Command-line Application", "liri.PNG", "October 2019");
liri.setTechnologies(["Node.js"], ["Spotify", "Bandsintown", "OMDb"], ["Axios","fs","node-spotify-api"]);
liri.setLinks(["https://github.com/mattjuskiw/liri-node-app", "https://github.com/mattjuskiw/liri-node-app"]);
liri.desc = "A simple command-line application for Node.js that allows you to search for several different things. " +
	"A user can search Bandsintown for upcoming concerts for a band, and be given the city and country, the lineup (if there are any " +
	"opening acts), along with the date and time. A user can also search Spotify for a song, and find the artist, along with " +
	"which track it appears, out of how many tracks, on which album, and what year the album was released. The user will also see " +
	"the duration of the song, and will be given a link to hear the song on Spotify. In addition to concerts and songs, users can " +
	"also search OMDb for movies, and find the year of the release, the MPAA rating, featured actors and actresses, country and language. " +
	"Afterwards, a summary of the movie's plot will be displayed, followed by ratings from Rotten Tomatoes and IMDb. Finally, users can " +
	"run the command 'do-what-it-says' to run the command written in an external text file. Every user command will be logged into an external " +
	"local text file.";

const geoTrivia = new Project("Geography Trivia!", "Game", "niagarafalls-trees.jpeg", "September 2019");
geoTrivia.setTechnologies(["HTML & CSS", "Bootstrap", "Javascript & jQuery", "JSON"]);
geoTrivia.setLinks(["https://github.com/mattjuskiw/TriviaGame", "https://mattjuskiw.github.io/TriviaGame/"]);
geoTrivia.desc = "Just a simple 10-question trivia game on world geography. This game displays ten questions " +
	"I came up with in random order, keeps track of how many the user gets correct and incorrect, as well as limits their " +
	"time to answer each question to 20 seconds. There is a button for no answer, saying 'I don't know.' Clicking this button does, " +
	"however, count as an incorrect answer. The background image (pictured above) is a picture I took in Niagara Falls, ON, Canada.";

const hangman = new Project("Hangman", "Game", "hangman.png", "August 2019");
hangman.setTechnologies(["HTML & CSS", "Bootstrap", "Javascript & jQuery"]);
hangman.setLinks(["https://github.com/mattjuskiw/HomeworkThree", "https://mattjuskiw.github.io/HomeworkThree/"]);
hangman.desc = "A simple hangman game. The game keeps track of the user's correct and incorrect guesses, how many " +
	"guesses the player has left, and how many times the user has won and lost. The player cannot guess the same letter twice. " +
	"There are two buttons: one to generate a new word and one to forfeit the current word. As the game of hangman goes, each " +
	"incorrect guess draws an element of hangman. The game revolves around keyboard input.";

const giphyReactions = new Project("Giphy Reactions" ,"API Implementation", "GIPHY-logo.jpg", "September 2019");
giphyReactions.setTechnologies(["HTML & CSS", "Bootstrap", "Javascript & jQuery"]);
giphyReactions.setLinks(["https://github.com/mattjuskiw/GiphyAPI-HW", "https://mattjuskiw.github.io/GiphyAPI-HW/"]);
giphyReactions.desc = "This simple implementation of the Giphy API allows users to search GIPHY for GIFs, " +
	"also allowing them to add or remove GIFs from a favorites list stored in the browser's localStorage. Although it comes with 6 default " +
	"search categories, users can add their own (also stored in localStorage), and reset to the default ones. There are two additional " +
	"buttons in a sidebar: one to clear the page of all their searches, and one to show their favorited GIFs.";

Project.setFeatured(sellOut);

module.exports = projects;