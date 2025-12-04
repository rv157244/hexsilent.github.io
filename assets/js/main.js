(function(){
function initTerminal(){
const btn = document.getElementById('toggleVariant')
const term = document.getElementById('terminalCard');
const typeEl = term ? term.querySelector('.type') : null;
let active = false;



const allowed = /^[a-zA-Z0-9\s\-_.\,→\u2192]+$/; 
