
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
      { value: 0, duration: 1600, delay: 7200 }
    ]
 });//animation of revealing universe 

 anime({
    targets: ".scene-text",
    duration: 600,
    delay:4000,
    easing: 'easeInOutSine',
    opacity:[
      { value: 1, duration: 600, delay: 4000 },
      { value: 0, duration: 600, delay: 5200 }
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
   delay:7000
})
// setTimeout(function(){
//    document.getElementById('displacementMapScale').setAttribute("scale","20")
// },7000)