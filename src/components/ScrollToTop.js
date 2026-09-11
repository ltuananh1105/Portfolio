import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const previousPath = useRef(null);

  useEffect(() => {
    // Preserve incoming links to the former Home contact section.
    if (pathname === "/" && hash === "#contact") {
      navigate("/contact", { replace: true });
      return;
    }
    if (previousPath.current !== pathname) window.scrollTo(0, 0);
    previousPath.current = pathname;
  }, [pathname, hash, navigate]);

  return null;
}
