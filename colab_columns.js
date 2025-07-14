(function() {
  const applySideBySide = () => {
    if (document.body) {
      document.body.classList.add('clbclmns');
    }
  };

  if (document.readyState === 'complete') {
    applySideBySide();
  } else {
    window.addEventListener('load', applySideBySide);
  }
})();
