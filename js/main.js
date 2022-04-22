import Accordion from "./modules/accordion-list.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import fetchAnimals from "./modules/fetchAnimals.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import MenuMobile from "./modules/menu-mobile.js";
import Modal from "./modules/modal.js";
import Operation from "./modules/operation.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import ScrollSuave from "./modules/scroll-suave.js";
import scrollToTop from "./modules/scroll-top.js";
import TabNav from "./modules/tab-nav.js";
import Tooltip from "./modules/tooltip.js";
import { SlideNav } from "./modules/slide.js";

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

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]');
scrollAnimation.init();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="list"]', '[data-menu="button"]');
menuMobile.init();

const operation = new Operation("[data-semana]");
operation.init();

scrollToTop();
fetchAnimals();
fetchBitcoin();

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addControlEvent(".customControl");
