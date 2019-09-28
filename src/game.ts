const canvas = document.createElement('canvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

(document.querySelector('#container') as Element).appendChild(canvas);

let dt = 0;
let last = performance.now();


function frame(hrt: DOMHighResTimeStamp) {
  requestAnimationFrame(frame);

  dt = (hrt - last) / 1000;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(hrt / 1000);
  ctx.fillStyle = 'white';

  ctx.fillRect(
    -8, -8, 16, 16
  );

  ctx.setTransform(1, 0, 0, 1, 0, 0);

  last = hrt;
}

requestAnimationFrame(frame);
