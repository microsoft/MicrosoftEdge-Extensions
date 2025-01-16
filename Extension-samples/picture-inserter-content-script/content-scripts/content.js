chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const img = document.createElement("img");
  img.id = request.imageDivId;
  img.src = request.url;
  img.style = "height: auto; width: 90vw;";
  document.body.prepend(img);

  img.addEventListener("click", () => {
      img.remove();
  }, { once: true });

  sendResponse({ fromcontent: "This message is from content.js" });
});
