import { useEffect } from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import { getInstitucion } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";

function Header4() {  

  /* INSTITUCION DATOS */
  const { isLoading: loading_institucion, data: institucion } = useQuery({
    queryKey: ["institucion"],
    queryFn: getInstitucion,
  });  
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const stickyheader = document.querySelector(".sticky-header");

      if (stickyheader) {
        if (offset >= 100) {
          stickyheader.classList.add("is-fixed");
          stickyheader.classList.add("color-fill");
        } else {
          stickyheader.classList.remove("is-fixed");
          stickyheader.classList.remove("color-fill");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!loading_institucion) {
    /* DAT0S DE LA INSTITUCION */
    const { institucion_logo } = institucion;

    return (
      <header className="site-header nav-wide nav-transparent mobile-sider-drawer-menu">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container clearfix">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <NavLink to={"/"}>
                    <img
                      width={70}
                      src={`${
                        import.meta.env.VITE_APP_ROOT_API
                      }/InstitucionUpea/${institucion_logo}`}
                      alt="Logo"
                    />
                  </NavLink>
                </div>
              </div>
              {/* NAV Toggle Button */}
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                className="navbar-toggler collapsed"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>
              {/* MAIN NAVIGATION */}
              <div className="header-nav nav-dark navbar-collapse collapse justify-content-center collapse">
                <Navigation></Navigation>
              </div>            
            </div>
          </div>
        </div>
      </header>
    );
  }
  return null;
}

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */
export default Header4;
