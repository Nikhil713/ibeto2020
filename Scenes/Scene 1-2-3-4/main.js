var sceneOneAnimation = function(){
    anime({
        targets: ".IMAGINE-TEXT-1",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        opacity:{
            value:[0,1],
            duration:100
        },
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
        delay:200+2450,
        easing: 'linear',
        translateX: [1000,-1000],
        translateY: [-700,700],
        loop:5
     });//animation of comet 
     
     anime({
       targets: "#Comet-2",
       duration: 2000,
       delay:500+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-3",
       duration: 2000,
       delay:900+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-4",
       duration: 2000,
       delay:900+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-5",
       duration: 2000,
       delay:1200+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-6",
       duration: 2000,
       delay:1500+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-7",
       duration: 2000,
       delay:2200+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-8",
       duration: 2000,
       delay:2200+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-9",
       duration: 2000,
       delay:2900+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    
    anime({
       targets: "#Comet-10",
       duration: 2000,
       delay:3100+2450,
       easing: 'linear',
       translateX: [1000,-1000],
       translateY: [-700,700],
       loop:5
    });//animation of comet 
    setTimeout(function(){
        anime({
            targets: ".NIGHT-SKY-3",
            duration: 1000,
            easing: 'linear',
            opacity:[0,1],
            direction:'alternate',
            loop:3
         });
    },3000)
   
    
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
        loop:2
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
            duration:600,
            easing:'easeInOutQuad',
            opacity:1
    });
    anime({
        targets: '.NEON-ROAD-STROKE-13,.NEON-ROAD-STROKE-12,.NEON-ROAD-STROKE-11,.NEON-ROAD-STROKE-10,.NEON-ROAD-STROKE-9,.NEON-ROAD-STROKE-8,.NEON-ROAD-STROKE-7,.NEON-ROAD-STROKE-6,.NEON-ROAD-STROKE-5,.NEON-ROAD-STROKE-4,.NEON-ROAD-STROKE-3,.NEON-ROAD-STROKE-2,.NEON-ROAD-STROKE-1',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInSine',
        delay: function(el, i) { return i * 10 },
        duration: 1500,
        opacity:1
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
            delay: 3020,
            easing: 'easeInOutQuart'
          },
        scale:{
            value: [1.4,1],
            duration: 10000,
            delay: 3000,
            easing: 'easeInOutQuart'
          },
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
var sceneThreeToFour = function(){
  anime({
    targets:'.scene-4',
    duration:2600,
    opacity:1
  })
  anime({
    targets:'.ibeto-logo',
    duration:2600,
    opacity:1,
    delay:400
  })
  anime({
    targets:'.scene-3',
    duration:2600,
    opacity:0
  })
}

var playAnimation = function(){
    sceneOneAnimation();
    setTimeout(sceneOneToTwo,10000);
    setTimeout(sceneTwoAnimation,10009);
    setTimeout(sceneTwoToThree,16000);
    setTimeout(sceneThreeAnimation,17100);
    setTimeout(sceneThreeToFour,31000);
};

setTimeout(playAnimation,300);

var setWillChange = function(){
   var setWillChangeSceneOne= function(){
    setTimeout(function(){
        const domElement = document.querySelectorAll('.IMAGINE-TEXT-1');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
       },301);
       setTimeout(function(){
        document.querySelector('.night-sky-container').style.willChange='opacity';  
       },2301);
       setTimeout(function(){
        document.querySelector('.night-sky-container').style.willChange='auto';  
       },2501);
       setTimeout(function(){
        const domElement = document.querySelectorAll('.NIGHT-SKY-3');
        domElement.forEach(element => {
            element.style.willChange='opacity';
          })
       },2301);
       setTimeout(function(){
       const domElement = document.querySelectorAll('.NIGHT-SKY-3');
       domElement.forEach(element => {
           element.style.willChange='auto';
         })
      },2501);
       setTimeout(function(){
        document.querySelector('#Comet-1').style.willChange='transform';  
        document.querySelector('#Comet-2').style.willChange='transform';  
        document.querySelector('#Comet-3').style.willChange='transform';  
        document.querySelector('#Comet-4').style.willChange='transform';  
        document.querySelector('#Comet-5').style.willChange='transform';  
        document.querySelector('#Comet-6').style.willChange='transform';  
        document.querySelector('#Comet-7').style.willChange='transform';  
        document.querySelector('#Comet-8').style.willChange='transform';  
        document.querySelector('#Comet-9').style.willChange='transform';  
        document.querySelector('#Comet-10').style.willChange='transform';  
       },2250);
       setTimeout(function(){
        document.querySelector('#Comet-1').style.willChange='auto';  
        document.querySelector('#Comet-2').style.willChange='auto';  
        document.querySelector('#Comet-3').style.willChange='auto';  
        document.querySelector('#Comet-4').style.willChange='auto';  
        document.querySelector('#Comet-5').style.willChange='auto';  
        document.querySelector('#Comet-6').style.willChange='auto';  
        document.querySelector('#Comet-7').style.willChange='auto';  
        document.querySelector('#Comet-8').style.willChange='auto';  
        document.querySelector('#Comet-9').style.willChange='auto';  
        document.querySelector('#Comet-10').style.willChange='auto';  
       },2451);
    
       setTimeout(function(){
        const domElement = document.querySelectorAll('.turbulence-3');
        domElement.forEach(element => {
            element.style.willChange='transform';
          })
          domElement = document.querySelectorAll('.displacementmap-3');
        domElement.forEach(element => {
            element.style.willChange='transform';
          })
       },4700);
       setTimeout(function(){
        const domElement = document.querySelectorAll('.turbulence-3');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.displacementmap-3');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
       },5001);
   }
   var setWillChangeSceneOneToTwo = function(){
        document.querySelector('.scene-2').style.willChange='opacity';  
        document.querySelector('.scene-1').style.willChange='opacity';  
       setTimeout(function(){
        document.querySelector('.scene-2').style.willChange='auto';  
        document.querySelector('.scene-1').style.willChange='auto';  
       },400);
   }
   var setWillChangeSceneTwo = function(){    
    document.querySelector("#believe").style.willChange='transform';
        const domElement = document.querySelectorAll('.turbulence-1');
        domElement.forEach(element => {
            element.style.willChange='transform';
          })
          domElement = document.querySelectorAll('.displacementmap-1');
        domElement.forEach(element => {
            element.style.willChange='transform';
          })
          document.querySelector("#underwater").style.willChange='transform';
         domElement = document.querySelectorAll('.turbulence-2');
          domElement.forEach(element => {
              element.style.willChange='transform';
            })
            domElement = document.querySelectorAll('.displacementmap-2');
          domElement.forEach(element => {
              element.style.willChange='transform';
            })      
    setTimeout(function(){
        document.querySelector("#believe").style.willChange='auto';
        const domElement = document.querySelectorAll('.turbulence-1');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.displacementmap-1');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          document.querySelector("#underwater").style.willChange='auto';
          domElement = document.querySelectorAll('.turbulence-2');
          domElement.forEach(element => {
              element.style.willChange='auto';
            })
            domElement = document.querySelectorAll('.displacementmap-2');
          domElement.forEach(element => {
              element.style.willChange='auto';
            })      
       },200);
   }
   var setWillChangeSceneTwoToThree = function(){
    document.querySelector('.scene-2').style.willChange='top,bottom';  
    document.querySelector('.scene-3').style.willChange='top';  
   setTimeout(function(){
    document.querySelector('.scene-2').style.willChange='auto';  
    document.querySelector('.scene-3').style.willChange='auto';  
   },501);
   }
   var setWillChangeSceneThree = function(){
    const domElement = document.querySelectorAll('.NEON-ROAD-STROKE-1');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-2');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-3');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-4');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-5');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-6');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-7');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-8');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-9');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-10');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-11');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-12');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      domElement = document.querySelectorAll('.NEON-ROAD-STROKE-13');
    domElement.forEach(element => {
        element.style.willChange='transform';
      })
      setTimeout(function(){
        const domElement = document.querySelectorAll('.NEON-ROAD-STROKE-1');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-2');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-3');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-4');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-5');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-6');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-7');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-8');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-9');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-10');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-11');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-12');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
          domElement = document.querySelectorAll('.NEON-ROAD-STROKE-13');
        domElement.forEach(element => {
            element.style.willChange='auto';
          })
      },601);
      setTimeout(function(){
        document.querySelector('.svg-container-fill').style.willChange='opacity';
      },2500);
      setTimeout(function(){
        document.querySelector('.svg-container-fill').style.willChange='auto';
      },2805);
      setTimeout(function(){
        document.querySelector('#neon-road-fill').style.willChange='transform';
      },2600);
      setTimeout(function(){
        document.querySelector('#neon-road-fill').style.willChange='auto';
      },2900);

   }
   setWillChangeSceneOne();
   setTimeout(setWillChangeSceneOneToTwo,9500);
   setTimeout(setWillChangeSceneTwo,9850);
   setTimeout(setWillChangeSceneTwoToThree,15500);
   setTimeout(setWillChangeSceneThree,16500);
}
setWillChange();