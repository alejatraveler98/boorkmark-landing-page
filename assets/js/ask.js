const ask = document.querySelectorAll('.ask-section__title')
const paragraph = document.getElementById('ask-1')
ask.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        const a = e.currentTarget
        const p = a.nextElementSibling
        p.classList.toggle('show-paragraph')
    })
})

