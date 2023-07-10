const songs = `{ "title": "song title", "artist": [{ "name": "artist name 1"}], "duration": 200 }`;

function getSong() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const parsedSong = JSON.parse(songs);
      if (parsedSong.title && parsedSong.artist && parsedSong.duration) {
        resolve(parsedSong);
      } else {
        reject("Invalid song data");
      }
    }, 2000);
  });
}

// ----------- Promise --------------
getSong()
  .then((songData) => {
    console.log("=== Promise ===");
    console.log(`Title: ${songData.title}`);
    console.log(`Artist: ${songData.artist[0].name}`);
    console.log(`Duration: ${songData.duration} seconds`);
    console.log("---------------------------");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// ---------- Async Await -------------
async function displaySong() {
  try {
    const songData = await getSong();
    console.log("=== Async Await ===");
    console.log(`Title: ${songData.title}`);
    console.log(`Artist: ${songData.artist[0].name}`);
    console.log(`Duration: ${songData.duration} seconds`);
  } catch (error) {
    console.log("Error:", error);
  }
}
displaySong();
