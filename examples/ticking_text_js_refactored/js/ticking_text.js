// Setting main arrays
let letters = [document.getElementById('ticker1'), document.getElementById('ticker2'), document.getElementById('ticker3'), document.getElementById('ticker4'), document.getElementById('ticker5'), document.getElementById('ticker6'), document.getElementById('ticker7')];
let fontList = ['Bonheur Royale', 'Caramel', 'Gemunu Libre', 'Futura PT', 'Arial', 'Impact', 'Times New Roman', 'Abril Fatface']; //last one is what it'll end up as
const scrollChk = document.getElementById('scrollCtl');
// Count to numbers
let totalLetters = letters.length;
let countTimes = totalLetters - 1;

let isScrollChk = false;
let current = new Array(totalLetters);


// Setting all the counters
let c = 0;
let a = 0;
let b = 0;
let s = 0;
let r = 0;
let d = fontList.length;

console.log("countTimes is: " + countTimes);


// Single tick on mouseover
function singleTick(i) {
  s++;
  if (s < fontList.length) {
    letters[i].style.fontFamily = fontList[s];
    console.log("ticking " + letters[i].id + " to " + fontList[s]);
  } else {
    s = 0;
  }
};

// Opening ticks
function openingTicks() {
    if(b < d) {

        if(c < totalLetters ){
          c++;
          letters[a].style.fontFamily = fontList[c];
          console.log("else ran... " + fontList[c]);
          if (a < (totalLetters)) {
          a++;
          console.log("a increment is now: " + a);
        } else {
          a = 0;
          };

        }
        else {
          c = b + 1;
          a = 0;
          b++;
          console.log('let b is: ' + b);
        };
  } else {
    console.log("cancelling... and " + fontList[c]);
    clearInterval(initiateTicks);

  };
}

// Run the initiator sequence
let initiateTicks = setInterval(openingTicks, 100);


//Declare tick on scroll function

function scrollTicks(e){
    let scrolled = window.pageYOffset;
    let rate = Math.round(scrolled / 100);
    // Conditional
    if(rate > (fontList.length - 1)) {
      rate = rate - 7;
    }
    console.log(rate);
    if (r < letters.length) {
      letters[r].style.fontFamily = fontList[rate];
      //splice current value of r into current array to keep track of what the current font on that letter is
      current.splice(r, 1, rate);
      r++;
    } else {
      r = 0;
    }
}

function scrollStop(e){
  for(let i = 0; i < letters.length; i++){
    letters[i].style.fontFamily = fontList[current[i]];
  }
}

scrollChk.addEventListener('change', (e) => {

  if (e.target.checked) {
  // console.log('scrlchk true');
    isScrollChk = true;
    console.log(isScrollChk);
  }else if(!e.target.checked){
    console.log('scrollChk unchecked');
    isScrollChk = false;
    console.log(isScrollChk);
  }

  if(isScrollChk){
    window.onscroll = scrollTicks;
  }

  if(!isScrollChk){
    console.log(current);
    window.onscroll = scrollStop;
  }
});
