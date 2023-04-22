
/**
 * Toggle light mode to dark mode functionality start
 * 
 */

let darkModeIcon= document.querySelector('#darkMode-icon');

darkModeIcon.onclick =()=>{
    darkModeIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('darkMode-on')
};

/**
 * Toggle light mode to dark mode functionality end
 * 
 */