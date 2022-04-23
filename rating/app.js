
const allStar = document.querySelectorAll(".star");

let currentrating = document.querySelector(".currentrating");


allStar.forEach((star, i) =>{
    star.onclick = function(){
        console.log(star);
        let currentStarLevel = i + 1;

        currentrating.innerHTML = `${currentStarLevel} of 5`;
      


        allStar.forEach((star, j) => {
            // console.log(j + 1)
            if(currentStarLevel >= j + 1){
                star.innerHTML = '&#9733';

            }else{
                star.innerHTML = '&#9734';
            }

        })
    }
})

