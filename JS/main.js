window.addEventListener('scroll', () => {
    const header = document.querySelector('header.navbar');
    header.classList.toggle("sticky", window.scrollY > 500);
});

const link1 = document.querySelector('.link1'),
    link2 = document.querySelector('.link2'),
    link3 = document.querySelector('.Link3'),
    drop_1 = document.querySelector('.drop1'),
    drop_2 = document.querySelector('.drop2'),
    drop_3 = document.querySelector('.drop3'),
    navBtn = document.querySelector('.fa-bars'),
    navBar = document.querySelector('.mobile_navbar'),
    closeNavBar = document.querySelector('.fa-times');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
})

closeNavBar.addEventListener('click', () => {
    navBar.classList.remove('open');
})

let link1_icon = document.querySelector('.l1'),
    link2_icon = document.querySelector('.l2'),
    link3_icon = document.querySelector('.l3');
const accordin = document.querySelectorAll('div.contentBx');
Array.from(accordin).forEach(accordin => {
    accordin.addEventListener("click", () => {
        accordin.classList.toggle("active");
    })
});


link1.addEventListener('click', () => {
    if (link1_icon.style.transform === 'rotate(-180deg)')
        link1_icon.style.transform = 'rotate(0deg)';
    else
        link1_icon.style.transform = 'rotate(-180deg)';
    drop_1.classList.toggle('open_dropdown');
});

link2.addEventListener('click', () => {
    if (link2_icon.style.transform === 'rotate(-180deg)')
        link2_icon.style.transform = 'rotate(0deg)';
    else
        link2_icon.style.transform = 'rotate(-180deg)';
    drop_2.classList.toggle('open_dropdown');
});

link3.addEventListener('click', () => {
    if (link3_icon.style.transform === 'rotate(-180deg)')
        link3_icon.style.transform = 'rotate(0deg)';
    else
        link3_icon.style.transform = 'rotate(-180deg)';
    drop_3.classList.toggle('open_dropdown');
});