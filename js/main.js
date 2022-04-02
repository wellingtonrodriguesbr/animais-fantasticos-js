import Accordion from "./modules/accordion-list.js";
import dropDownMenu from "./modules/dropdown-menu.js";
import fetchAnimals from "./modules/fetchAnimals.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import menuMobile from "./modules/menu-mobile.js";
import modal from "./modules/modal.js";
import operation from "./modules/operation.js";
import scrollAnimation from "./modules/scroll-animation.js";
import ScrollSuave from "./modules/scroll-suave.js";
import scrollToTop from "./modules/scroll-top.js";
import tabNav from "./modules/tab-nav.js";
import tooltip from "./modules/tooltip.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordionList = new Accordion('[data-anime="scroll"] dt');
accordionList.init();

scrollToTop();
dropDownMenu();
menuMobile();
modal();
scrollAnimation();
tabNav();
tooltip();
fetchAnimals();
fetchBitcoin();
operation();
