//sublinhado

const lt = document.querySelector('.lt');
const spans = lt.querySelectorAll('span');
let totalWidth = 0;
spans.forEach(span => {
  totalWidth += span.offsetWidth * -1;
});

document.documentElement.style.setProperty('--total-width', totalWidth + 'px');

//type

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['Front-end', 'Back-end', 'Cybersecurity'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 1750);
});


//transições

const p1 = document.getElementById('ph1');
const p2 = document.getElementById('ph2');
const p3 = document.getElementById('ph3');
const p4 = document.getElementById('ph4');

const b1 = document.getElementById('sp1');
const b2 = document.getElementById('sp2');
const b3 = document.getElementById('sp3');

let tx1 = true;
let tx2 = false;
let tx3 = false;
let tx4 = false;

let open = false;

function verify() {

  if(p1.classList.contains('anmt1')) {

    tx1 = true;

  } else {

    tx1 = false;

  }

  if(p2.classList.contains('anmt2')) {

    tx2 = true;

  } else {

    tx2 = false;

  }

  if(p3.classList.contains('anmt3')) {

    tx3 = true;

  } else {

    tx3 = false;

  }

  if(p4.classList.contains('anmt4')) {

    tx4 = true;

  } else {

    tx4 = false;

  }

}

function click(p, a, ta1, ta2) {

  if(!p1.classList.contains('anmt1')) {

    p1.classList.add('anmt1');
    p.classList.add(a);

    open = true;

    verify();

  } else {

    if(open) {

      if(ta1 || ta2) {

        p.classList.add(a);

        if(tx2) {

          p2.classList.remove('anmt2');
        
        } else {
        
          if(tx3) {
        
            p3.classList.remove('anmt3');
        
          } else {
        
            p4.classList.remove('anmt4');
        
          }
        
        }

      } else {

        p1.classList.remove('anmt1');
        p.classList.remove(a);
  
        open = false;

      }

    } else {

      p1.classList.add('anmt1')
      p.classList.add(a);

      open = true; 

    }

    verify();

  }


} 

b1.addEventListener('click', () => {

  click(p2, 'anmt2', tx3, tx4);

});

b2.addEventListener('click', () => {

  click(p3, 'anmt3', tx2, tx4);

});

b3.addEventListener('click', () => {

  click(p4, 'anmt4', tx2, tx3);

});

