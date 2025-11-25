

//Get HTML DOM Element Refernces
const form = document.getElementById('songForm');
const list = document.getElementById('songList');
const submitBtn = document.getElementById('submitBtn');


//Get json text and convert to json object, else get empty array
let songs = JSON.parse(localStorage.getItem('playlist')) || [];

//user clicks +add button
form.addEventListener('submit', (e) => {
    e.preventDefault(); //Dont automatically submit to server 

    //Read form data
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    //TODO Validate title, url Fields

    //Create json obj based on form input (title, url)
    const song = {
        id: Date.now(),  // Unique ID
        title: title,
        url: url,
        dateAdded: Date.now()
    };
    
 songs.push(song);
    saveAndRender();
    //TO DO SAVE  AND RERENDER 

    form.reset();
});

function saveAndRender() {

    localStorage.setItem('playlist', JSON.stringify(songs));
    renderSongs();
   
}

function deleteSong(id) {
    if(confirm('Are you sure?')) {
        // Filter out the song with the matching ID
        songs = songs.filter(song => song.id !== id);
        saveAndRender();
    }
}

function renderSongs() {
    list.innerHTML = ''; // Clear current list

    songs.forEach(song => {
        // Create table row
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${song.title}</td>
            <td><a href="${song.url}" target="_blank" class="text-info">Watch</a></td>
            <td class="text-end">
                <button class="btn btn-sm btn-warning me-2" onclick="editSong(${song.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteSong(${song.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        list.appendChild(row);
    });
}



