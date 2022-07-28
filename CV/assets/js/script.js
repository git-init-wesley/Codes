noclean.addEventListener('click', (_) => {
    main.setAttribute('clean', 'false')
    download.href = 'assets/download/cv.pdf'
})

clean.addEventListener('click', (_) => {
    main.setAttribute('clean', 'true')
    download.href = 'assets/download/cv-clean.pdf'
})

if (urlParams['theme'] === 'clean') {
    main.setAttribute('clean', 'true')
    download.href = 'assets/download/cv-clean.pdf'
}

setTimeout(() => {
    fetch('assets/json/data.json')
        .then(response => response.json())
        .then(json => {

            headerSubtitle1.textContent = json['header-subtitle-1']
            headerSubtitle2.textContent = json['header-subtitle-2'].replace('{AGE}', age)

            // noinspection JSValidateTypes
            temps.textContent = json['temps']

            columnLeftDescription.textContent = json['column-left-description']

            // noinspection JSCheckFunctionSignatures
            Array.from(json['skills']).forEach(str => {
                let _e = document.createElement('li')
                // noinspection JSValidateTypes
                _e.textContent = str
                skills.appendChild(_e)
            })

            // noinspection JSCheckFunctionSignatures
            Array.from(json['column-experiences']).forEach(map => {
                columnRightExperiences.appendChild(createElement(map['title'], map['subtitle'], map['content']))
            })

            // noinspection JSCheckFunctionSignatures
            Array.from(json['column-formations']).forEach(map => {
                columnRightFormations.appendChild(createElement(map['title'], map['subtitle'], map['content']))
            })

            // noinspection JSCheckFunctionSignatures
            Array.from(json['techniques']).forEach(str => {
                let _e = document.createElement('img')
                _e.src = `assets/img/techniques/${str}.png`
                // noinspection JSValidateTypes
                _e.alt = str
                techniques.appendChild(_e)
            })

            // noinspection JSCheckFunctionSignatures
            hobbies.textContent = Array.from(json['hobbies']).join(', ') + '.'

            contactMail.textContent = json['contact']['mail']
            contactPhone.textContent = json['contact']['phone']
            contactGithub.textContent = json['contact']['github']
            contactLinkedin.textContent = json['contact']['linkedin']
            contactAddress.textContent = json['contact']['address']

            ldsRoller.setAttribute('loading', 'false')
        })
}, 1000)