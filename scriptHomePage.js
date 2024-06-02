


function ReadText() {
    var moreText = document.getElementById("moreText");
    var backgroundElement = document.getElementById("background");
    backgroundElement.style.backgroundPosition = "center";

    moreText.classList.toggle("hidden");

    var btnText = moreText.classList.contains("hidden") ? "Read More" : "Read Less";
    document.querySelector(".main_btn").innerText = btnText;
  }