export default class Operation {
  constructor(operation) {
    this.operation = document.querySelector(operation);
    this.activeClass = "open";
  }

  dataOperation() {
    this.days = this.operation.dataset.semana.split(",").map(Number);
    this.hours = this.operation.dataset.horario.split(",").map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.day = this.dateNow.getDay();
    this.hour = this.dateNow.getUTCHours() - 3;
  }

  open() {
    const openWeek = this.days.indexOf(this.day) !== -1;
    const openHour = this.hour >= this.hours[0] && this.hour < this.hours[1];

    return openWeek && openHour;
  }

  openActive() {
    if (this.open()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.dataOperation();
      this.dataNow();
      this.openActive();
    }

    return this;
  }
}
