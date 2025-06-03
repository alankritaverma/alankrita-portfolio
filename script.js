function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function sendMessage(event) {
  event.preventDefault();
  const input = document.getElementById('messageInput');
  const messagesDiv = document.getElementById('messages');
  const text = input.value.trim();
  if (!text) return;

  const visitorMsg = document.createElement('div');
  visitorMsg.className = 'message visitor';
  visitorMsg.textContent = text;
  messagesDiv.appendChild(visitorMsg);


  input.value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;


  setTimeout(() => {
    const replyMsg = document.createElement('div');
    replyMsg.className = 'message you';
    replyMsg.textContent =
      'Thanks for reaching out! I will get back to you soon.';
    messagesDiv.appendChild(replyMsg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 700);

  return false;
}
