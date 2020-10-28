let sus = document.querySelectorAll('div');

console.log(sus);

let animation = anime({
    targets: sus,
    backgroundColor: '#F05',
    borderRadius: function () { return anime.random(0, 50) + 'px'; },
    easing: 'easeInOutQuad',
    rotate: '1turn',
    duration: function () { return anime.random(500, 1000); },
    left: function () { return anime.random(100, 900); },
    top: function () { return anime.random(100, 600); },
    direction: 'alternate',
});

