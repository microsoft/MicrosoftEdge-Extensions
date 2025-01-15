chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const img = document.createElement("img");
  img.src = request.url;
  img.id = request.imageDivId;
  img.className = "slide-image";
  document.querySelector("body").prepend(img);

  const style = document.createElement("style");
  style.textContent = ".slide-image {height: auto; width: 97vw;}";
  document.querySelector("head").prepend(style);

  $(`#${request.imageDivId}`).click(function() {
      $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
  });

  sendResponse({ fromcontent: "This message is from content.js" });
});
