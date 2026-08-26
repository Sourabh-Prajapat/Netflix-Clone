const slider = document.getElementById("sliderid");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateButtons() {
    if(slider.scrollLeft <= 0) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
    }

    else if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        nextBtn.classList.add("hidden");
        prevBtn.classList.remove("hidden");
    }

    else{
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
    }
}

prevBtn.classList.add("hidden");

prevBtn.addEventListener("click", () => {
    slider.scrollTo({
        left: 0,
        behavior: "smooth"
    });

    setTimeout(() => {
        prevBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
    }, 200);
});

nextBtn.addEventListener("click", () => {
    slider.scrollTo({
        left: slider.scrollWidth-slider.clientWidth,
        behavior: "smooth"
    });

    setTimeout(() => {
        nextBtn.classList.add("hidden");
        prevBtn.classList.remove("hidden");
    }, 200);
});

slider.addEventListener("scroll", updateButtons);

updateButtons();


const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        document.querySelectorAll(".answer").forEach((item) => {
            if(item != answer) {
                item.classList.remove("show");
            }
        });

        answer.classList.toggle("show");
    })
});
