defaultTheme.addEventListener('click', (_) => {
    changeTheme('default')
})

cleanTheme.addEventListener('click', (_) => {
    changeTheme('clean')
})

frenchButton.addEventListener('click', (_) => {
    changeLang('fr')
})

englishButton.addEventListener('click', (_) => {
    changeLang('en')
})

changeLang(currentLang)
changeTheme(currentTheme)

fetchData(currentLang)