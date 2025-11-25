let song = {
  "title": "Shape of You",
  "artist": "Ed Sheeran",
  "duration": 233,
  "genre": "Pop"
}

// Iterate using for...in
for (let key in song) {
  console.log(`${key}: ${song[key]}`);
}
let playlist = {
  "playlistName": "My Favorites",
  "createdBy": "John",
  "songs": [
    {
      "title": "Shape of You",
      "artist": "Ed Sheeran",
      "duration": 233
    },
    {
      "title": "Blinding Lights",
      "artist": "The Weeknd",
      "duration": 200
    }
  ]
}
function addSong(playlist, newSong) {
  playlist.songs.push(newSong);
}

const newSong = { title: "Lovely", artist: "Billie Eilish", duration: 190 };
addSong(playlist, newSong);

console.log(playlist);


playlist.songs.forEach((song, index) => {
  console.log(`Song ${index + 1}:`);
  for (let key in song) {
    console.log(`  ${key}: ${song[key]}`);
  }
});

const jsonString = '{"playlistName":"Top Hits","songs":[{"title":"Shape of You","artist":"Ed Sheeran"}]}';
  const playlistObj = JSON.parse(jsonString);
console.log(playlistObj.songs[0].title); // Shape of You
const jsonOutput = JSON.stringify(playlist);
console.log(jsonOutput);

let jsonText = JSON.stringify(playlist);
localStorage.setItem("playlist",jsonText);
let storageText = localStorage.getItem("Playlist");
let playlist3 = JSON.parse(storageText);