import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This resets the window scroll to the very top (0,0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]); // Fires every time the URL path changes

  return null;
}