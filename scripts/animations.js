// // about section
// var about_text = document.querySelector(".about-text");

// //event format section
// var event_format_container = document.querySelector(".event-format-container");
// var left_card = document.querySelector(".left-event-card");
// var middle_card = document.querySelector(".middle-event-card");
// var right_card = document.querySelector(".right-event-card");
// //problem statements section
// var problem_statements_container = document.querySelector(".problem-statements-container");
// var problem_statements_icon = document.querySelector(".problem-statements-icon");
// var problem_statements_list = document.querySelectorAll(".ps-li");

// window.addEventListener('scroll', function (event) {
//     //about-text animation
//     if (isAnyPartOfElementInViewport(about_text)) {
//         about_text.classList.add("about-text-animate");
//     }
//     else if (about_text.classList.contains("about-text-animate")) {
//         about_text.classList.remove("about-text-animate");
//     }

//     //event cards animation
//     //only needs to check if a single card is in viewport
//     if (isAnyPartOfElementInViewport(left_card)) {
//         left_card.classList.add("left-event-card-animate");
//     } 

//     if (isAnyPartOfElementInViewport(middle_card)) {
//         middle_card.classList.add("middle-event-card-animate");
//     } 

//     if (isAnyPartOfElementInViewport(right_card)) {
//         right_card.classList.add("right-event-card-animate");
//     } 
    
//     if (left_card.classList.contains("left-event-card-animate")) {
//         left_card.classList.remove("left-event-card-animate");
//         middle_card.classList.remove("middle-event-card-animate");
//         right_card.classList.remove("right-event-card-animate");
//     }

//     //problem-statements-icon animation
// 	if (isAnyPartOfElementInViewport(problem_statements_container)) {
//         problem_statements_icon.classList.add("problem-statements-icon-animate");
//     }
//     else if (problem_statements_icon.classList.contains("problem-statements-icon-animate")) {
//         problem_statements_icon.classList.remove("problem-statements-icon-animate");
//     }

//     //problem-statements-list animation
//     //only need to check if first list is in viewport
//     if (isAnyPartOfElementInViewport(problem_statements_list[0])) {
//         let duration = 0.3;
//         problem_statements_list.forEach (
//             function (element) {
//                 duration += 0.4
//                 element.classList.add("ps-li-animate");
//                 element.setAttribute ("style", "animation-duration: " + duration + "s");
//             }
//         )
//     }
//     else if (problem_statements_list[0].classList.contains("ps-li-animate")) {
//         problem_statements_list.forEach (
//             function (element) {
//                 element.classList.remove("ps-li-animate");
//             }
//         )
//     }
// }, false);


// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document. documentElement.clientWidth)
//     );
// }

// function isAnyPartOfElementInViewport(el) {

//     const rect = el.getBoundingClientRect();
//     const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
//     const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

//     const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
//     const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

//     return (vertInView && horInView);
// }