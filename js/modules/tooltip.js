export default class Tooltip {
  constructor(tooltip) {
    this.tooltip = document.querySelectorAll(tooltip);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver(event) {
    this.createToolTipBox(event.currentTarget);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  addTooltipEvents() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  createToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipEvents();
    }

    return this;
  }
}
