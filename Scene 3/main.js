

setTimeout(function(){
    anime({
        targets: '.NEON-ROAD-STROKE-13,.NEON-ROAD-STROKE-12,.NEON-ROAD-STROKE-11,.NEON-ROAD-STROKE-10,.NEON-ROAD-STROKE-9,.NEON-ROAD-STROKE-8,.NEON-ROAD-STROKE-7,.NEON-ROAD-STROKE-6,.NEON-ROAD-STROKE-5,.NEON-ROAD-STROKE-4,.NEON-ROAD-STROKE-3,.NEON-ROAD-STROKE-2,.NEON-ROAD-STROKE-1',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInSine',
        delay: function(el, i) { return i * 10 },
        duration: 1500,
        // strokeWidth:1.75,
    });
    anime({
        targets: '.svg-container-fill',
        easing: 'easeInOutQuad',
        delay:2800,
        duration: 1000,
        opacity:1,
    });  
    anime({
        targets: '#neon-road-fill',
        easing: 'easeInOutQuad',
        rotate:{
            value: ['13.5deg','0deg'],
            duration: 10000,
            delay: 2220,
            easing: 'easeInOutQuart'
          },
        scale:{
            value: [1.4,1],
            duration: 10000,
            delay: 2200,
            easing: 'easeInOutQuart'
          },
    }); 
    anime({
      targets: '.scene-text',
      easing: 'easeInOutQuad',
      delay:3400,
      duration: 1500,
      opacity:1
    });  
    document.getElementsByClassName("NEON-ROAD-STROKE-1").sty
},3000);