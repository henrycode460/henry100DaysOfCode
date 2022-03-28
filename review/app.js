// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://cdn.pixabay.com/photo/2015/08/25/10/40/ben-knapen-906550_960_720.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/07/19091528/POP3-300x214.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://image.cnbcfm.com/api/v1/image/106689818-1599150563582-musk.jpg?v=1630603757",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://i.guim.co.uk/img/media/791c139fcb94e1094512b045e939a8ca9dceec75/0_635_4712_4706/master/4712.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=850d0cffdfb9434bcea77373896f7d40",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
})

// show person base on item

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person

nextBtn.addEventListener("click", function(){
  currentItem ++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  };
  showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener("click", function(){
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length -1;
  };
  showPerson(currentItem);
});

// suprise button
randomBtn.addEventListener("click", function(){
  currentItem = getrandomNumber();
  showPerson(currentItem);

})

// random number function
function getrandomNumber (){
  return Math.floor(Math.random()* reviews.length)
}