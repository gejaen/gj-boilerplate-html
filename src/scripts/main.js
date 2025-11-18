/* blog item */

// get blog items
function blogItems() {
const itemsWithLinks = document.querySelectorAll('[data-link]');

itemsWithLinks.forEach(el => {
    el.addEventListener('mouseover', (e) => {
            el.classList.toggle('ef-shake');
        });
    el.addEventListener('mouseout', (e) => {
            el.classList.toggle('ef-shake');
        });

    el.addEventListener('click', (e) => {
            window.location.assign(el.dataset.link)
        });    
});

}





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


// on page load 
window.addEventListener('load', () => {
    //accordion();
    blogItems();
});





