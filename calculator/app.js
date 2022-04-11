// selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");

const keys = document.querySelectorAll("button");



// eventlisteners
keys.forEach(key => {
    key.addEventListener("click", calculate);
});

function calculate(){
    // console.log("working");
    let buttonText = this.innerText;
    if(buttonText === "AC"){
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;

    }

    if(buttonText === "DEL"){
        output.innerText = output.textContent.substr(0, output.textContent.length -1) ;
        return;
    }

    if(buttonText === "="){
        result.innerText = eval(output.innerText);
        result.style.animation ="big 0.4s ease-in-out";
        output.style.animation = "small 0.4s ease-in-out ";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";

    } else {
        output.textContent += buttonText;
        return;
    }
}