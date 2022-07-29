noclean.addEventListener('click', (_) => {
    main.setAttribute('clean', 'false')
    download.href = 'assets/download/cv.pdf'
})

clean.addEventListener('click', (_) => {
    main.setAttribute('clean', 'true')
    download.href = 'assets/download/cv-clean.pdf'
})

french.addEventListener('click', (_) => {
    fetchData('fr')
})

english.addEventListener('click', (_) => {
    fetchData('en')
})

if (urlParams['theme'] === 'clean') {
    main.setAttribute('clean', 'true')
    download.href = 'assets/download/cv-clean.pdf'
}

fetchData(lang)