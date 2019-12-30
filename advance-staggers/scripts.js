var tl = new TimelineMax({repeat: -1, repeatDelay: 0.5});

tl.staggerTo('.sqr', 1, {
    scale: 0.1,
    y: 50,
    repeat: 1,
    yoyo: true,
    stagger: {
        // each: 0.1,
        amount: 2, // positive or negative
        from: 'center', // end, start, center, index
        ease: Power1.easeOut, // easing effect,
        axis: 'x'
    }
})