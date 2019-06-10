import {MDCList} from "@material/list";
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

import {MDCDrawer} from "@material/drawer";

import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiate MDC Drawer
const drawerEl = document.querySelector('.mdc-drawer');
const drawer = new MDCDrawer.attachTo(drawerEl);

// Instantiate MDC Top App Bar (required)
const topAppBarEl = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar.attachTo(topAppBarEl);

topAppBar.setScrollTarget(document.querySelector('.main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});