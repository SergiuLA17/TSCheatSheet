var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;

  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  } else this.parentNode.className = 'accordionItem close';
}
