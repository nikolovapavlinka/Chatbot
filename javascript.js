
const userInput = document.querySelector(".user_input");
const sendBtn = document.querySelector(".send_btn");
const chatbox = document.querySelector(".chat_text");

let userMessage;

const createChatLi = (message, className) => {
  
  const chatLi = document.createElement("li");

  chatLi.classList.add("msg", className);

  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p><span class="material-symbols-outlined usergen">person</span>`
      : `<p>${message}</p><span class="material-symbols-outlined">smart_toy</span>`;
  chatLi.innerHTML = chatContent;

  return chatLi;
};

const handleClick = () => {
  
  const userMessage = userInput.value.trim().toLowerCase();

  if (!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  console.log(userMessage);

  setTimeout(() => {
    chatbox.appendChild(createChatLi("Thinking...", "incoming"));
  }, 600);

  if (userMessage.includes("name")) {
    setTimeout(() => {
      chatbox.appendChild(createChatLi("Your name is Pavlinka!", "incoming"));
    }, 600);
  }

  if (userMessage.includes("age")) {
    setTimeout(() => {
      chatbox.appendChild(createChatLi("You are 24 years old!", "incoming"));
    }, 600);
  }

  if (userMessage.includes("javascript")) {
    setTimeout(() => {
      chatbox.appendChild(
        createChatLi("JavaScript is a programming language!", "icoming")
      );
    }, 600);
  }
};

sendBtn.addEventListener("click", handleClick);