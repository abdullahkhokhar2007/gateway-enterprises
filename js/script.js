const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
        }
    })
})

hiddenElements.forEach(element => observer.observe(element))