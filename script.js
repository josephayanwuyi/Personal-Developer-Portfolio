const h1 = document.querySelector(".welcome-section > h1");
const p = document.querySelector(".welcome-section > p");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (entry.target.tagName === "H1") {
                entry.target.classList.remove("animate-h1");
                void entry.target.offsetWidth;
                entry.target.classList.add("animate-h1");
            }

            if (entry.target.tagName === "P") {
                entry.target.classList.remove("animate-p");
                void entry.target.offsetWidth;
                entry.target.classList.add("animate-p");
            }

        } else {
            entry.target.classList.remove("animate-h1", "animate-p");
        }
    });
}, {
    threshold: 0.6
});

observer.observe(h1);
observer.observe(p);