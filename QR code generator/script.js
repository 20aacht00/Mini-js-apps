const QR_CODE_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let container = document.getElementsByClassName(".container");

let ImgBox = document.getElementById("img-box");

function generateQR() {
  let QRText = document.getElementById("qr-text");
  let QRImg = document.getElementById("qr-img");
  if (QRImg.src != "") {
    // QRImg.remove();
    QRText.remove();
    let QRText = document.createElement("div").id("qr-text");
    let QRImg = document.createElement("img").id("qr-img");
    QRText.appendChild(QRImg);
    container.appendChild(QRText);
  }
  if (QRText.value.length > 0) {
    QRImg.src = QR_CODE_URL + QRText.value;
    ImgBox.classList.add("show-img");
    QRText.placeholder = "The QR code is for: " + QRText.value;
    QRText.value = "";
  } else {
    QRText.classList.add("error");
    setTimeout(() => {
      QRText.classList.remove("error");
    }, 1000);
  }
}
