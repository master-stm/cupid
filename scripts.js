// Create a timeline with default parameters
var tl = anime.timeline({
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 750
});

// Add children
tl
.add({
  targets: '#I',
  translateX: -350,
})
.add({
  targets: '#love',
  translateX: -350,
})
.add({
  targets: '#you',
  translateX: -350,
})
.add({
    targets: '#love',
    scale: 100,
    duration:1400
})
.add({
targets: '.svg-content',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 15000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})

