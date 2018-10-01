import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';

var mobileMenu=new MobileMenu();
new RevealOnScroll('.feature__item','bottom-in-view');
new RevealOnScroll('.testimonials','100%');
