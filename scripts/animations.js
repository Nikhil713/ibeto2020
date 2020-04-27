// problem-statements-icon fade up animation
var problem_statements_icon = document.querySelector(".problem-statements-icon");
var problem_statements_list = document.querySelectorAll(".ps-li");

window.addEventListener('scroll', function (event) {
	if (isAnyPartOfElementInViewport(problem_statements_icon)) {
        //add animation class when icon is visible
        problem_statements_icon.classList.add("problem-statements-icon-animate");
    }
    else if (problem_statements_icon.classList.contains("problem-statements-icon-animate")) {
        //remove the class when its not in view so it plays again next time its visible
        problem_statements_icon.classList.remove("problem-statements-icon-animate");
    }

    if (isAnyPartOfElementInViewport(problem_statements_list[0])) {
        let duration = 0.3;
        problem_statements_list.forEach (
            function (element) {
                duration += 0.4
                element.classList.add("ps-li-animate");
                element.setAttribute ("style", "animation-duration: " + duration + "s");
            }
        )
    }
    else if (problem_statements_list[0].classList.contains("ps-li-animate")) {
        problem_statements_list.forEach (
            function (element) {
                element.classList.remove("ps-li-animate");
            }
        )
    }
}, false);


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}

function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}