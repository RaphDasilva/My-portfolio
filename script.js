function openMenu() {
  document.getElementById('mobile-menu').style.display = 'flex';
}
openMenu();

function closeMenu() {
  document.getElementById('mobile-menu').style.display = 'none';
}
closeMenu();

function popup() {
  document.getElementById('pop-up-layer').style.display = 'flex';
}
popup();

function closePopUp() {
  document.getElementById('pop-up-layer').style.display = 'none';
}

closePopUp();

const popUpcontainer = document.querySelector('.pop-up-layer');

const recentWorks = [
  {
    id: 1,
    name: 'My portfolio',
    skillsDisplay: ['HTML', 'JavScript', 'CSS'],
    submitButton: 'See Project',
    upCardimg: 'img/projects/portfolio.png',
    description: "This's a site that showcases all the projects that I have done so far. It displays my means of contact, my experiences, and also interesting facts about me, it was built with HTML, CSS and JavaScript",
    popImg: 'img/projects/portfolio.png',
    altImg: 'My Portfolio',
    liveLink: 'https://raphdasilva.github.io/My-portfolio/',
    sourceLink: 'https://github.com/RaphDasilva/My-portfolio',
  },

  {
    id: 2,
    name: 'Abuja Annual Dance Festival',
    skillsDisplay: ['CSS', 'JavScript', 'HTML'],
    submitButton: 'See Project',
    upCardimg: 'img/projects/festival.png',
    description: 'This is a project which highlights Abuja annual dance festival event scheduled to take place 2023 and it was built using HTML, CSS, and JavaScript.',
    popImg: 'img/projects/festival.png',
    altImg: 'recent work',
    liveLink: './https://github.com/RaphDasilva/Abuja-Annual-Dance-',
    sourceLink: './https://raphdasilva.github.io/Abuja-Annual-Dance-/',
  },

  {
    id: 3,
    name: 'To do list',
    skillsDisplay: ['CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: 'img/projects/Todo.png',
    description: 'This a site that helps you to organize your everyday activities. You simply add, remove, Mark Completed, and Edith the things that you need to do for the day. This was created by making use of HTML, CSS, JavaScript, ES6, and Webpack!',
    popImg: 'img/projects/Todo.png',
    altImg: 'recent work',
    liveLink: 'https://raphdasilva.github.io/To-do-list/dist',
    sourceLink: 'https://github.com/RaphDasilva/To-do-list  ',
  },

  {
    id: 4,
    name: 'Awesome book',
    skillsDisplay: ['CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: 'img/projects/AwesomeBook.png',
    description: 'Awesome Books is a simple website that displays a list of books and their authors. These books can be dynamically added and removed from the list, it was build with JavaScript, HTML, and CSS.',
    popImg: 'img/projects/AwesomeBook.png',
    altImg: 'recent work',
    liveLink: 'https://raphdasilva.github.io/Awesome-books/',
    sourceLink: 'https://github.com/RaphDasilva/Awesome-book-ES6',
  },
];

function showPopup(popUpIndex) {
  const onePupUp = recentWorks[popUpIndex];
  let list = '';
  onePupUp.skillsDisplay.forEach((skill) => {
    list += `<li>${skill}</li>`;
  });
  const popUp = `
  <div class="main-pop-up">
  <div class="close-pop" onclick="closePopUp()">
      <p>X</p>
  </div>
  <div class="pop-img"><img src="${onePupUp.popImg}" alt="${onePupUp.altImg}" width="100%"></div>
  <div class="pop-window">
      <div class="pop-head-text">
          <h3>${onePupUp.name}</h3>
      </div>
      <div class="pop-skills-display">
          <ul>${list}</ul>
      </div>
      <div class="pop-d">
          <p>${onePupUp.description}</p>
      </div>
      <div class="pop-buttons">
          <a href = "${onePupUp.liveLink}"><button type="submit" class="see-live" >See Live <img src="img/seeliveicon.svg" alt="see live icon"></button></a>
          <a  href = "${onePupUp.sourceLink}"><button type="submit" class="see-source">See Source <img src="img/Vector.png" alt="see Source icon"></button></a>
      </div>
  </div>
</div>
  `;
  popUpcontainer.innerHTML = popUp;
  popup();
}

for (let i = 0; i < recentWorks.length; i += 1) {
  let tech = '';

  for (let j = 0; j < recentWorks[i].skillsDisplay.length; j += 1) {
    tech += `<li >${recentWorks[i].skillsDisplay[j]}</li>`;
  }
  document.querySelector('.cards-container').innerHTML += `<div class="card-item">
  <div class="up-card"><img src = "${recentWorks[i].upCardimg}" alt = "my portfolio" width = "100%"></div>
  <div class="down-card">
      <h3>${recentWorks[i].name}</h3>
      <ul class="skills">${tech}</ul>
      <div data-id="${recentWorks[i].id}" class="button"><p>${recentWorks[i].submitButton}</p></div>
  </div>    
</div>`;
}

const cardButtons = document.querySelectorAll('.button');
cardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popUpId = parseInt(button.dataset.id, 10) - 1;
    showPopup(popUpId);
  });
});

// form validation
const email = document.getElementById('email');
const errorMsg = document.querySelector('.error-display');
const form = document.querySelector('#form-contact');
form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    errorMsg.style.display = 'block';
    event.preventDefault();
  }
});
