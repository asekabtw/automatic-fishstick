const accordions = document.querySelectorAll(".accordion__item");

accordions.forEach((question) => {
  const btn = question.querySelector("#question");

  btn.addEventListener("click", () => {
    accordions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
      }
    });

    question.classList.toggle("active");
  });
});
