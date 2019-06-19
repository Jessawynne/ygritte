// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
//
import css from "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

// import header from "./header"
// import drawer from "./drawer"
// import dismissibleDrawer from "./dismissible-drawer"
// import modalDrawer from "./modal-drawer"
// import staticDrawer from "./static-drawer"

import {MDCTextField} from '@material/textfield';

const searchTextField = new MDCTextField(document.querySelector('.grid-card-search__text-field'));
// const searchTextField = new MDCTextField(document.querySelector('.search__text-field'));
// const goToTextField = new MDCTextField(document.querySelector('.goto-text-field'));

import {MDCTextFieldIcon} from '@material/textfield/icon';

const icon = new MDCTextFieldIcon(document.querySelector('.grid-card-search__icon'));
// const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field__icon'));

// import {MDCLineRipple} from '@material/line-ripple';

// const lineRipple = new MDCLineRipple(document.querySelector('.mdc-line-ripple'));

// import {MDCSelect} from '@material/select';

// const select = new MDCSelect(document.querySelector('.mdc-select'));

// import {MDCMenu} from '@material/menu';

// const menu = new MDCMenu(document.querySelector('.mdc-menu'));
// menu.open = true;