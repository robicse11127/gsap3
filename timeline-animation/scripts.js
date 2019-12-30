var tl = gsap.timeline();

tl.from('.astronaut', {duration: 2, x: '50%', ease: 'back', rotation: 360})
tl.to( '.astronaut', { duration: 2, rotation: 360, ease: 'back' } )
tl.from( '.circle', {duration: 1, opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.25}, '-=1' )
