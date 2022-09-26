window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(team);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // verificar se a seção passou da linha
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(
    `.navbar-nav a[href*=${sectionId}]`
  );

  menuElement.classList.remove("ativo");

  if (sectionBoundaries) {
    menuElement.classList.add("ativo");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 100) {
    document.querySelector("#backToTopButton").classList.add("show");
  } else {
    document.querySelector("#backToTopButton").classList.remove("show");
  }
}

function switchTheme() {
  document.querySelector("body").classList.toggle("dark");
}
