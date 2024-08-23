 document.addEventListener("DOMContentLoaded", function() {
     const countdownTimer = document.getElementById("countdown-timer");
     const cracker = document.getElementById("cracker");
     const crackerGif = document.getElementById("cracker-gif");
     const birthdayMessage = document.getElementById("birthday-message");

     // Set the date we're counting down to
     const countdownDate = new Date("Aug 22, 2024 01:00:00").getTime();

     // Update the countdown every 1 second
     const x = setInterval(function() {
         const now = new Date().getTime();
         const distance = countdownDate - now;

         // Time calculations for days, hours, minutes, and seconds
         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

         // Display the result in the element
         countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

         // If the countdown is over, write some text and show the cracker animation
         if (distance < 0) {
             clearInterval(x);
             countdownTimer.innerHTML = " ";
             cracker.classList.remove("hidden");
             crackerGif.style.display = "block";
             birthdayMessage.style.display = "block";
         }
     }, 1000);
 });



//

// JavaScript to handle scroll and make images sticky
window.addEventListener('scroll', function() {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    images.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        if (rect.top <= 0) {
            img.classList.add('sticky');
        } else {
            img.classList.remove('sticky');
        }
    });
});

//
// Function to add a message to the message wall
function addMessage() {
    const messageInput = document.getElementById('message-input');
    const mediaInput = document.getElementById('media-input');
    const messageText = messageInput.value;
    const mediaFile = mediaInput.files[0];

    if (messageText.trim() === '' && !mediaFile) {
        alert('Please write a message or select a photo/video.');
        return;
    }

    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message';

    if (messageText.trim() !== '') {
        const messageTextNode = document.createElement('p');
        messageTextNode.innerText = messageText;
        messageElement.appendChild(messageTextNode);
    }

    if (mediaFile) {
        const mediaElement = document.createElement(mediaFile.type.startsWith('image') ? 'img' : 'video');
        mediaElement.src = URL.createObjectURL(mediaFile);
        if (mediaFile.type.startsWith('video')) {
            mediaElement.controls = true;
        }
        messageElement.appendChild(mediaElement);
    }

    messagesContainer.appendChild(messageElement);
    messageInput.value = '';
    mediaInput.value = '';
}

document.addEventListener("DOMContentLoaded", function() {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkTimeline() {
        timelineEvents.forEach(event => {
            if (isInViewport(event)) {
                event.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", checkTimeline);
    checkTimeline(); // Initial check
});


 document.addEventListener("DOMContentLoaded", function() {
     const countdownTimer = document.getElementById("countdown-timer");
     const cracker = document.getElementById("cracker");

     // Set the date we're counting down to
     const countdownDate = new Date("Aug 15, 2024 00:00:00").getTime();

     // Update the count down every 1 second
     const x = setInterval(function() {
         const now = new Date().getTime();
         const distance = countdownDate - now;

         // Time calculations for days, hours, minutes, and seconds
         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

         // Display the result in the element
         countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

         // If the count down is over, write some text and show the cracker animation
         if (distance < 0) {
             clearInterval(x);
             countdownTimer.innerHTML = " ";
             cracker.classList.remove("hidden");
         }
     }, 1000);

    // Video Thumbnails Functionality
    const videoThumbnails = document.querySelectorAll("#video-thumbnails img");
    const mainVideo = document.getElementById("main-video");

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            mainVideo.src = this.getAttribute("data-video");
            mainVideo.play();
        });
    });
});


