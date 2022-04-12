const carouse = document.querySelector(".carousel-slide");

const carouseImage = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter
let counter = 1;
const size = carouseImage[0].clientWidth;

carouse.style.transform = 'translateX(' + (-size * counter + 'px');

// button listener

nextBtn.addEventListener("click", () =>{
    if(counter >= carouseImage.length -1) return
    carouse.style.transition = "transform 0.1s ease-in-out";
    counter++;
    carouse.style.transform = 'translateX(' + (-size * counter + 'px');
   
});

prevBtn.addEventListener("click", () =>{
    if(counter <= 0) return;
    carouse.style.transition = "transform 0.1s ease-in-out";
    counter--;
    carouse.style.transform = 'translateX(' + (-size * counter + 'px');
   
})

carouse.addEventListener("transitionend", () => {
   
    if (carouseImage[counter].id === "lastClone")
    {
        carouse.style.transition = "none";
        counter = carouseImage.length -2;
        carouse.style.transform = 'translateX(' + (-size * counter + 'px');

    }

    if (carouseImage[counter].id === "firstClone")
    {
        carouse.style.transition = "none";
        counter = carouseImage.length - counter;
        carouse.style.transform = 'translateX(' + (-size * counter + 'px');

    }

})



