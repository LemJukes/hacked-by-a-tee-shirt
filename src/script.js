const messages = [
    "YOU JUST GOT HACKED",
    "(just kidding, but you could have been, keep a look out!)"
];

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    
    if (!messageElement) {
        console.error('Message element not found!');
        return;
    }

    let currentIndex = 0;
    messageElement.style.transition = 'opacity 1s ease-in-out';

    function switchMessage() {
        messageElement.style.opacity = 0;
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            messageElement.textContent = messages[currentIndex];
            messageElement.style.opacity = 1;
        }, 1000);
    }

    setInterval(switchMessage, 3000);
    console.log('Animation script loaded successfully');
});