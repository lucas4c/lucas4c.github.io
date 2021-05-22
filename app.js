const date = new Date();
const hours = date.getHours();
const night = hours >= 19 || hours <= 7;
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const input = document.getElementById('switch');
const userLang = navigator.language;
const ptBR = userLang == 'pt' || userLang == 'pt-BR' || userLang == 'pt-PT';
import rawData from './public/data/data.js';
const data = ptBR ? rawData.ptBR : rawData.enUS;

AOS.init({
    once: true
});

if (night) {
    input.checked = true;
    body.classList.add('dark');
}

toggle.addEventListener('click', () => {
    const isChecked = input.checked;
    if (isChecked) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
});



document.querySelector('header').innerHTML = `
    <h1 class="hello">${data.hello}<span class="name"> ${data.name}</span> &#128075;</h1>
    <h2 class="tagline">${data.tagline}
    </h2>
    <h3 class="contact">${data.contact} <a href="" class="email">${data.email}</a></h3>
`;

document.querySelector('.background').innerHTML = `
    <div class="background-text">
            <h4 class="background-title" data-aos="fade-up">${data.backgroundTitle}</h4>
            ${data.backgroundText.map((paragraph)=>{
                return `<p data-aos="fade-up"data-aos="fade-up">${paragraph}</p>`
            }).join('')}
    </div>
`

document.querySelector('.skills').innerHTML = `
    <h4 class="skills-title" data-aos="fade-up">${data.skillsTitle}</h4>
    <div class="skills-container">
        ${data.skills.map((category) => {
            return `<div class="skills-category" data-aos="fade-left">
                        <p class="skills-category-title">${category.name}</p>
                        <ul>
                            ${category.content.map((item)=> {
                                return `<li class="skills-item">${item}</li>`
                            }).join('')}
                        </ul>
                    </div>`
        }).join('')}
    </div>
`

document.querySelector('.experience').innerHTML = `
    <div class="experience-container">
    <h4 class="experience-title" data-aos="fade-up">${data.experienceTitle}</h4>
    ${data.experience.map((item) => {
        return `<div class="experience-item" data-aos="fade-up">
                    <div class="experience-place">
                        <a href="" >${item.place}</a>
                        <span class="experience-time">${item.time}</span>
                    </div>
                    <div class="experience-type">
                        <span>${item.position}</span>
                    </div>
                </div>
        `
    }).join('')}
`

document.querySelector('.featured').innerHTML = `
    <div class="featured-container" data-aos="fade-up">
        <h4 class="featured-title">${data.projectsTitle}</h4>
        <div class="featured-card-view" data-aos="fade-up">
            ${data.projects.map((project) => {
                return `<div class="card">
                    <div class="card-text">
                        <p class="card-title">${project.name}</p>
                        <p class="card-description">${project.description}</p>
                    </div>
                    <img src="${project.image}" alt="" class="card-image">
                    </div>
                `
            }).join('')}
        </div>
    </div>
`
document.querySelector('.footer-links-container').innerHTML = `
    ${data.socialMedia.map((item) => {
        return `
        <a target="_blank" rel="noopener noreferrer" href="${item.link}" class="footer-link">
            <img src="${item.image}" alt="">
        </a>
        `
    }).join('')}
`