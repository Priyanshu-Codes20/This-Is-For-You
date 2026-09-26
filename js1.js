/* =====================================
   START JOURNEY BUTTON
===================================== */

const startJourney =
    document.getElementById("startJourney");

const timeline =
    document.getElementById("timeline");


startJourney.addEventListener("click", () => {

    timeline.scrollIntoView({
        behavior: "smooth"
    });

});


/* =====================================
   MUSIC
===================================== */

const musicButton =
    document.getElementById("musicButton");

const music =
    document.getElementById("backgroundMusic");

let musicPlaying = false;


if (musicButton && music) {

    music.volume = 0.5;

    musicButton.addEventListener("click", async () => {

        try {

            if (musicPlaying) {

                music.pause();
                musicButton.textContent = "🎵";
                musicPlaying = false;

            } else {

                await music.play();
                musicButton.textContent = "🔊";
                musicPlaying = true;

            }

        } catch (error) {

            music.pause();
            musicButton.textContent = "🎵";
            musicPlaying = false;

            console.warn("Audio playback was blocked by the browser.", error);

        }

    });

    music.addEventListener("error", () => {

        music.pause();
        musicButton.textContent = "🎵";
        musicPlaying = false;

    });

}


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".timeline-item, .memory-card, .mini-card, .note-container"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});