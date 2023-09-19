import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa desde react-router-dom

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
