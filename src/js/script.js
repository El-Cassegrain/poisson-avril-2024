const fakeLink = document.querySelector("a#fake-link")
const contactBtn = document.querySelector("#contact-btn")
const codeDiv = document.querySelector("#code-modale")
const closeModaleBtn = document.querySelector("#close-btn")
const moveBtn = document.querySelector("#menu-btn")

let clickCounter = 0

fakeLink.addEventListener("click", () => {
    alert("PRO-FESS-YO-NEL")
})

contactBtn.addEventListener("click", () => {
    var sourceCode = document.documentElement.outerHTML;
    var codeElement = document.createElement('pre');
    codeElement.textContent = sourceCode;
    codeDiv.classList.add("visible");
    codeDiv.appendChild(codeElement);
})

closeModaleBtn.addEventListener("click", () => {
    if (clickCounter % 2 === 0) {
        closeModaleBtn.style.transform = "translate(-50%, 50%)";
      } else {
        codeDiv.classList.remove("visible");
        closeModaleBtn.style.transform = "translate(-50%, -50%)";
      }
    
      clickCounter++;
})

let isGrabbed = false;

moveBtn.addEventListener("mousedown", (event) => {
  isGrabbed = true;
  moveBtn.style.position = "absolute";
  moveBtn.style.left = event.clientX - moveBtn.offsetWidth / 2 + "px";
  moveBtn.style.top = event.clientY - moveBtn.offsetHeight / 2 + "px";
});

document.addEventListener("mousemove", (event) => {
  if (isGrabbed) {
    moveBtn.style.left = event.clientX - moveBtn.offsetWidth / 2 + "px";
    moveBtn.style.top = event.clientY - moveBtn.offsetHeight / 2 + "px";
  }
});

document.addEventListener("mouseup", () => {
  isGrabbed = false;
});

