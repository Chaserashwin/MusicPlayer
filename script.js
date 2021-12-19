console.log("Welcome to spotify");

//initialize the Variables
let songIndex = 0
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songName'));

let songs = [
    { songName:"Phir Kabhi", filepath: "songs/1.mp3"},
    { songName:"Tujhe Kitna Chahne lage", filepath: "songs/2.mp3"},
    { songName:"Shayad", filepath: "songs/3.mp3"},
    { songName:"Ae Dil Hai Mushkil", filepath: "songs/4.mp3"},
    { songName:"Astronaut in the Ocean", filepath: "songs/5.mp3"},
    { songName:"Kisan Anthem", filepath: "songs/6.mp3"},
    { songName:"Fikar Not", filepath: "songs/7.mp3"},
    { songName:"Raataan Lambiyan", filepath: "songs/8.mp3"},
    { songName:"Yaad teri", filepath: "songs/9.mp3"},
    { songName:"Main Tumhara", filepath: "songs/10.mp3"}
]

// songItems.forEach((element, i)=>{
//     console.log(element, i);
//     element.getElementsByTagName("")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("")[0].innerText = songs[i].songName;
// });

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('songName');
        e.target.classList.add('songName');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex=1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex=10;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})