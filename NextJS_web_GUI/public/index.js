root = document.documentElement

notHoveringAnyNBRI = () => { return Array.from(document.querySelectorAll(".navBarRightIconsChild:hover")).length == 0 }

addEventListener('mousemove', () => {
  if (notHoveringAnyNBRI()) {
    setTimeout(() => {
      if (notHoveringAnyNBRI()) {
        root.style.setProperty('--nbri-are-small', 1);
      }
    }, 200)
  } else {
    root.style.setProperty('--nbri-are-small', 0.8);
  }
});