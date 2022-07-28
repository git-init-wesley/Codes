noclean.addEventListener('click', (_) => {
    main.setAttribute('clean', 'false')
})

clean.addEventListener('click', (_) => {
    main.setAttribute('clean', 'true')
})

setTimeout(() => {
    fetch('assets/json/data.json')
        .then(response => response.json())
        .then(json => {

            headerSubtitle1.textContent = json['header-subtitle-1']
            headerSubtitle2.textContent = json['header-subtitle-2'].replace('{AGE}', age)

            temps.textContent = json['temps']

            columnLeftDescription.textContent = json['column-left-description']

            Array.from(json['skills']).forEach(str => {
                let _e = document.createElement('li')
                _e.innerText = str
                skills.appendChild(_e)
            })

            Array.from(json['techniques']).forEach(str => {
                let _e = document.createElement('img')
                _e.src = `assets/img/techniques/${str}.png`
                _e.alt = str
                techniques.appendChild(_e)
            })

            hobbies.textContent = Array.from(json['hobbies']).join(', ') + '.'

            contactMail.textContent = json['contact']['mail']
            contactPhone.textContent = json['contact']['phone']
            contactGithub.textContent = json['contact']['github']
            contactLinkedin.textContent = json['contact']['linkedin']
            contactAddress.textContent = json['contact']['address']

            ldsRoller.setAttribute('loading', 'false')
        });
}, 1000)