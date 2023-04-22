
let darkModeIcon= document.querySelector('#darkMode-icon');

darkModeIcon.onclick =()=>{
    darkModeIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('darkMode-on')
};