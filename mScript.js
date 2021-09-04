alert("1. I made this Music Player for Practice Purpose 😊" +"\n"+ "2. This Music Player have only 5 songs 😅 " + "\n" + "3. AutoChange feature is not included 😕" +"\n"+ "4. Do Comment about this work 😇");
const music = document.querySelector("audio");
        const img = document.querySelector("img");
        const play = document.getElementById("play");
        const artist = document.getElementById("artist");
        const title = document.getElementById("title");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");

        const songs = [
            {
                name: "music-1",
                title: "Kuch Din",
                artist: "Jubin Nautiyal",
            },
            {
                name: "music-2",
                title: "Lut Gaye",
                artist: "Jubin Nautiyal",
            },
            {
                name: "music-3",
                title: "Kuch To Bata",
                artist: "Jubin Nautiyal",
            },
            {
                name: "music-4",
                title: "Kabhi Tumhe",
                artist: "Darshan Raval",
            },
            {
                name: "music-5",
                title: "Rihaee",
                artist: "Yaseer Desai",
            },
        ];



        let isPlaying = false;

        //for play
        const playMusic = () => {
            isPlaying = true;
            music.play();
            play.classList.replace("fa-play","fa-pause");
            img.classList.add("anime");
        
        };

            // for pause
        const pauseMusic = () => {
            isPlaying = false;
            music.pause();
            play.classList.replace("fa-pause","fa-play");
            img.classList.remove("anime");
    
        };

        play.addEventListener("click", () =>{
            if(isPlaying){
                pauseMusic();
            }else{
                playMusic();
            }
        });

        //Changing the music data

        const loadSong = (songs) => {
            title.textContent = songs.title;
            artist.textContent = songs.artist;

            music.src = "music/" + songs.name + ".mp3";
            img.src = "images/" + songs.name + ".jpg";
        };
        songsIndex = 0;
        //loadSong(songs[2]);
        const nextSong = () =>{
            songsIndex = (songsIndex + 1)%songs.length;
            loadSong(songs[songsIndex]);
            playMusic();
        };

        const prevSong = () =>{
            songsIndex = (songsIndex - 1+songs.length)%songs.length;
            loadSong(songs[songsIndex]);
            playMusic();
        }


        next.addEventListener('click',nextSong);
        prev.addEventListener("click",prevSong);
