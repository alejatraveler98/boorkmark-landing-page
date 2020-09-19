const ask = document.querySelectorAll('.ask-section__title')
const imgArrow= document.querySelectorAll('.ask-section__image')
const paragraph = document.getElementById('ask-1')
ask.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        const a = e.currentTarget
        const p = a.nextElementSibling
        p.classList.toggle('show-paragraph')
        a.lastElementChild.classList.toggle('arrow-rotate')
    })
})

// const arrow = () => {
//     imgArrow.forEach(e=>{
//         e.classList.toggle('arrow-rotate')
//     })    
// }
