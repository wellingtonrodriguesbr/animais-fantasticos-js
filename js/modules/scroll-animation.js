export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
    this.classActive = "ativo";
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        distance: sectionTop - this.windowHalf,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.distance) {
        item.element.classList.add(this.classActive);
      } else if (item.element.classList.contains(this.classActive)) {
        item.element.classList.remove(this.classActive);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
