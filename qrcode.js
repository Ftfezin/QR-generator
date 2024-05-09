const qrInput = document.getElementById("qr-input");
const qrBtn = document.getElementById("qr-btn");
const qrImg = document.getElementById("qr-img");


qrBtn.addEventListener('click' , () => {
    const inputValue = qrInput.value;
    console.log(inputValue)

    if (!inputValue) {
        alert("Enter a valid link/URL");
        return;
    }else{
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}`;
        qrImg.alt = `QR code for ${qrInput}`;
    }

});