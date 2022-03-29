
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function() {
    // Method # 1
    // console.log(links.classList);

    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }

    // Method # 2

    links.classList.toggle('show-links');


});