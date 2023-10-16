const sections = document.querySelectorAll("section");
const videos = document.querySelectorAll("video");
const navLi = document.querySelectorAll("nav ul li a");

const percentageScrollTrigger = 60;

const isInViewport = (element) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) * (percentageScrollTrigger / 100)
  );
};

window.addEventListener("scroll", () => {
  let current = "";

  // Ton code existant pour la gestion du fade-in et des vidéos
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("fade-in");
    }
  });
  videos.forEach((video) => {
    if (isInViewport(video)) {
      video.play();
    }
  });

  // Nouveau code pour la gestion du surlignage du menu
  sections.forEach((section) => {
    const sectionTop = section.offsetTop; 
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("href").substring(1) === current) {
      li.classList.add("active");
    }
  });
});

function submitForm() {
  var message = document.getElementById("message").value;
  window.location.href = "mailto:dubos.matthis@gmail.com?subject=Message&body=" + message;
}
