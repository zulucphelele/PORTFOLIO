// ===============================================
// HOPEFUL SIPHELELE ZULU PORTFOLIO
// Premium JavaScript
// ===============================================



// ==============================
// Typing Animation
// ==============================

const text = [

    "Aspiring Communication Strategist",

    "Web Developer",

    "Digital Creator",

    "Graphic Designer",

    "Public Relations Enthusiast"

];

let index = 0;

let character = 0;

let currentText = "";

let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

    if(!typing) return;

    currentText = text[index];

    if(!isDeleting){

        typing.textContent = currentText.substring(0,character);

        character++;

        if(character > currentText.length){

            isDeleting = true;

            setTimeout(type,1500);

            return;

        }

    }

    else{

        typing.textContent = currentText.substring(0,character);

        character--;

        if(character < 0){

            isDeleting = false;

            index++;

            if(index >= text.length){

                index = 0;

            }

        }

    }

    setTimeout(type,isDeleting ? 50 : 100);

}

type();



// ==============================
// Sticky Header
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 100){

header.classList.add("sticky");

}

else{

header.classList.remove("sticky");

}

});



// ==============================
// Scroll Reveal
// ==============================

const revealElements = document.querySelectorAll(

".hero, .stats, .why-me, .featured-projects, .cta, .about-section, .portfolio, .contact"

);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

revealElements.forEach(section=>{

observer.observe(section);

});



// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".stat-card h2");

const speed = 120;

counters.forEach(counter=>{

const update = ()=>{

const target = counter.innerText.replace(/\D/g,'');

const count = +counter.getAttribute("data-count") || 0;

const increment = target / speed;

if(count < target){

counter.setAttribute("data-count",Math.ceil(count + increment));

counter.innerText = Math.ceil(count + increment) + "+";

setTimeout(update,20);

}

else{

counter.innerText = target + "+";

}

};

update();

});



// ==============================
// Active Navigation
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>{

item.classList.remove("active");

});

link.classList.add("active");

});

});



// ==============================
// Back To Top Button
// ==============================

const button = document.createElement("button");

button.id = "topBtn";

button.innerHTML = "<i class='fa-solid fa-arrow-up'></i>";

document.body.appendChild(button);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

button.style.display = "flex";

}

else{

button.style.display = "none";

}

});

button.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



// ==============================
// Image Hover Animation
// ==============================

const cards = document.querySelectorAll(

".project-card, .why-card, .stat-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});



// ==============================
// Contact Form Validation
// ==============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}



// ==============================
// Footer Year
// ==============================

const year = document.getElementById("year");

if(year){

year.textContent = new Date().getFullYear();

}



// ==============================
// Console Message
// ==============================

console.log(

"%cPortfolio Loaded Successfully",

"color:#7C3AED;font-size:18px;font-weight:bold;"

);