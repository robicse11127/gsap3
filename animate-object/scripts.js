gsap.from('.astronaut', {duration: 2, x: '50%', ease: 'back'})
gsap.from( '.circle', {duration: 1, opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.25} )
