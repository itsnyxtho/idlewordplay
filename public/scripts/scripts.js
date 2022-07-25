/* Designer Changes */

let designCanvases = document.querySelectorAll('.pui-design-canvas');

let adjustCanvas = function () {
  let canvas = this;
  let container = canvas.children[0];
  let width = canvas.scrollWidth;
  let height = canvas.scrollHeight;
  console.log('scrolled...');
  container.style.width = width + 'px';
  container.style.height = height + 'px';
}

for (var canvas of designCanvases) {
  canvas.onscroll = adjustCanvas;
}