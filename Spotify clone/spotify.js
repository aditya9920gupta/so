
let currentSong = new Audio()

async function getSongs(){
 
    let a =  await fetch("http://127.0.0.1:3000/songs/")
let response = await a.text();

let div = document.createElement("div")
div.innerHTML = response;
 let as = div.getElementsByTagName("a")
 let songs = []
 for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href.split("/songs/")[1])
    }
    
 }
return songs

}
const playMusic = (track)=>{
   // let audio = new Audio("/songs/"+track)
 currentSong.src = "/songs/"+track;
    currentSong.play()
}
 async function main(){
    
    let songs = await getSongs()
    console.log(songs)
    playMusic(songs[1])
let Songul = document.querySelector(".playlist").getElementsByTagName("ul")[0]
for (const song of songs) {
    Songul.innerHTML = Songul.innerHTML + `<li><img class="invert" src="music.svg">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}
        
        </div>
        <div  class="playnow">
            <span>Play now</span>
            <img  "class="" src="playnow.svg">
        </div></li>`;
      
        
}
 




Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click",element=>{
        console.log(e.querySelector(".info").firstElementChild.innerHTML)
        playMusic(e.querySelector(".info").firstElementChild.innerHTML)
    })
})

play.addEventListener("click",()=>{
    if(currentSong.paused){
currentSong.play()
play.src ="pause.svg"
    }
    else{
        currentSong.pause()
        play.src = "playnow.svg"
    }
})
document.querySelector(".hamburger").addEventListener("click",()=>{
document.querySelector(".leftbar").style.left ="0",
document.querySelector(".home")

})
document.querySelector(".close").addEventListener("click",()=>{
document.querySelector(".leftbar").style.left ="-100%"
})
document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>
{
console.log(e,e.target.value)
currentSong.volume = parseInt(e.target.value)/100
})
 }

main()
    
 


    
 

