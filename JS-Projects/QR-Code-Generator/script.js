// script.js
function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCodeImg = document.getElementById("qrCode");

    if (qrText.trim() === "") {
        alert("Please enter text or a URL");
        return;
    }

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
    qrCodeImg.style.display = "block";
    
    document.getElementById("downloadBtn").style.display = "block";
}

function downloadQR() {
    let qrCodeImg = document.getElementById("qrCode");

    if (qrCodeImg.src === "") return;

    let link = document.createElement("a");
    link.href = qrCodeImg.src;
    link.download = "QRCode.png";
    link.click();
}
