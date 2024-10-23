function loadMessages() {
    const messages = JSON.parse(localStorage('messages')) || [];
    const chatMessages = document.getElementById('chat-messages');

    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add(message.type);
        messageElement.textContent = message.content;
        chatMessages.appendChild(messageElement);

    })
}

function saveMessage(content, type) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ content, type });
    localStorage.setItem('messages', JSON.stringify(messages));
}

window.addEventListener('load', () => {
    loadMessages();
});


document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const messageElement = document.createElement('div')
    messageElement.classList.add('self')
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement)

    saveMessage(message, 'self')

    messageInput.value = '';
});

const contacts = document.querySelectorAll('.conatct')
contacts.forEach(conctact => {
    conctact.addEventListener('click', () => {
        document.querySelector('.chat-header h1').textContent`discussion avc ${conctact.textContent}`
        document.getElementById('chat-messages').innerHTML = '';


        loadMessages();


    })
})