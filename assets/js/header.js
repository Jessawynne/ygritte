// From MDC Top App Bar

import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// From MDC Menu 
import {MDCMenu} from '@material/menu';

// Instantiation of Notification Menu
const notificationMenu = new MDCMenu(document.querySelector('.mdc-menu'));
notificationMenu.open = false;

topAppBar.setScrollTarget(document.querySelector('.main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  notificationMenu.open = !notificationMenu.open;
});

// From MDC Lists 
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';

const list = new MDCList(document.querySelector('.mdc-list'));
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
list.wrapFocus = true;
