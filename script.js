const kepek = document.querySelectorAll('.kep')

kepek.forEach(kep => {
    kep.addEventListener('click', () => {
        removeActiveClasses()
        kep.classList.add('active')
    })
})

function removeActiveClasses(){
    kepek.forEach(kep =>{
        kep.classList.remove('active')
    })
}