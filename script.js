const messages = [
    "YOU JUST GOT HACKED",
    "(just kidding, i promise)"
];

let currentIndex = 0;
const messageElement = document.getElementById('message');

function updateMessage() {
    messageElement.classList.remove('visible');
    
    setTimeout(() => {
        messageElement.textContent = messages[currentIndex];
        messageElement.classList.add('visible');
        currentIndex = (currentIndex + 1) % messages.length;
    }, 500);
}

updateMessage();
setInterval(updateMessage, 3000);