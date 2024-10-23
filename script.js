
function saveMessage(content, type) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ content, type });
    localStorage.setItem('messages', JSON.stringify(messages));
}

window.addEventListener('load', () => {
    loadMessages();
});





const contact = document.querySelectorAll('.contact')
contacts.forEach(contact => {
    contact.addEventListener('click', () => {
        document.querySelector('.chat-header h1').textContent = `discussion avec ${conctact.textContent}`
        document.getElementById('chat-messages').innerHTML = '';


        loadMessages();


    })
})
