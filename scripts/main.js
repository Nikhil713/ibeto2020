
var backgroundDark = anime.timeline({
  easing: 'easeOutExpo',
  duration: 14000,
})
backgroundDark.add({
  targets: '.background-dark',
  opacity:1,
  duration:1000,
  delay:20000
})
backgroundDark.add({
  targets: '.background-dark',
  opacity:0,
  duration:1000,
  delay:14000
})
var textAnimation = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2400,
})
textAnimation.add({
  targets: '#text-1',
  opacity:1,
  duration:600,
  delay:5000
})
textAnimation.add({
  targets: '#text-1',
  opacity:0,
  duration:600,
  delay:3000
})
textAnimation.add({
  targets: '#text-2',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-2',
  opacity:0,
  duration:600,
  delay:3000
})
textAnimation.add({
  targets: '#text-3',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-3',
  opacity:0,
  duration:600,
  delay:4500
})
textAnimation.add({
  targets: '#text-4',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-4',
  color:'#FFF',
  duration:600,
  delay:200
})
textAnimation.add({
  targets: '#text-4',
  opacity:0,
  duration:600,
  delay:2000
})
textAnimation.add({
  targets: '#text-5',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-5',
  opacity:0,
  duration:600,
  delay:2000
})
textAnimation.add({
  targets: '#text-6',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-6',
  opacity:0,
  duration:600,
  delay:2000
})
textAnimation.add({
  targets: '#text-7',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-7',
  opacity:0,
  duration:600,
  delay:2000
})
textAnimation.add({
  targets: '#text-8',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-8',
  opacity:0,
  duration:600,
  delay:2000
})
textAnimation.add({
  targets: '#text-9',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-9',
  opacity:0,
  duration:600,
  delay:2000
})
textAnimation.add({
  targets: '#text-10',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-10',
  opacity:0,
  duration:600,
  delay:3000
})
textAnimation.add({
  targets: '#text-11',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-11',
  opacity:0,
  duration:600,
  delay:3000
})
textAnimation.add({
  targets: '#text-12',
  opacity:1,
  duration:600
})
textAnimation.add({
  targets: '#text-12',
  opacity:0,
  duration:1000,
  delay:3000
})
setTimeout(function(){
  anime({
      targets:'#Car_1',
      duration:3000,
      opacity:{
          value:[0,1],
          duration:500
      },
      translateX:[-27,126],
      translateY:[15,-70],
      easing:"linear",
      loop:true
  })
  
  setTimeout(function(){
      anime({
          targets:'#Car_3',
          duration:3000,
          opacity:{
              value:[0,1],
              duration:500
          },
          translateX:[-126,27],
          translateY:[70,-15],
          easing:"linear",
          loop:true
      })
  },1500)
  setTimeout(function(){
      anime({
          targets:'#Lorry_1',
          duration:3000,
          opacity:{
              value:[0,1],
              duration:500
          },
          translateX:[-90,63],
          translateY:[50,-35],
          easing:"linear",
          loop:true
      })
  },700)
  anime({
      targets:'#Car_2',
      duration:2000,
      opacity:{
          value:[1,0],
          duration:500,
          delay:1500
      },
      
      translateX:-54,
      translateY:-30,
      easing:"linear",
      loop:true
  })
  anime({
      targets:'#Car_4',
      duration:2000,
      opacity:{
          value:[0,1],
          duration:500
      },
      translateX:[18,-63],
      translateY:[10,-35],
      easing:"linear",
      loop:true
  })
  anime({
      targets:'#Car_5',
      duration:2000,
      opacity:{
          value:[0,1],
          duration:500
      },
      translateX:[18,-63],
      translateY:[10,-35],
      easing:"linear",
      loop:true
  })
  
      anime({
          targets:'#Lorry_2',
          duration:3000,
          opacity:{
              value:[0,1],
              duration:500
          },
          translateX:[9,-63],
          translateY:[-5,35],
          easing:"linear",
          loop:true,
          delay:500
      })
  
},39000)

anime({
  targets: '.lottie-player',
  opacity:0,
  duration:2000,
  delay:38000
})

// anime({
//     targets: '#CITY-ISOMETRIC',
//     opacity:1,
//     duration:1000,
//     delay:41000
// })
// anime({
//     targets: '#CITY-ISOMETRIC',
//     opacity:0,
//     duration:1000,
//     delay:50000
// })
anime({
  targets: '.ibeto-logo-animation',
  opacity:1,
  duration:2000,
  delay:52000
})