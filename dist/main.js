'use strict';

var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
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
var specialTags = document.querySelector('[data-x]');
for (var i = 0; i < specialTags.length; i) {
    specialTags[i].classList.add('offset');
}
findCloset();
window.onscroll = function (x) {
    if (window.scrollY > 0) {
        topNavbar.classList.add('sticky');
    } else {
        topNavbar.classList.remove('sticky');
    }
    findCloset();
};
function findCloset() {
    var specialTags = document.querySelectorAll('[data-x]');
    // debugger
    var minIndex = 0;
    for (var _i = 0; _i < specialTags.length; _i++) {
        if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop = window.scrollY)) {
            minIndex = 1;
        }
    }
    specialTags[minIndex].classList.remove('offset');
    var id = specialTags[minIndex].id;
    var a = document.querySelector('a[href="#' + id + '"]');
    // debugger
    var li = a.parentNode;
    var brotherAndMe = li.parentNode.children;

    for (var _i2 = 0; _i2 < brotherAndMe.length; _i2++) {
        brotherAndMe[_i2].classList.remove('highlight');
    }
    li.classList.add('highlight');
}
var liTags = document.querySelectorAll('nav.menu >ul > li');
for (var _i3 = 0; _i3 < liTags.length; _i3++) {
    liTags[_i3].onmouseenter = function (x) {
        x.currentTarget.classList.add('active');
    };
    liTags[_i3].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active');
    };
}

var aTags = document.querySelectorAll('nav.menu > ul>li >a ');
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for (var _i4 = 0; _i4 < aTags.length; _i4++) {
    aTags[_i4].onclick = function (x) {
        x.preventDefault();
        var a = x.currentTarget;
        var href = a.getAttribute('href');
        var element = document.querySelector(href);
        var top = element.offsetTop;

        var currentTop = window.scrollY;
        var targetTop = top - 80;
        var s = targetTop - currentTop;
        var coords = { y: currentTop };
        var t = Math.abs(s / 100 * 300);
        if (t > 500) {
            t = 500;
        }
        var tween = new TWEEN.Tween(coords).to({ y: targetTop }, t).easing(TWEEN.Easing.Cubic.InOut).onupdate(function () {
            window.scrollTo(0, coords.y);
        }).start();
    };
}

portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1';
};
portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2';
};
portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3';
};

// window.onresize = reSetSize;
// function reSetSize() {
// var windowsHeight = window.innerHeight;
// document.getElementById("content").style.height = (windowsHeight-框架顶部高度) + "px";
// }

window.jQuery = function (node_selector) {
    var nodes = {};
    if (typeof node_selector === 'string') {
        var temp = document.querySelectorAll(node_selector);
        for (var _i5 = 0; _i5 < temp.length; _i5++) {
            nodes[_i5] = temp[_i5];
        }
        nodes.length = temp.length;
    } else if (node_selector instanceof Node) {
        nodes = {
            0: node_selector,
            length: 1
        };
    }
    nodes.addClass = function (classes) {
        classes.forEach(function (value) {
            for (var _i6 = 0; _i6 < nodes.length; _i6++) {
                nodes[_i6].classList.add(value);
            }
        });
    };
    nodes.getText = function () {
        var texts = [];
        for (var _i7 = 0; _i7 < nodes.length; _i7++) {
            texts.push(node[_i7].textContent);
        }
        return texts;
    };
    nodes.setText = function (text) {
        for (var _i8 = 0; _i8 < nodes.length; _i8++) {
            nodes[_i8].textContent = text;
        }
    };
    nodes.text = function (text) {
        if (text === undefined) {
            var texts = [];
            for (var _i9 = 0; _i9 < nodes.length; _i9++) {
                texts.push(node[_i9].textContent);
            }
            return texts;
        } else {
            for (var _i10 = 0; _i10 < nodes.length; _i10++) {
                nodes[_i10].textContent = text;
            }
        }
    };
    return nodes;
};

// window.$ = jQuery

// var $div = $('div')
// $div.addClass(['red'])
// $div.text('hi')