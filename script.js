function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value.trim();
    
    if (userMessage === '') return;

    addMessageToChatLog('User', userMessage);
    inputField.value = '';  // Clear input field

    // Show loading indicator for AI response
    addMessageToChatLog('AI', 'Typing...');

    // Send user message to backend (example endpoint: /chat)
    fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        // Remove "Typing..." and show actual AI response
        document.querySelector('#chat-log li:last-child .message').textContent = data.reply;
    })
    .catch(error => {
        console.error('Error:', error);
        // Update the last AI message to show an error message
        document.querySelector('#chat-log li:last-child .message').textContent = 'Sorry, there was an error processing your message.';
    });
}

function addMessageToChatLog(sender, message) {
    const chatLog = document.getElementById('chat-log');
    const messageItem = document.createElement('li');
    messageItem.innerHTML = `
        <span class="avatar ${sender.toLowerCase()}">${sender}</span>
        <div class="message">${message}</div>
    `;
    chatLog.appendChild(messageItem);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the latest message
}
