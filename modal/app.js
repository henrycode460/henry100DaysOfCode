// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const modalbtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalbtn.addEventListener("click", function (){
//   console.log ('modal-overlay.classList');

modal.classList.add("open-modal");

});

closeBtn.addEventListener("click", function (){
    modal.classList.remove("open-modal");

    
});


