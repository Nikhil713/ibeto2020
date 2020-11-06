requestAnimationFrame(()=>{
  // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
  var i = 0,
      a = 0,
      isBackspacing = false;
  
  // Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
  var textArray = [
    "Puzzled?", 
    "Confused?",
    "Unsure about the future?"
  ];
  
  // Speed (in milliseconds) of typing.
  var speedForward = 40, //Typing Speed
      speedWait = 1000, // Wait between typing and backspacing
      speedBetweenLines = 1000, //Wait between first and second lines
      speedBackspace = 25; //Backspace Speed
  
  //Run the loop
  typeWriter("output", textArray);
  
  function typeWriter(id, ar) {
    var element = $("#" + id),
        aString = ar[a],
        eHeader = element.children("h1"); //Header element
    
    // Determine if animation should be typing or backspacing
    if (!isBackspacing) {
      
      // If full string hasn't yet been typed out, continue typing
      if (i < aString.length) {
            eHeader.text(eHeader.text() + aString.charAt(i));
          i++;
          setTimeout(function(){ typeWriter(id, ar); }, speedForward);
        
      // If full string has been typed, switch to backspace mode.
      } else if (i == aString.length) {
        isBackspacing = true;
        setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      }
      
    // If backspacing is enabled
    } else {
      
      // If either the header or the paragraph still has text, continue backspacing
      if (eHeader.text().length > 0) {
        
          if(eHeader.text().length > 0) {
          eHeader.addClass("cursor");
          eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
        }
        setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
      
      // If neither head or paragraph still has text, switch to next quote in array and start typing.
      } else { 
        
        isBackspacing = false;
        i = 0;
        isParagraph = false;
        a = a+1; //Moves to next position in array, always looping back to 0
        setTimeout(function(){ typeWriter(id, ar); }, 50);
        
      }
    }
  }
  setTimeout(()=>{
    requestAnimationFrame(()=>{anime({
      targets: '.cursor',
      opacity:0,
      easing: 'easeInOutSine',
      duration: 1
    });
    anime({
      targets: '#text-1',
      opacity: [
        { value: 1, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 4000 }
      ],
      easing: 'easeInOutSine',
    });
    anime({
      targets: '#text-2',
      opacity: [
        { value: 1, duration: 500, delay: 5500 },
        { value: 0, duration: 500, delay: 9500 }
      ],
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.scene-1 .svg-stroke',
      opacity:1,
      easing: 'easeInOutSine',
      duration: 100,
      delay:100
    });
    anime({
      targets: '.scene-1-stroke-3',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 900,
      delay: function(el, i) { return i * 70 },
    });
    anime({
      targets: '.scene-1-stroke-4',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 900,
      delay: function(el, i) { return i * 70 },
    });
    
    anime({
      targets: '.scene-1 .svg-fill',
      opacity:1,
      easing: 'easeInOutSine',
      duration: 900,
      delay:1200
    });
    setTimeout(()=>{
      requestAnimationFrame(()=>{anime({
        targets: '.scene-1 .svg-stroke',
        opacity:0,
        easing: 'easeInOutSine',
        duration: 900,
        delay:1200
    });
    })
    },1200);
    anime({
      targets: '#Scene-1-Question-Marks > path',
      translateY:[-20],
      easing: 'easeInOutSine',
      duration: 1900,
      delay: function(el, i) { return i * 350 },
      direction:'alternate',
      loop:true
    });
    anime({
      targets: '#Scene-1-Question_Mark, #Scene-1-Person',
      translateY:[-10],
      easing: 'easeInOutSine',
      duration: 1300,
      direction:'alternate',
      loop:true
    });
    setTimeout(() => {
      requestAnimationFrame(()=>{  anime({
        targets: '.scene-1-stroke-3',
        strokeDashoffset: [0,anime.setDashoffset],
        easing: 'easeInOutSine',
        duration: 900,
        delay: function(el, i) { return i * 70 },
      });
    anime({
        targets: '.scene-1-stroke-4',
        strokeDashoffset: [0,anime.setDashoffset],
        easing: 'easeInOutSine',
        duration: 900,
        delay: function(el, i) { return i * 70 },
       });})
      },9100);
    setTimeout(()=>{
      requestAnimationFrame(()=>{ anime({
        targets: '.scene-1',
        opacity:0,
        easing: 'easeInOutSine',
        duration: 900,
      });
      setTimeout(scene2,1500);
      })
    },10200);
    })
    },7000)
    
  })
  
  //Scene-1
  
  //Scene-2
  function scene2(){
    requestAnimationFrame(()=>{
      anime({
        targets: '#text-3',
        opacity: [
          { value: 1, duration: 500, delay: 500 },
          { value: 0, duration: 500, delay: 4000 }
        ],
        easing: 'easeInOutSine',
      });
      anime({
        targets: '#text-4',
        opacity: [
          { value: 1, duration: 500, delay: 5500 },
          { value: 0, duration: 500, delay: 9500 }
        ],
        easing: 'easeInOutSine',
      });
      anime({
        targets: '#Scene-2-Doc-Stroke-1',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 500,
        delay:100
      });
    anime({
        targets: '#Scene-2-Doc-Stroke-1 > path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 40 },
      });
    anime({
        targets: '#Scene-2-Doc-Stroke-1 > polygon',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 40 },
      });
    anime({
        targets: '#Scene-2-Beaker > path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 900,
        delay: function(el, i) { return i * 70 },
    });
    
    setTimeout(()=>{
      requestAnimationFrame(()=>{
        anime({
          targets: '#Scene-2-Doc-Stroke-2',
          opacity:1,
          easing: 'easeInOutSine',
          duration: 300,
          delay:100
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-2 > path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 70 },
        });
        anime({
          targets: '#Scene-2-Doc-Stroke-2 > circle',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1000,
        });
       anime({
          targets: '#Scene-2-Doc-Stroke-Head > path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 70 },
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-2 > polygon',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 70 },
        });
      })
    },2200);
    setTimeout(()=>{
      requestAnimationFrame(()=>{
        anime({
          targets: '#Scene-2-Doc-Stroke-3',
          opacity:1,
          easing: 'easeInOutSine',
          duration: 300,
          delay:100
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-3 > path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
        anime({
          targets: '#Scene-2-Doc-Stroke-3 > circle',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1000,
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-3 > polygon',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
      }) 
    },3200);
    setTimeout(()=>{
      requestAnimationFrame(()=>{
        anime({
          targets: '#Scene-2-Stroke-Nurse',
          opacity:1,
          easing: 'easeInOutSine',
          duration: 300,
          delay:100
        });
      anime({
          targets: '#Scene-2-Stroke-Nurse > path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
        anime({
          targets: '#Scene-2-Stroke-Nurse > circle',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1000,
        });
      anime({
          targets: '#Scene-2-Stroke-Nurse > polygon',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
      })
    },4200);
    anime({
        targets: '#Scene-2-Nurse',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:6000
      });
    anime({
        targets: '#Scene-2-Doc-1',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:4000
      });
      anime({
        targets: '#Scene-2-Doc-2',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:5000
      });
      anime({
        targets: '#Scene-2-Doc-3',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:5500
      });
      anime({
        targets: '#Scene-2-Background',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:5000
      });
      anime({
        targets: '#Scene-2-Plant',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:5000
      });
      anime({
        targets: '#Scene-2-Desk',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:5000
      });
    
    setTimeout(()=>{
      requestAnimationFrame(()=>{
        anime({
          targets: '.scene-2 .svg-fill',
          opacity:0,
          easing: 'easeInOutSine',
          duration: 1000,
          delay:100
        }); 
  
      anime({
          targets: '#Scene-2-Stroke-Nurse > path',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
        anime({
          targets: '#Scene-2-Stroke-Nurse > circle',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 1000,
        });
      anime({
          targets: '#Scene-2-Stroke-Nurse > polygon',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
  
      anime({
          targets: '#Scene-2-Doc-Stroke-3 > path',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
        anime({
          targets: '#Scene-2-Doc-Stroke-3 > circle',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 1000,
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-3 > polygon',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 30 },
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-2 > path',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 70 },
        });
        anime({
          targets: '#Scene-2-Doc-Stroke-2 > circle',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 1000,
        });
       anime({
          targets: '#Scene-2-Doc-Stroke-Head > path',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 70 },
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-2 > polygon',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 70 },
        });
        anime({
          targets: '#Scene-2-Doc-Stroke-1 > path',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 500,
          delay: function(el, i) { return i * 40 },
        });
      anime({
          targets: '#Scene-2-Doc-Stroke-1 > polygon',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 500,
          delay: function(el, i) { return i * 40 },
        });
      anime({
          targets: '#Scene-2-Beaker > path',
          strokeDashoffset: [0,anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 900,
          delay: function(el, i) { return i * 70 },
      });
      anime({
        targets: '.scene-2',
        opacity:0,
        easing: 'easeInOutSine',
        duration: 700,
        delay:2200
      });
      setTimeout(scene3,2500);
      })
    },8200);
    })
  }
    
  //Scene-3
  function scene3(){
    requestAnimationFrame(()=>{
      anime({
        targets: '#text-5',
        opacity: [
          { value: 1, duration: 500, delay: 500 },
          { value: 0, duration: 500, delay: 4000 }
        ],
        easing: 'easeInOutSine',
      });
      anime({
        targets: '#text-6',
        opacity: [
          { value: 1, duration: 500, delay: 5500 },
          { value: 0, duration: 500, delay: 9500 }
        ],
        easing: 'easeInOutSine',
      });
      anime({
        targets: '.Scene-3-Stroke-6',
        opacity:1,
        duration: 100,
        delay:100
    });
    anime({
        targets: '.Scene-3-Stroke-6',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 10 },
    });
    setTimeout(()=>{
      requestAnimationFrame(()=>{
        anime({
          targets: '.Scene-3-Stroke-6',
          opacity:0,
          easing: 'easeInOutSine',
          duration: 1000
      });
      })
    },
    2500
    );
  
    anime({
        targets: '#Scene-3-Rocket',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:2500
    });
    anime({
        targets: '#Scene-3-Scaffold',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 500,
        delay:2500
    });
    anime({
        targets: '#Scene-3-Background',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 500,
        delay:2500
    });
    anime({
        targets: '#Scene-3-Stars',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 500,
        delay:2500
    });
    anime({
        targets: '#Scene-3-Smoke-1',
        scale:[0,1.5],
        easing: 'easeInOutSine',
        duration: 1000,
        delay:4500
    });
    anime({
        targets: '#Scene-3-Smoke-2',
        scale:[0,1.5],
        easing: 'easeInOutSine',
        duration: 1000,
        delay:5000
    });
    anime({
        targets: '#Scene-3-Smoke-3',
        scale:[0,1.5],
        easing: 'easeInOutSine',
        duration: 1000,
        delay:5500
    });
    anime({
        targets: '#Scene-3-Smoke-4',
        scale:[0,1.5],
        easing: 'easeInOutSine',
        duration: 1000,
        delay:6000
    });
    anime({
        targets: '#Scene-3-Rocket',
        translateY:[-600],
        easing: 'easeInOutSine',
        duration: 3500,
        delay:5500
    });
    anime({
        targets: '.scene-3',
        opacity:0,
        easing: 'easeInOutSine',
        duration: 1000,
        delay:9500
    });
    setTimeout(scene4,11000);
    })
  }
  //Scene-4
  function scene4(){
    requestAnimationFrame(()=>{
      anime({
        targets: '#text-7',
        opacity: [
          { value: 1, duration: 500, delay: 500 },
          { value: 0, duration: 500, delay: 4000 }
        ],
        easing: 'easeInOutSine',
      });
      anime({
        targets: '#text-8',
        opacity: [
          { value: 1, duration: 500, delay: 5500 },
          { value: 0, duration: 500, delay: 9500 }
        ],
        easing: 'easeInOutSine',
      });
      anime({
        targets: '.scene-4 .svg-stroke',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 100,
        delay:100
    });
    anime({
        targets: '.Scene-4-Stroke-13',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 10 },
    });
    anime({
        targets: '.Scene-4-Stroke-14',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 10 },
    });
    anime({
        targets: '.Scene-4-Stroke-13',
        opacity:0,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 1500
    });
    anime({
        targets: '.Scene-4-Stroke-14',
        opacity:0,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 1500
    });
    anime({
        targets: '.scene-4 .svg-fill',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 1500
    });
    anime({
        targets: '#Scene-4-Robot',
        translateY:[-20],
        easing: 'easeInOutSine',
        duration: 1900,
        delay: function(el, i) { return i * 350 },
        direction:'alternate',
        loop:true
    });
    anime({
        targets: '#Scene-4-Gear-1',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:'1turn',
        loop:true
    });
    anime({
        targets: '#Scene-4-Gear-2',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:'1turn',
        direction:'alternate',
        loop:true
    });
    anime({
        targets: '#Scene-4-Gear-3',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:'1turn',
        loop:true
    });
    anime({
        targets: '#Scene-4-Gear-4',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:'1turn',
        direction:'alternate',
        loop:true
    });
    anime({
        targets: '#Scene-4-Gear-5',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:'1turn',
        loop:true
    });
    anime({
        targets: '#Scene-4-Gear-6',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:'1turn',
        direction:'alternate',
        loop:true
    });
    anime({
        targets: '#Scene-4-Right-Robot-Arm',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:20,
        direction:'alternate',
        loop:true
    });
    anime({
        targets: '#Scene-4-Left-Robot-Arm',
        easing: 'easeInOutSine',
        duration: 1900,
        rotate:[-10,0],
        direction:'alternate',
        loop:true
    });
    setTimeout(()=>{
      requestAnimationFrame(()=>{
        anime({
          targets: '.Scene-4-Stroke-13',
          opacity:1,
          easing: 'easeInOutSine',
          duration: 1000,
      });
      anime({
          targets: '.Scene-4-Stroke-14',
          opacity:1,
          easing: 'easeInOutSine',
          duration: 1000,
      });
      anime({
          targets: '.scene-4 .svg-fill',
          opacity:0,
          easing: 'easeInOutSine',
          duration: 1000,
      });
      setTimeout(()=>{
        requestAnimationFrame(()=>{
          anime({
            targets: '.Scene-4-Stroke-13',
            strokeDashoffset: [0,anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 500,
            delay: function(el, i) { return i * 10 },
        });
        anime({
            targets: '.Scene-4-Stroke-14',
            strokeDashoffset: [0,anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 500,
            delay: function(el, i) { return i * 10 },
        });
        anime({
          targets: '.scene-4',
          opacity:0,
          easing: 'easeInOutSine',
          duration: 500,
          delay: 800
        })
        setTimeout(scene5,1000);
        })    
      },900)
      })    
    },9500) 
    })   
  }
  
  //Scene-5
  function scene5(){
    anime({
      targets: '#text-9',
      opacity: [
        { value: 1, duration: 500, delay: 500 },
        { value: 0, duration: 500, delay: 4000 }
      ],
      easing: 'easeInOutSine',
    });
    anime({
      targets: '#text-10',
      opacity: [
        { value: 1, duration: 500, delay: 5500 },
        { value: 0, duration: 500, delay: 9500 }
      ],
      easing: 'easeInOutSine',
    });
    requestAnimationFrame(()=>{
      anime({
        targets: '.scene-5 .svg-stroke',
        opacity:1,
        easing: 'easeInOutSine',
        duration: 100,
        delay: 100
    });
    anime({
        targets: '.Scene-5-Stroke-5',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1100,
        delay: function(el, i) { return i * 10 },
  });
  anime({
    targets: '#Scene-5-Character',
    opacity:1,
    easing: 'easeInOutSine',
    duration: 700,
    delay: 1000
  });
  anime({
    targets: '#Scene-5-Plants',
    opacity:1,
    easing: 'easeInOutSine',
    duration: 700,
    delay: 1000
  });
  anime({
    targets: '#Scene-5-Desk',
    opacity:1,
    easing: 'easeInOutSine',
    duration: 700,
    delay: 1000
  });
  anime({
    targets: '#Scene-5-Background',
    opacity:1,
    easing: 'easeInOutSine',
    duration: 700,
    delay: 1000
  });
  anime({
    targets: '#Scene-5-Think-Bubble',
    scale:[0,1],
    easing: 'easeInOutSine',
    duration: 700,
    delay: 2000
  });
  anime({
    targets: '#Scene-5-Bubble-1',
    scale:[0,1],
    easing: 'easeInOutSine',
    duration: 700,
    delay: 1600
  });
  anime({
    targets: '#Scene-5-Bubble-2',
    scale:[0,1],
    easing: 'easeInOutSine',
    duration: 700,
    delay: 1300
  });
  anime({
    targets: '#Scene-5-Think-Bubble-Content > g',
    translateY:[-10],
    easing: 'easeInOutSine',
    duration: 1000,
    direction:'alternate',
    delay: function(el, i) { return i * 150 },
    loop:true
  });
  anime({
    targets: '.scene-5',
    opacity:0,
    easing: 'easeInOutSine',
    duration: 500,
    delay: 10000
  })
  anime({
    targets: '.ibeto-logo-animation',
    opacity:1,
    easing: 'easeInOutSine',
    duration: 500,
    delay: 10700
  })
    })
      
  }
  