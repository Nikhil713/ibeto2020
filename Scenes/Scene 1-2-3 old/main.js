var sceneOneAnimation = function(){
    anime({
        targets: ".IMAGINE-TEXT-1",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function(el, i) { return i * 250 }
      });//animation of image stroke dashoffset
    
    anime({
        targets: ".IMAGINE-TEXT-1",
        duration: 900,
        delay:2500,
        easing: 'easeInOutSine',
        stroke:"#FFF"
     });//animation of image stroke from black to white
    
     anime({
        targets: ".white-background",
        duration: 600,
        delay:2500,
        easing: 'easeInOutSine',
        backgroundColor:"rgba(255, 255, 255, 0)"
     });//animation of white background to transparent background
    
     anime({
        targets: ".night-sky-container",
        easing: 'easeInOutSine',
        opacity:[
          { value: 1, duration: 600, delay: 2500 },
          { value: 0, duration: 1600, delay: 5200 }
        ]
     });//animation of revealing universe 
    
     anime({
        targets: ".scene-text",
        duration: 600,
        delay:4000,
        easing: 'easeInOutSine',
        opacity:[
          { value: 1, duration: 600, delay: 4000 },
          { value: 0, duration: 600, delay: 3200 }
        ]
     });//animation of revealing scene 1 tag line after the scene sets
    
    //------------------------------ANIMATION OF SCENE 1: COMETS ----------------------------------
    //---------------------------------------------------------------------------------------------
    
     anime({
        targets: "#Comet-1",
        duration: 2000,
        delay:200,
        easing: 'linear',
        translateX: [1000,-1000],
        translateY: [-700,700],
        loop:true
     });//animation of comet 
     
     anime({
       targets: "#Comet-2",
       duration: 2000,
       delay:500,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-3",
       duration: 2000,
       delay:900,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-4",
       duration: 2000,
       delay:900,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-5",
       duration: 2000,
       delay:1200,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-6",
       duration: 2000,
       delay:1500,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-7",
       duration: 2000,
       delay:2200,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-8",
       duration: 2000,
       delay:2200,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-9",
       duration: 2000,
       delay:2900,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: "#Comet-10",
       duration: 2000,
       delay:3100,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:true
    });//animation of comet 
    
    anime({
       targets: ".NIGHT-SKY-3",
       duration: 1000,
       easing: 'linear',
       opacity:[0,1],
       direction:'alternate',
       loop:true
    });//animation of comet 
    
    anime({
       targets:[".turbulence-3",".displacementmap-3"],
       baseFrequency: 0.04,
       scale: 20,
       numOctave:10,
       duration: 4500,
       easing:'easeInQuad',
       delay:5000
    })
};
var sceneTwoAnimation = function(){

    anime({
        targets:["#believe",".turbulence-1",".displacementmap-1"],
        baseFrequency: 0,
        numOctave: 0,
        duration: 5500,
        easing:'easeOutQuad',
        scale:1
    })

    anime({
        targets:["#underwater",".turbulence-2",".displacementmap-2"],
        baseFrequency: 0,
        numOctave: 0,
        duration: 10000,
        direction: 'alternate',
        easing:'linear',
        scale:1,
        loop:true
    })
    
    anime({
        targets: ".UNDERWATER-8",
        duration:350000,
        translateY:[200,-500],
        delay:-1000
    })
    anime({
        targets: "#School-1",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    
    anime({
        targets: "#School-2",
        duration:350000,
        translateX:[-200,500],
        delay:-1000,
    })
    anime({
        targets: "#School-3",
        duration:350000,
        translateX:[-200,500],
        delay:-1000,
        easing: 'easeInOutExpo'
    })
    anime({
        targets: "#Fish-1",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-2",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    
    anime({
        targets: "#Fish-3",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-4",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-5",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-6",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-7",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-8",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-9",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Fish-10",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    
    anime({
        targets: "#Fish-11",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    
    anime({
        targets: "#Fish-12",
        duration:350000,
        translateX:[-200,500],
        delay:-1000
    })
    anime({
        targets: "#Shark",
        duration:350000,
        translateX:[-500],
        delay:-1000
    })
    anime({
        targets:'.scene-2 .scene-text',
        easing: 'easeInOutSine',
        opacity:[
          { value: 1, duration: 600, delay: 1200 },
          { value: 0, duration: 600, delay: 3200 }
        ]
     
    })
    
};
var sceneThreeAnimation = function(){
    anime({
            targets:'.achieve-container',
            duration:2000,
            easing:'easeInOutQuad',
            opacity:1
    })

      anime({
        targets: '.CITY-STROKE-3',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'linear',
        delay:2000,
        duration:2500,
        strokeWidth:1,
      });
      anime({
        targets: '#OBJECTS>path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'linear',
        delay:2000,
        duration: 2500,
        strokeWidth:1,
      });
      anime({
        targets: '.CITY-STROKE-3',
        easing: 'linear',
        duration:5000,
        delay:-500,
        opacity:[0,1,0]
      });
      anime({
        targets: '#OBJECTS>path',
        easing: 'linear',
        duration:5000,
        delay:-500,
        opacity:[0,1,0]
      });
    anime({
        targets: '.svg-container-fill',
        easing: 'easeInOutQuad',
        delay:3000,
        duration: 2000,
        opacity:0.9
    });  
    anime({
      targets: '.scene-text',
      easing: 'easeInOutQuad',
      delay:3400,
      duration: 1500,
      opacity:1
    });  
    anime({
      targets: '#Light-1',
      easing: 'easeInOutQuad',
      duration: 2000,
      rotateZ:[15,-15],
      direction: 'alternate',
      loop:true
    });  
    anime({
      targets: '#Light-2',
      easing: 'easeInOutQuad',
      duration: 2000,
      rotateZ:[15,-15],
      direction: 'alternate',
      loop:true
    });  
    anime({
      targets: '#Light-3',
      easing: 'easeInOutQuad',
      duration: 2000,
      rotateZ:[15,-15],
      direction: 'alternate',
      loop:true
    });  
    anime({
      targets: '#Light-4',
      easing: 'easeInOutQuad',
      duration: 2000,
      rotateZ:[15,-15],
      direction: 'alternate',
      loop:true
    });  
    anime({
        targets:'.scene-3 .scene-text',
        delay:4000,
        opacity:1,
        duration:3000
    })
};
var sceneTwoToThree = function(){
    anime({
        targets:'.scene-3',
        top:0,
        duration:1000,
        easing:'easeInOutSine'
    })
    anime({
        targets:'.scene-2',
        top:'-100vh',
        bottom:'100vh',
        duration:1000,
        easing:'easeInOutSine'
    })
};
var sceneOneToTwo = function(){
    anime({
        targets:'.scene-2',
        duration:2600,
        opacity:1
    })
    anime({
        targets:'.scene-1',
        duration:2600,
        opacity:0
    })
}


var playAnimation = function(){
    sceneOneAnimation();
    setTimeout(sceneOneToTwo,10000);
    setTimeout(sceneTwoAnimation,10000);
    setTimeout(sceneTwoToThree,16000);
    setTimeout(sceneThreeAnimation,17100);
};

setTimeout(playAnimation,000);

