const texts = ['myycro.', 'web developer.', 'student.']; 
let textIndex = 0; 
let charIndex = 0; 

const textElement = document.getElementById('retpye-text');

function type() {
  if (charIndex < texts[textIndex].length) {
    
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); 
  } else {

    setTimeout(erase, 1000);
  }
}

function erase() {
 
  setTimeout(eraseText, 500);
}

function eraseText() {
  if (charIndex > 0) {
 
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); 
  } else {

    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
   
    setTimeout(type, 500);
  }
}


type();


const skillsMap = {
    HTML: 100,
    CSS: 90,
    PHP: 60,
    JS: 55,
    PY: 50,
    SQL: 55,
    Node: 40,
    LUA: 100
  };

  const languageBoxes = document.querySelectorAll('.langugage_box');
  let langugageSelected = false
  languageBoxes.forEach((box) => {
    box.addEventListener('mouseover', (event) => {
        langugageSelected = true
      const languageName = event.target.innerText.trim();
      const skill = skillsMap[languageName];
        document.getElementById("skillsContainer").style.opacity = 1;
        document.getElementById("skill_name").innerText = languageName;
        document.getElementById("skillBar").style.width = `${skill}%`;
    });

    box.addEventListener('mouseout', () => {
        langugageSelected = false
        setTimeout(function () {
            if (langugageSelected == false) {
            }
        }, 500); 
    });
  });

    languageBoxes.forEach((box) => {
    box.addEventListener('mouseover' && 'click', (event) => {
        langugageSelected = true
      const languageName = event.target.innerText.trim();
      const skill = skillsMap[languageName];
        document.getElementById("skillsContainer").style.opacity = 1;
        document.getElementById("skill_name").innerText = languageName;
        document.getElementById("skillBar").style.width = `${skill}%`;
    });

    box.addEventListener('mouseout', () => {
        langugageSelected = false
        setTimeout(function () {
            if (langugageSelected == false) {
            }
        }, 500); 
    });
  });


  document.documentElement.style.scrollBehavior = 'smooth';

// Případně můžete změnit zpět na 'auto' pro rychlé scrollování:
setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'auto';
}, 300); // Po 300ms se vrátí rychlé scrollování


AOS.init({
    duration: 1000, // Délka animace v milisekundách
    once: false     // Animace se spustí jen jednou
});