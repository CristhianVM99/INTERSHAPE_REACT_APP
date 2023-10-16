import { getStaticDataIndex } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import bgimg1 from "../../images/background/cross-line2.png";
import PropTypes from "prop-types";

const Team2 = ({ institucion = null }) => {
    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    if (institucion && !loading_static_data) {
        /* INFORMACION DE LA INSTITUCION */
        const { autoridad } = institucion;

        /* INFORMACION ESTATICA */
        const { txt_content_autoridades } = staticData;

        return (
            <>
                <div className="page-content">
                    {/* OUR EXPERTS SECTION START */}
                    {/* TITLE START */}
                    <div className="section-head">
                        <div className="sx-separator-outer separator-center">
                            <div
                                className="sx-separator bg-white bg-moving bg-repeat-x"
                                style={{
                                    backgroundImage: "url(" + bgimg1 + ")",
                                }}
                            >
                                <h3 className="sep-line-one">
                                    {txt_content_autoridades}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="section-full p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* IMAGE CAROUSEL START */}
                            <div className="section-content">
                                <div className="row">
                                    {autoridad.map((item, index) => (
                                        <div
                                            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 m-b30"
                                            key={index}
                                        >
                                            <div className="our-team-3">
                                                <div className="our-team-info">
                                                    <img
                                                        style={{
                                                            height: "400px",
                                                            width: "100%",
                                                            objectFit: "cover",
                                                            objectPosition:
                                                                "top",
                                                        }}
                                                        src={`${
                                                            import.meta.env
                                                                .VITE_APP_ROOT_API
                                                        }/InstitucionUpea/Autoridad/${
                                                            item.foto_autoridad
                                                        }`}
                                                        alt=""
                                                    />
                                                    <div className="our-team-content">
                                                        <h4
                                                            className="sx-team-name"
                                                            style={{
                                                                color: "var(--color-primario)",
                                                            }}
                                                        >
                                                            {
                                                                item.nombre_autoridad
                                                            }
                                                        </h4>
                                                        <span className="sx-team-position text-white">
                                                            {
                                                                item.cargo_autoridad
                                                            }
                                                        </span>
                                                        <p>
                                                            <a
                                                                href={
                                                                    item.facebook_autoridad
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <i className="fa fa-facebook" />
                                                            </a>
                                                            <a
                                                                href={
                                                                    item.twiter_autoridad
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {" "}
                                                                <i className="fa fa-twitter" />
                                                            </a>
                                                            <a
                                                                href={
                                                                    item.celular_autoridad
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {" "}
                                                                <i className="fa fa-whatsapp" />
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR EXPERTS SECTION END */}
                </div>
            </>
        );
    }
};

Team2.propTypes = {
    institucion: PropTypes.object,
};

export default Team2;
