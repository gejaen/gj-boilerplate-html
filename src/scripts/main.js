/* accordion */

function accordion() {

    const accordion = document.querySelector('[data-accordion]');
    const accItems = accordion.querySelectorAll('.acc-item'); 


    accItems.forEach((item)=>{
        item.addEventListener('click', (e) => {
            accCloseAll(accItems);
            accOpen(e.target);
        });
    });

}

function accOpen(target) {
    let accItem = target.closest('.acc-item');
    accItem.classList.add('active');

}


function accCloseAll(items) {
    items.forEach((item)=>{ 
    item.classList.remove('active')
    });

     
    
}

/*
// on page load 
window.addEventListener('load', () => {
    accordion();
});
*/




