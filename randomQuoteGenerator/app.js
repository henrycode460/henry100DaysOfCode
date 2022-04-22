let btn = document.getElementById("container");
let output = document.getElementById("output");

let quotes = 

  [
' "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse" ' ,
'"Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill" ',
' "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" ',
'"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost" ',
'"I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale" ',
'"You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky" ',
'"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan" ',
'"The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart" ',
'"Every strike brings me closer to the next home run.", "author": "Babe Ruth" ',
'"Definiteness of purpose is the starting point of all achievement.", "author": "W. Clement Stone" ',
'"We must balance conspicuous consumption with conscious capitalism.", "author": "Kevin Kruse" ',
'"Life is what happens to you while you’re busy making other plans.", "author": "John Lennon" ',
'"We become what we think about.", "author": "Earl Nightingale" ',
'"14.Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "author": "Mark Twain" ',
'"15.Life is 10% what happens to me and 90% of how I react to it.", "author": "Charles Swindoll" ',
'"The most common way people give up their power is by thinking they don’t have any.", "author": "Alice Walker" ',
'"The mind is everything. What you think you become.", "author": "Buddha" ',
'"The best time to plant a tree was 20 years ago. The second best time is now.", "author": "Chinese Proverb" ',
'"An unexamined life is not worth living.", "author": "Socrates" ',
'"Eighty percent of success is showing up.", "author": "Woody Allen" ',

];

btn.addEventListener("click", function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length )]
    output.innerHTML = randomQuote;
})


