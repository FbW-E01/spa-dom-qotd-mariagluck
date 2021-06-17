const quotes = [
    'Talk is cheap. Show me the code.',
    'Programs must be written for people to read, and only incidentally for machines to execute.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'I am not a great programmer; I am just a good programmer with great habits.',
    'Truth can only be found in one place: the code.',
    'How you look at it is pretty much how you will see it',
    'You have baked a really lovely cake, but then you have used dog shit for frosting.',
    'Walking on water and developing software from a specification are easy if both are frozen.',
    'The most important property of a program is whether it accomplishes the intention of its user.',
    'A conscious human is driven by their conscience, not popular opinion.',
    'Humans are allergic to change. They love to say, ‘We’ve always done it this way',
    'I try to fight that. That’s why I have a clock on my wall that runs counterclockwise',
    'We need to understand that if we all work on inclusion together, it’s going to be faster, broader, better, and more thorough than anything we can do on our own',
    'I think it’s very important to get more women into computing. My slogan is: Computing is too important to be left to men',
   
  ];


const body = document.body;
body.style.fontFamily = "Gill Sans, sans-serif";
body.style.backgroundImage = "url(ales-nesetril-Im7lZjxeLhg-unsplash.jpg)";
body.style.backgroundSize = "cover";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.color = "white";

const title = document.querySelector("h1");
title.style.textAlign = "center";
title.style.marginTop = "100px";
title.style.fontSize = "3rem";


const buttonQuote = document.querySelector("button");
const inputDiv = document.querySelector("div");


inputDiv.style.textAlign = "center";
inputDiv.style.width = "60vw";
inputDiv.style.height = "70px";
inputDiv.style.margin = "30px";
inputDiv.style.padding = "30px";
inputDiv.style.borderRadius = "12px";
inputDiv.style.fontSize = "1.2rem";

buttonQuote.style.width = "12vw";
buttonQuote.style.padding = "15px";
buttonQuote.style.borderRadius = "12px";
buttonQuote.style.border = "none";
buttonQuote.style.fontSize = "1.2rem";


function randomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    inputDiv.innerHTML = "<b style='font-size: 2em'>\"</b>"+quotes[randomNumber]+"<b style='font-size: 2em'>\"</b>";
}

buttonQuote.addEventListener("click", randomQuote);