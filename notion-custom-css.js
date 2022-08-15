// ==UserScript==
// @name         notion-custom-css
// @namespace    https://shukapin.com/
// @version      0.1
// @description custom CSS for Notion
// @author       Shukapin
// @match      https://www.notion.so/*
// @grant        GM_log
// @grant        GM_addStyle
// ==/UserScript==

'use strict';
console.log('Loaded the user script');

(function() {
    // Define color code
    var dark_brown='#6b5353';
    var pale_brown='#edd6c9';
    var pale_yellow='#fff6b8';

    //Heading 1
    GM_addStyle(`.notion-header-block { background-color: ${dark_brown}; color: white; padding-left: 15px;}`);

    //Heading 2
    GM_addStyle(`.notion-sub_header-block { background-color: ${pale_brown}; color:${dark_brown};  padding-left: 15px;}`);

    //Heading 3
    GM_addStyle(`.notion-sub_sub_header-block {background: linear-gradient(transparent 70%, ${pale_yellow} 70%);  color:${dark_brown};  padding-left: 15px;}`);

    //上部のメニューバーのスタイル
    GM_addStyle(`.notion-topbar { background-color: ${pale_brown};}`);

    //Side menu
    GM_addStyle(`.notion-sidebar { background-color: ${pale_brown};}`);

    //Table of contents
    GM_addStyle(`.notion-table_of_contents-block { background-color: ${pale_yellow}; padding: 1em 1.2em 1em;}`);
    GM_addStyle(`.notion-table_of_contents-block .notion-focusable .notranslate:before { color: ${dark_brown}; content: "◆ ";`);
})();