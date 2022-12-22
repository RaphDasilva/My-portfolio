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
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popImg: 'img/Snapshoot Portfolio.png',
    altImg: 'recent work',
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popImg: 'img/Snapshoot Portfolio.png',
    altImg: 'recent work',
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 3,
    name: 'Stories Gain+Glory',
    skillsDisplay: ['CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popImg: 'img/Snapshoot Portfolio.png',
    altImg: 'recent work',
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popImg: 'img/Snapshoot Portfolio.png',
    altImg: 'recent work',
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popImg: 'img/Snapshoot Portfolio.png',
    altImg: 'recent work',
    liveLink: '#',
    sourceLink: '#',
  },

  {
    id: 6,
    name: 'Multi-Post ',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript'],
    submitButton: 'See Project',
    upCardimg: '#!',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    popImg: 'img/Snapshoot Portfolio.png',
    altImg: 'recent work',
    liveLink: '#',
    sourceLink: '#',
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
  <div class="pop-img"><img src="${onePupUp.popImg}" alt="${onePupUp.altImg}" width="20%"></div>
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
          <button type="submit" class="see-live" href = "${onePupUp.liveLink}">See Live <img src="img/seeliveicon.svg"
                  alt="see live icon"></button>
          <button type="submit" class="see-source" href = "${onePupUp.sourceLink}">See Source <img src="img/Vector.png"
                  alt="see Source icon"></button>
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
  <div class="up-card"></div>
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

// STORE VALUES LOCALLY

const inputText = document.querySelectorAll('.input-text');
const dataStored = {
  name: '',
  email: '',
};
inputText.forEach((input) => {
  input.addEventListener('input', () => {
    dataStored[input.name] = input.value;
    localStorage.setItem('everyData', JSON.stringify(dataStored));
  });
});
const formStored = JSON.parse(localStorage.getItem('everyData'));
if (formStored) {
  inputText.forEach((element) => {
    element.value = formStored[element.name];
  });
}