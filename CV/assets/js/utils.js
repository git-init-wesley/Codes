// noinspection JSValidateTypes
/* ========================= CONST Start ========================= */

const FRENCH_FLAG_URL = 'https://cdn-icons-png.flaticon.com/512/299/299753.png'
const ENGLISH_FLAG_URL = 'https://cdn-icons-png.flaticon.com/512/197/197374.png'

const urlSearchParams = new URLSearchParams(window.location.search)
const urlParams = Object.fromEntries(urlSearchParams.entries())

const body = document.querySelector('body')
const main = document.querySelector('main')

const defaultTheme = document.querySelector('.navigation .buttons #default-theme')
const cleanTheme = document.querySelector('.navigation .buttons #clean-theme')

const selectedLang = document.querySelector('.navigation .buttons #lang-selected')

const frenchButton = document.querySelector('.navigation .buttons #french-button')
const englishButton = document.querySelector('.navigation .buttons #english-button')

const ldsRoller = document.querySelector('.loader .lds-roller')
const downloadButton = document.querySelector('.navigation .buttons #download-button')

const headerSubtitle1 = document.querySelector('.header .subtitle#headerSubtitle1')
const headerSubtitle2 = document.querySelector('.header .subtitle#headerSubtitle2')

const temps = document.querySelector('.temps')

const columnLeftDescription = document.querySelector('.column-left > .description')
const columnLeftSkills = document.querySelector('.column-left #skills')
const columnLeftTechniques = document.querySelector('.column-left #techniques')
const columnLeftHobbies = document.querySelector('.column-left #hobbies')

const columnRightExperiences = document.querySelector('.column-right #experiences')
const columnRightFormations = document.querySelector('.column-right #formations')

const contactMail = document.querySelector('#contact #mail')
const contactPhone = document.querySelector('#contact #phone')
const contactGithub = document.querySelector('#contact #github')
const contactLinkedin = document.querySelector('#contact #linkedin')
const contactAddress = document.querySelector('#contact #address')

const langageDownload = document.querySelector('#langage-download')
const langageSkills = document.querySelector('#langage-skills')
const langageTechniques = document.querySelector('#langage-techniques')
const langageHobbies = document.querySelector('#langage-hobbies')
const langageContact = document.querySelector('#langage-contact')
const langageExperiences = document.querySelector('#langage-experiences')
const langageFormation = document.querySelector('#langage-formations')

const birthdays = new Date('06/08/2003')
const nowDate = new Date(Date.now())
const age = (nowDate.getFullYear() - birthdays.getFullYear()) - (nowDate.getMonth() < birthdays.getMonth() || nowDate.getMonth() === birthdays.getMonth() && nowDate.getDate() < birthdays.getDate() ? 1 : 0)

const acceptedLangs = ['fr', 'en'];
// noinspection ES6ConvertVarToLetConst
var currentLang = urlParams['lang'] && acceptedLangs.find(e => e === urlParams['lang'].toLowerCase()) ? urlParams['lang'].toLowerCase() : 'fr'

const acceptedThemes = ['default', 'clean'];
// noinspection ES6ConvertVarToLetConst
var currentTheme = urlParams['theme'] && acceptedThemes.find(e => e === urlParams['theme'].toLowerCase()) ? urlParams['theme'].toLowerCase() : 'default'
/* ========================= CONST End ========================= */

/* ========================= Function Start ========================= */
const createElement = (title, subtitle, contents) => {
    let _element = document.createElement('div')
    _element.setAttribute('class', 'element')


    let _headElement = document.createElement('div')
    _headElement.setAttribute('class', 'head-element')

    let _title = document.createElement('h1')
    _title.setAttribute('class', 'title')
    _title.textContent = title

    let _subtitle = document.createElement('h2')
    _subtitle.setAttribute('class', 'subtitle')
    _subtitle.textContent = subtitle

    _headElement.appendChild(_title)
    _headElement.appendChild(_subtitle)

    _element.appendChild(_headElement)

    if (contents.length > 0) {

        let _content = document.createElement('div')
        _content.setAttribute('class', 'content')

        let _ul = document.createElement('ul')
        _ul.setAttribute('no-style', 'false')

        contents.forEach(str => {
            let _li = document.createElement('li')
            _li.textContent = str

            _ul.appendChild(_li)
        })

        _content.appendChild(_ul)
        _element.appendChild(_content)
    }

    return _element
}
/* ========================= Function End ========================= */

const loadDataJson = (json) => {
    ldsRoller.setAttribute('loading', 'true')

    headerSubtitle1.textContent = json['header-subtitle-1']
    headerSubtitle2.textContent = json['header-subtitle-2'].replace('{AGE}', age)

    temps.textContent = json['temps']

    columnLeftDescription.textContent = json['column-left-description']

    columnLeftSkills.innerHTML = ''
    Array.from(json['skills']).forEach(str => {
        let _e = document.createElement('li')
        _e.textContent = str
        columnLeftSkills.appendChild(_e)
    })

    columnLeftTechniques.innerHTML = ''
    Array.from(json['techniques']).forEach(str => {
        let _e = document.createElement('img')
        _e.src = `assets/img/techniques/${str}.png`
        _e.alt = str
        columnLeftTechniques.appendChild(_e)
    })


    columnRightFormations.innerHTML = ''
    Array.from(json['column-formations']).forEach(map => {
        columnRightFormations.appendChild(createElement(map['title'], map['subtitle'], map['content']))
    })

    columnRightExperiences.innerHTML = ''
    Array.from(json['column-experiences']).forEach(map => {
        columnRightExperiences.appendChild(createElement(map['title'], map['subtitle'], map['content']))
    })

    columnLeftHobbies.textContent = Array.from(json['hobbies']).join(', ') + '.'

    contactMail.textContent = json['contact']['mail']
    contactPhone.textContent = json['contact']['phone']
    contactGithub.textContent = json['contact']['github']
    contactLinkedin.textContent = json['contact']['linkedin']
    contactAddress.textContent = json['contact']['address']

    langageDownload.textContent = json['language']['download']
    langageSkills.textContent = json['language']['skills']
    langageTechniques.textContent = json['language']['techniques']
    langageHobbies.textContent = json['language']['hobbies']
    langageContact.textContent = json['language']['contact']
    langageExperiences.textContent = json['language']['experiences']
    langageFormation.textContent = json['language']['formations']

    ldsRoller.setAttribute('loading', 'false')
}

const updateDownloadHref = () => {
    downloadButton.href = `assets/download/${currentLang}/${currentTheme.toUpperCase()} - CV - Wesley LEVASSEUR.pdf`
}

const changeTheme = (theme) => {
    body.setAttribute('theme', theme)
    currentTheme = theme
    updateDownloadHref()
}

const changeLang = (lang) => {
    body.setAttribute('lang', lang)
    currentLang = lang
    switch (currentLang) {
        case 'en':
            selectedLang.src = ENGLISH_FLAG_URL
            break
        default:
            selectedLang.src = FRENCH_FLAG_URL
            break
    }
    updateDownloadHref()
    fetchData(lang)
}

const fetchData = (lang) => {
    fetch(`assets/json/${lang}/data.min.json`)
        .then(response => response.json())
        .then(json => loadDataJson(json))
}