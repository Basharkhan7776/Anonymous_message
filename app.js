window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
});

const msgForm = document.querySelector('.msg form');
const infoElement = document.querySelector('.info');
const sendButton = document.getElementById('send');
const messageInput = document.getElementById('message');

document.getElementById('info').addEventListener('click', (event) => {
    event.preventDefault();
    toggleMsgForm();
});

sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    sendMsg();
});

function toggleMsgForm() {
    if (msgForm.style.display === 'none') {
        msgForm.style.display = 'flex';
        infoElement.style.display = 'flex';
        setTimeout(() => {
            infoElement.style.display = 'none';
        }, 2000);
    } else {
        msgForm.style.display = 'none';
        infoElement.style.display = 'flex';
    }
}

function sendMsg() {
    const message = messageInput.value;
    const telegramBotToken = '';// <--- 
    const telegramChatId = '';// <--- 

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegramChatId,
            text: message
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                alert("Message sent successfully!");
            } else {
                alert("Error sending message!");
            }
        })
        .catch((error) => {
            alert("Error sending message!");
        });
} 