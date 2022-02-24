export default function operation() {
  const operation = document.querySelector("[data-semana]");
  const days = operation.dataset.semana.split(",").map(Number);
  const hours = operation.dataset.horario.split(",").map(Number);

  const dateNow = new Date();
  const day = dateNow.getDay();
  const hour = dateNow.getHours();

  const open = days.indexOf(day) !== -1;
  const openHour = hour >= hours[0] && hour < hours[1];

  if (open && openHour) {
    operation.classList.add("open");
  }
}
