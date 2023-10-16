import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { getStaticImages } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import RandomImage from "../../utils/RandomImage";
import PropTypes from "prop-types";

const InformacionInstitucion = ({ institucion = null }) => {
    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    if (institucion && !loading_images) {
        const {
            institucion_mision,
            institucion_vision,
            institucion_objetivos,
            institucion_historia,
            institucion_nombre,
            institucion_link_video_vision,
            institucion_iniciales,
            portada,
        } = institucion;

        const img = RandomImage(portada);

        return (
            <>
                <div
                    className={`bg-gray section-full mobile-page-padding p-t80 p-b50`}
                >
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-home-3 m-b30 bg-white">
                                        <h3 className="m-t0 m-b20 sx-tilte">
                                            {institucion_nombre}
                                        </h3>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: institucion_historia,
                                            }}
                                        ></div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                {/* Accordian */}
                                                <div
                                                    className="sx-accordion acc-bg-gray"
                                                    id="accordion5"
                                                >
                                                    <div className="panel sx-panel">
                                                        <div className="acod-head acc-actives">
                                                            <h4 className="acod-title">
                                                                <a
                                                                    data-toggle="collapse"
                                                                    href="#collapseOne5"
                                                                    data-parent="#accordion5"
                                                                >
                                                                    Misión
                                                                    <span className="indicator">
                                                                        <i className="fa fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div
                                                            id="collapseOne5"
                                                            className="acod-body collapse show"
                                                        >
                                                            <div className="acod-content p-a15">
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: institucion_mision,
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="panel sx-panel">
                                                        <div className="acod-head">
                                                            <h4 className="acod-title">
                                                                <a
                                                                    data-toggle="collapse"
                                                                    href="#collapseTwo5"
                                                                    className="collapsed"
                                                                    data-parent="#accordion5"
                                                                >
                                                                    Visión
                                                                    <span className="indicator">
                                                                        <i className="fa fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div
                                                            id="collapseTwo5"
                                                            className="acod-body collapse"
                                                        >
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: institucion_vision,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="panel sx-panel">
                                                        <div className="acod-head">
                                                            <h4 className="acod-title">
                                                                <a
                                                                    data-toggle="collapse"
                                                                    href="#collapseThree5"
                                                                    className="collapsed"
                                                                    data-parent="#accordion5"
                                                                >
                                                                    Objetivos
                                                                    <span className="indicator">
                                                                        <i className="fa fa-plus" />
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div
                                                            id="collapseThree5"
                                                            className="acod-body collapse"
                                                        >
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: institucion_objetivos,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <ul className="list-angle-right anchor-line">
                                            <li>
                                                <NavLink to="/academia?tipo=calendario">
                                                    Calendario Academico
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/academia?tipo=horario">
                                                    Calendario Académico
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/academia?tipo=planEstudio">
                                                    Plan de Estudio
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/academia?tipo=reglamento">
                                                    Reglamento y Mod. De
                                                    graduación
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="video-section-full-v2">
                                        <div
                                            className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30"
                                            style={{
                                                backgroundImage:
                                                    "url(" + img ??
                                                    images.BgOne + ")",
                                            }}
                                        >
                                            <div className="overlay-main bg-black opacity-04" />
                                            <div className="video-section-inner">
                                                <div className="video-section-content">
                                                    <NavLink
                                                        to={"#"}
                                                        className="play-now"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                    >
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>

                                                    <div className="video-section-bottom">
                                                        <h3 className="sx-title text-white">
                                                            {
                                                                institucion_iniciales
                                                            }
                                                            <br />
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer
                                url={institucion_link_video_vision}
                                config={{
                                    youtube: {
                                        playerVars: {
                                            origin: "http://127.0.0.1:5173",
                                            // Otras opciones específicas de YouTube, por ejemplo:
                                            autoplay: 0,
                                            controls: 1,
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

InformacionInstitucion.propTypes = {
    institucion: PropTypes.object,
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */

export default InformacionInstitucion;
