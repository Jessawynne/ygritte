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
const dataSearchTextField = new MDCTextField(document.querySelector('.grid-data-card-search__text-field'));

import {MDCTextFieldIcon} from '@material/textfield/icon';

const searchIcon = new MDCTextFieldIcon(document.querySelector('.grid-card-search__icon'));
const dataSearchIcon = new MDCTextFieldIcon(document.querySelector('.grid-data-card-search__icon'));

import {MDCSelect} from '@material/select';

const headerRowSelect = new MDCSelect(document.querySelector('.grid-data-card__header-select'));
const footerRowSelect = new MDCSelect(document.querySelector('.grid-data-card__footer-select'));

import {MDCMenu} from '@material/menu';

const headerRowMenu = new MDCMenu(document.querySelector('.grid-data-card__header-menu'));
const footerRowMenu = new MDCMenu(document.querySelector('.grid-data-card__footer-menu'));
