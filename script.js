document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      window.scrollBy(0, 100); // Прокрутка вниз
    } else {
      window.scrollBy(0, -100); // Прокрутка вверх
    }
  });