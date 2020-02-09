//---------------------------------ANIMATION OF SCENE 1: INTRO----------------------------------
//---------------------------------------------------------------------------------------------
anime({
    targets: ".image-stroke",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 }
  });//animation of image stroke dashoffset

anime({
    targets: ".image-stroke",
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
    targets: ".svg-container",
    duration: 600,
    delay:2500,
    easing: 'easeInOutSine',
    opacity:1
 });//animation of revealing universe 

 anime({
    targets: ".scene-1-text",
    duration: 600,
    delay:4000,
    easing: 'easeInOutSine',
    opacity:1
 });//animation of revealing scene 1 tag line after the scene sets

//------------------------------ANIMATION OF SCENE 1: COMETS ----------------------------------
//---------------------------------------------------------------------------------------------

 anime({
    targets: "#Comet_1",
    duration: 1000,
    delay:4200,
    easing: 'linear',
    translateX: [200,-1000],
    translateY: [-200,1000]
 });//animation of comet 
 
 anime({
    targets: "#Comet_2",
    duration: 1000,
    delay:5400,
    easing: 'linear',
    translateX: [200,-1000],
    translateY: [-200,1000]
 });//animation of comet 

 anime({
    targets: "#Comet_3",
    duration: 1000,
    delay:6600,
    easing: 'linear',
    translateX: [200,-1000],
    translateY: [-200,1000]
 });//animation of comet 

 anime({
    targets: "#Comet_4",
    duration: 1000,
    delay:7800,
    easing: 'linear',
    translateX: [200,-1000],
    translateY: [-200,1000]
 });//animation of comet 

 anime({
    targets: "#Comet_5",
    duration: 1000,
    delay:9000,
    easing: 'linear',
    translateX: [200,-1000],
    translateY: [-200,1000]
 });//animation of comet 

//--------------------ANIMATION OF SCENE 1: ORBIT AROUND BROWN PLANET -------------------------
//---------------------------------------------------------------------------------------------


anime({
    targets: "#Orbit_of_brown_planet",
    duration: 9000,
    delay:2200,
    easing: 'linear',
    scale:1.3
 });//animation of orbit around brown planet

//---------------------------ANIMATION OF SCENE 1: RED PLANET ---------------------------------
//---------------------------------------------------------------------------------------------
