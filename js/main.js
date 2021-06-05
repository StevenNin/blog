

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //滚动bar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     hide: true,
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
let specialTags = document.querySelector('[data-x]')
for (let i = 0; i < specialTags.length; i) {
    specialTags[i].classList.add('offset')
}
findCloset()
window.onscroll = function (x) {
    if (window.scrollY > 0) {
        topNavbar.classList.add('sticky')
    } else {
        topNavbar.classList.remove('sticky')
    }
    findCloset()
}
function findCloset() {
    let specialTags = document.querySelectorAll('[data-x]')
    // debugger
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop = window.scrollY)) {
            minIndex = 1
        }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    // debugger
    let li = a.parentNode
    let brotherAndMe = li.parentNode.children

    for (let i = 0; i < brotherAndMe.length; i++) {
        brotherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}
let liTags = document.querySelectorAll('nav.menu >ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul>li >a ')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate)
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        var coords = { y: currentTop };
        var t = Math.abs((s / 100) * 300)
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onupdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start()
    }
}



portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1'
}
portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3'
}

// window.onresize = reSetSize;
// function reSetSize() {
// var windowsHeight = window.innerHeight;
// document.getElementById("content").style.height = (windowsHeight-框架顶部高度) + "px";
// }

window.jQuery = function (node_selector) {
    let nodes = {}
    if (typeof node_selector === 'string') {
        let temp = document.querySelectorAll(node_selector)
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (node_selector instanceof Node) {
        nodes = {
            0: node_selector,
            length: 1
        }
    }
    nodes.addClass = function (classes) {
        classes.forEach((value) => {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value)
            }

        })
    }
    nodes.getText = function () {
        var texts = []
        for (let i = 0; i < nodes.length; i++) {
            texts.push(node[i].textContent)
        }
        return texts
    }
    nodes.setText = function (text) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].textContent = text
        }
    }
    nodes.text = function (text) {
        if (text === undefined) {
            var texts = []
            for (let i = 0; i < nodes.length; i++) {
                texts.push(node[i].textContent)
            }
            return texts
        } else {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }
    }
    return nodes
}

// window.$ = jQuery

// var $div = $('div')
// $div.addClass(['red'])
// $div.text('hi')


