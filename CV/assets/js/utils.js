const main = document.querySelector('main')

const noclean = document.querySelector('#noclean')
const clean = document.querySelector('#clean')

const ldsRoller = document.querySelector('.lds-roller');

const headerSubtitle1 = document.querySelector('#headerSubtitle1');
const headerSubtitle2 = document.querySelector('#headerSubtitle2');

const temps = document.querySelector('.temps');

const columnLeftDescription = document.querySelector('.column-left > .description');

const skills = document.querySelector('#skills')
const techniques = document.querySelector('#techniques')
const hobbies = document.querySelector('#hobbies')

const contactMail = document.querySelector('#contact #mail');
const contactPhone = document.querySelector('#contact #phone');
const contactGithub = document.querySelector('#contact #github');
const contactLinkedin = document.querySelector('#contact #linkedin');
const contactAddress = document.querySelector('#contact #address');

const birthdays = new Date('06/08/2003');
const nowDate = new Date();
const age = (nowDate.getFullYear() - birthdays.getFullYear()) - (nowDate.getMonth() < nowDate.getMonth() ? 1 : nowDate.getDate() < birthdays.getDate() ? 1 : 0);