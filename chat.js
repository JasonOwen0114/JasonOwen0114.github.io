document.getElementById("sendBtn").addEventListener("click", function() {
    sendMessage();
  });
  
  document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  
  function sendMessage() {
    var message = document.getElementById("messageInput").value;
  
    if (message !== "") {
      addMessageToChatbox("user", message);
      document.getElementById("messageInput").value = "";
  
      setTimeout(function() {
        var autoReply = "Your message will be replied as soon as possible.";
        addMessageToChatbox("auto", autoReply);
      }, 500);
    }
  }
  
  function addMessageToChatbox(sender, message) {
    var chatbox = document.getElementById("chatbox");
  
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
  
    if (sender === "user") {
      messageElement.classList.add("user-message");
    } else if (sender === "auto") {
      messageElement.classList.add("auto-message");
    }
  
    chatbox.appendChild(messageElement);
  
    chatbox.scrollTop = chatbox.scrollHeight;
  }