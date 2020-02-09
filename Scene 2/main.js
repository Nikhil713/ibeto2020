anime({
    targets:["#believe",".turbulence-1",".displacementmap-1"],
    baseFrequency: 0,
    numOctave: 0,
    duration: 4500,
    easing:'easeOutQuad',
    scale:1
})

anime({
    targets:["#underwater",".turbulence-2",".displacementmap-2"],
    baseFrequency: [0],
    numOctave: 0,
    duration: 10000,
    direction: 'alternate',
    easing:'linear',
    scale:1,
    loop:true
})