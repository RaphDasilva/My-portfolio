function openMenu() {
  document.getElementById('mobile-menu').style.display = 'flex';
}
openMenu();

function closeMenu() {
  document.getElementById('mobile-menu').style.display = 'none';
}
closeMenu();

function popup(){
    document.getElementById('pop-up-layer').style.display = 'flex';
}
popup();

function closePopUp(){
    document.getElementById('pop-up-layer').style.display = 'none';
}

closePopUp()

const recentWorks = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
  },

  {
    name: 'Multi-Post Stories Gain+Glory',
    skillsDisplay: ['Ruby on rails', 'CSS', 'JavScript', 'html'],
    submitButton: 'See Project',
    upCardimg: '#!',
  },
];

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
      <div class="button" onclick="popup()"><p>${recentWorks[i].submitButton}</p></div>
  </div>    
</div>`;
}