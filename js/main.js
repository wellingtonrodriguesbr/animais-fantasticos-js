import Accordion from "./modules/accordion-list.js";
import dropDownMenu from "./modules/dropdown-menu.js";
import fetchAnimals from "./modules/fetchAnimals.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import menuMobile from "./modules/menu-mobile.js";
import Modal from "./modules/modal.js";
import operation from "./modules/operation.js";
import scrollAnimation from "./modules/scroll-animation.js";
import ScrollSuave from "./modules/scroll-suave.js";
import scrollToTop from "./modules/scroll-top.js";
import TabNav from "./modules/tab-nav.js";
import Tooltip from "./modules/tooltip.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordionList = new Accordion('[data-anime="scroll"] dt');
accordionList.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

setTimeout(() => {
  modal.toggleModal();
}, 5000);

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

scrollToTop();
dropDownMenu();
menuMobile();
scrollAnimation();
fetchAnimals();
fetchBitcoin();
operation();
