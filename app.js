// gsap.fromTo('.text', {opacity:0, y:30}, {opacity:1, y:0, duration:1} )

const tl = gsap.timeline({defaults: {duration:0.75}})

tl.fromTo('.cokie_container', {scale: 0}, {scale:1})

tl.fromTo('.cokie', {opacity: 0, x:-40, rotation:'-45deg'}, {opacity:1, x:0, rotation:'0deg'})

tl.fromTo('.text', {x:30, opacity:0}, {x:0, opacity:1})