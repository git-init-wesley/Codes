const main = document.querySelector('main')

const noclean = document.querySelector('#noclean')
const clean = document.querySelector('#clean')

const ldsRoller = document.querySelector('.lds-roller')
const download = document.querySelector('#download')

const headerSubtitle1 = document.querySelector('#headerSubtitle1')
const headerSubtitle2 = document.querySelector('#headerSubtitle2')

const temps = document.querySelector('.temps')

const columnLeftDescription = document.querySelector('.column-left > .description')
const columnRightExperiences = document.querySelector('#experiences')
const columnRightFormations = document.querySelector('#formations')

const skills = document.querySelector('#skills')
const techniques = document.querySelector('#techniques')
const hobbies = document.querySelector('#hobbies')

const contactMail = document.querySelector('#contact #mail')
const contactPhone = document.querySelector('#contact #phone')
const contactGithub = document.querySelector('#contact #github')
const contactLinkedin = document.querySelector('#contact #linkedin')
const contactAddress = document.querySelector('#contact #address')

const birthdays = new Date('06/08/2003')
const nowDate = new Date()
const age = (nowDate.getFullYear() - birthdays.getFullYear()) - (nowDate.getMonth() < nowDate.getMonth() ? 1 : nowDate.getDate() < birthdays.getDate() ? 1 : 0)

const urlSearchParams = new URLSearchParams(window.location.search)
const urlParams = Object.fromEntries(urlSearchParams.entries())

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