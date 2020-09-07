const features = document.querySelector('.features-button')
const cards    = document.querySelectorAll('.cards-features')
const btns     = document.querySelectorAll('.f-btn')
const show     = document.getElementById('show-toggle')
const menu     = document.getElementById('main-menu')
const closemenu     = document.getElementById('main-menu__close')
features.addEventListener('click',(e)=>{
    e.preventDefault()
    const links = e.target.dataset.id
    if(links){
        btns.forEach(btn =>{
            btn.classList.remove('button-simple')
            e.target.classList.add('button-simple')
        })

        cards.forEach(card =>{
            card.classList.remove('show-card')
        })
        const c = document.getElementById(links);
        c.classList.add('show-card');
    }
})


show.addEventListener('click', ()=>{  
     menu.classList.toggle('show-toggle')
    
})

closemenu.addEventListener('click',() => {
    menu.classList.remove('show-toggle')
})