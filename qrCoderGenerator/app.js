

const qrcode = document.querySelector("img");
const qrtext = document.querySelector("textarea");
const generateBtn = document.querySelector("button");
const downloadBtn = document.querySelector("a");


generateBtn.addEventListener("click", generateQR);

function generateQR() {
  let size = "1000x1000";
  let data = qrtext.value;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
  downloadBtn.href = url;
  qrtext.value = "";
}

console.log(generateQR)

