
const selectionScene = document.getElementById('selection')
const mainScene = document.querySelector('main')
const viewBg = document.getElementById('view-bg')
const nav = document.querySelector('nav')
const contentImg = document.getElementById('content-img')
const contentH2 = document.getElementById('content-h2')
const contentP = document.getElementById('content-p')
const swap = document.getElementById('swap')

function selectionSceneOnOff() {
    (selectionScene.classList.contains('off')) ? selectionScene.classList.remove('off') : selectionScene.classList.add('off')
}

function mainSceneOnOff() {
    (mainScene.classList.contains('off')) ? mainScene.classList.remove('off') : mainScene.classList.add('off')
}

function clearNav() {
    nav.innerHTML = '<div id=\'cs-m\' class=\'character-selector\'><span></span><img></div>'
}

function createSelectWorldEl(a,i) {
    const d1 = document.createElement('div')
    d1.classList.add('select-world')
    const i1 = document.createElement('img')
    i1.setAttribute('alt', `Escolha o anime ${a}`)
    i1.setAttribute('src', `./assets/lado/${a}/wpp/${a}_${data[i]['wpp'][0]}`)
    const i2 = document.createElement('img')
    i2.setAttribute('alt', a)
    i2.setAttribute('src', `./assets/lado/${a}/${a}_logo.png`)

    d1.appendChild(i1)
    d1.appendChild(i2)

    return d1
}

function creatorCharacterSelectorEl(a, i, c) {
    const d1 = document.createElement('div')
    d1.classList.add('character-selector')
    const s1 = document.createElement('span')
    s1.innerText = data[i]['name'][c]
    const i1 = document.createElement('img')
    i1.setAttribute('src', `./assets/lado/${a}/tokens/${a}_${data[i]['tokens'][c]}`)
    d1.appendChild(s1)
    d1.appendChild(i1)

    d1.addEventListener('click', () => {
        changeChar(a, i, c)
    })

    return d1
}

function windowViewBg() {
    viewBg.style.width = window.innerWidth + 'px'
    viewBg.style.height = window.innerHeight + 'px'
}

function setContent(a, i, c=0) {
    contentImg.setAttribute('src', `./assets/lado/${a}/${a}_logo.png`)
    contentH2.innerText = data[i]['name'][c]
    contentP.innerText = data[i]['desc'][c]
}

function changeChar(a, i, c) {
    mainSceneOnOff()
    viewBg.style.opacity = '0'
    setTimeout(() => {
        contentH2.innerText = data[i]['name'][c]
        contentP.innerText = data[i]['desc'][c]  
        viewBg.style.background = `url(./assets/lado/${a}/wpp/${a}_${data[i]['wpp'][c]})`
        viewBg.style.backgroundSize = 'cover'
        viewBg.style.backgroundPosition = '50%'      
    }, 500);
    setTimeout(() => {
        viewBg.style.opacity = '1'
        mainSceneOnOff()
    }, 1000);
}

for(let index = 0; index < data.length; index++) {
    const a = data[index]['lado']
    const el = createSelectWorldEl(a, index)
    selectionScene.appendChild(el)
    el.addEventListener('click', () => {
        selectionSceneOnOff()
        clearNav()
        for(let char = 0; char < data[index]['name'].length; char++) {
            nav.appendChild(creatorCharacterSelectorEl(a, index, char))
        }
        viewBg.style.background = `url(./assets/lado/${a}/wpp/${a}_${data[index]['wpp'][0]})`
        viewBg.style.backgroundSize = 'cover'
        viewBg.style.backgroundPosition = 'center'
        viewBg.style.width = window.innerWidth + 'px'
        viewBg.style.height = window.innerHeight + 'px'
        viewBg.style.borderRadius = '0%'
        viewBg.style.opacity = '1'
        setTimeout(() => {
            viewBg.style.transition = '.5s'
        }, 50);

        setTimeout(() => {
            setContent(a, index)
        }, 1050);
        setTimeout(() => {
            mainSceneOnOff()
        }, 1050);
    })
}


window.addEventListener('resize', () => {
    windowViewBg()
})

swap.addEventListener('click', () => {
    mainSceneOnOff()
    viewBg.style.opacity = '0'    
    setTimeout(() => {
        viewBg.style.width = '20vw'
        viewBg.style.height = '20vw'
        viewBg.style.borderRadius = '50%'
        viewBg.style.left = '0'
        viewBg.style.top = '0'
        viewBg.style.transform = 'translate(0, 0)'
        selectionSceneOnOff()        
    }, 500);
    setTimeout(() => {
        viewBg.style.transition = '0s'
    }, 550);
})
