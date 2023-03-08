let currentUrl;
let currentTtitle;

document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    currentUrl = currentTab.url;
    currentTtitle = currentTab.title;

    // display this text in the title
    document.querySelector(".subtitle").innerHTML = currentUrl.split("/")[2];
    document.querySelector(".title").innerHTML += " " + currentTtitle;
  });

  document.querySelector(".send-new-message").addEventListener("click", () => {
    // get the message from text-input
    let message = document.querySelector(".text-input").value;

    // add message to the .messsages ol
    let messages = document.querySelector(".messages");

    let li = document.createElement("li");
    li.innerHTML = message;

    messages.appendChild(li);

    // scroll to the bottom of the messages
    messages.scrollTop = messages.scrollHeight;
  });
});
