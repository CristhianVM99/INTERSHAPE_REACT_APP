import { useEffect } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import { getInstitucion } from '../../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

function Header3() {

     /* OBTENCION DE INFORMACION DEL STORE API */
     const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })     

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');
            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        };

        window.addEventListener('scroll', handleScroll);        

        return () => {
            // Limpia el evento del manejador de scroll cuando el componente se desmonta
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if(!loading_institucion){
        /* DATOS DE LA INSTITUCION */
        const {
            institucion_logo,            
            institucion_facebook,
            institucion_youtube,
            institucion_twitter,
        } = institucion

        return (
            <>
                <header className="site-header header-style-3 nav-wide header-fixed mobile-sider-drawer-menu">
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar bg-white">
                            <div className="container-fluid clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img width={70} src={`${import.meta.env.VITE_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`} alt="Inteshape" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                {/* EXTRA NAV */}
                                <div className="extra-nav">                                    
                                    <div className="extra-cell">
                                        <ul className="list-unstyled social-bx text-black d-flex flex-wrap align-content-center">
                                            <li><a href={institucion_facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>                                                                    
                                            <li><a href={institucion_twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>                                                                    
                                            <li><a href={institucion_youtube} target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* EXTRA Nav */}
                                {/* MAIN NAVIGATION */}
                                <div className="header-nav navbar-collapse collapse justify-content-center collapse">
                                    <Navigation />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </header>


            </>
        );
    }
}

export default Header3;

