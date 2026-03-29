function converter() {
            var decimal = Number(demo1.value);

            demo2.innerHTML = decimal.toString(8);
            demo3.innerHTML = decimal.toString(16);
            demo4.innerHTML = decimal.toString(2);
        }

(function () {
  const trailCount = 30;
  const trails = [];

  for (let i = 0; i < trailCount; i++) {
    const div = document.createElement('div');
    div.classList.add('trail');
    document.body.appendChild(div);
    trails.push({ el: div, x: 0, y: 0 });
  }

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    let x = mouseX;
    let y = mouseY;

    trails.forEach((trail, index) => {
      trail.x += (x - trail.x) * 0.3;
      trail.y += (y - trail.y) * 0.3;

      trail.el.style.left = trail.x + 'px';
      trail.el.style.top = trail.y + 'px';

      const scale = (trailCount - index) / trailCount;
      trail.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      trail.el.style.opacity = scale;

      x = trail.x;
      y = trail.y;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();