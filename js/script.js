
let darkModeIcon= document.querySelector('#darkMode-icon');

darkModeIcon.onclick =()=>{
    darkModeIcon.classList.toggle('bxs-sun');
    // darkModeIcon.body.classList.toggle('darkMode-on');
    document.body.classList.toggle('darkMode-on')
};