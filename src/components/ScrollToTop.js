import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(null);
  useEffect(() => {
    const pathChanged = previousPath.current !== pathname;
    previousPath.current = pathname;
    if (pathname !== "/" || hash !== "#contact") {
      if (pathChanged) window.scrollTo(0, 0);
      return;
    }

    let frame;
    const scrollToContact = () => {
      frame = requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        });
      });
    };
    // Initial visits must wait for the existing preloader's scroll lock to clear.
    const lockedApp = document.getElementById("no-scroll");
    const observer = lockedApp ? new MutationObserver(() => {
      if (lockedApp.id !== "no-scroll") { observer.disconnect(); scrollToContact(); }
    }) : null;
    if (observer) observer.observe(lockedApp, { attributes: true, attributeFilter: ["id"] });
    else scrollToContact();
    return () => { observer?.disconnect(); cancelAnimationFrame(frame); };
  }, [pathname, hash, key]);
  return null;
}

export default ScrollToTop;
