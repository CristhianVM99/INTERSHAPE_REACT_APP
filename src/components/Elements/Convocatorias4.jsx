import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
    getConvocatorias,
    getCursos,
    getStaticDataIndex,
    getStaticImages,
} from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../../types/types";
import bgimg1 from "../../images/background/bg-4.png";
import bgimg2 from "../../images/background/cross-line2.png";
import sinRegistros from "../Common/SinRegistros";
import { AES } from "crypto-js";

const Convocatorias4 = ({ tipo, institucion = null }) => {
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    /* OBTENCION DE INFORMACION DEL STORE CONVOCATORIAS */
    const { isLoading: loading_convocatorias, data: convocatorias } = useQuery({
        queryKey: ["convocatorias"],
        queryFn: getConvocatorias,
    });

    /* OBTENCION DE INFORMACION DEL STORE CURSO */
    const { isLoading: loading_cursos, data: cursos } = useQuery({
        queryKey: ["cursos"],
        queryFn: getCursos,
    });

    const options = {
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            991: {
                items: 1,
            },
        },
    };

    const encryptId = (data) => {
        const encryptedData = AES.encrypt(
            JSON.stringify(data),
            import.meta.env.VITE_APP_ENCRYPT
        ).toString();
        return encodeURIComponent(encryptedData); // Codifica el resultado antes de usarlo en una URL
    };

    if (
        institucion &&
        !loading_static_data &&
        !loading_images &&
        !loading_convocatorias &&
        tipo === TIPOS.CONVOCATORIAS
    ) {
        const {
            txt_content_convocatorias,
            txt_content_texto,
            txt_content_btn,
        } = staticData;

        const { institucion_nombre, portada } = institucion;

        /* FILTRADO DE LOS ULTIMOS COMUNICADOS, CONVOCATORIAS Y AVISOS QUE TIENE LA INSTITUCION. */
        const filteredDataComunicados = convocatorias.filter(
            (e) =>
                e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS
        );
        const lastComunicado =
            filteredDataComunicados[filteredDataComunicados.length - 1];

        const filteredDataConvocatorias = convocatorias.filter(
            (e) =>
                e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS
        );
        const lastConvocatoria =
            filteredDataConvocatorias[filteredDataConvocatorias.length - 1];

        const filteredDataAvisos = convocatorias.filter(
            (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS
        );
        const lastAviso = filteredDataAvisos[filteredDataAvisos.length - 1];

        /* ARRAY CON LOS ULTIMOS COMUNICADOS, CONVOCATORIAS Y AVISOS FILTRADOS */
        const ConvocatoriasAndComunicadosAndAvisos = [
            lastConvocatoria,
            lastComunicado,
            lastAviso,
        ].filter((item) => item !== undefined);

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${
            import.meta.env.VITE_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <div
                    className="section-full mobile-page-padding p-t80 p-b80 bg-white bg-no-repeat bg-bottom-left"
                    style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                >
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div
                                    className="sx-separator bg-white bg-moving bg-repeat-x"
                                    style={{
                                        backgroundImage: "url(" + bgimg2 + ")",
                                    }}
                                >
                                    <h3 className="sep-line-one">
                                        {txt_content_convocatorias}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="about-home-left">
                                        <h3 className="m-t0 sx-tilte">
                                            {institucion_nombre}
                                        </h3>
                                        <p>{txt_content_texto}</p>
                                        <div className="text-left">
                                            <NavLink
                                                to="/sobreNosotros"
                                                className="site-button-secondry btn-half"
                                            >
                                                <span>{txt_content_btn}</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {ConvocatoriasAndComunicadosAndAvisos.length >
                                0 ? (
                                    <div className="col-lg-7 col-md-12 col-sm-12">
                                        <div className="about-home-right">
                                            <OwlCarousel
                                                className="owl-carousel about-home number-slider owl-btn-vertical-center"
                                                {...options}
                                            >
                                                {ConvocatoriasAndComunicadosAndAvisos.map(
                                                    (item, index) => (
                                                        <NavLink
                                                            key={index}
                                                            to={`/detalle/${
                                                                item
                                                                    .tipo_conv_comun
                                                                    .tipo_conv_comun_titulo
                                                            }/${encryptId(
                                                                item.idconvocatorias
                                                            )}`}
                                                        >
                                                            <div
                                                                className="item"
                                                                key={index}
                                                            >
                                                                <div className="sx-img-effect zoom-slow">
                                                                    <img
                                                                        style={{
                                                                            objectFit:
                                                                                "cover",
                                                                            width: "100%",
                                                                            height: "450px",
                                                                        }}
                                                                        src={`${
                                                                            import.meta
                                                                                .env
                                                                                .VITE_APP_ROOT_API
                                                                        }/Convocatorias/${
                                                                            item.con_foto_portada
                                                                        }`}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        padding:
                                                                            "20px",
                                                                        fontSize:
                                                                            "1.2em",
                                                                        background:
                                                                            "var(--color-secundario)",
                                                                        color: "#fff",
                                                                        borderBottomLeftRadius:
                                                                            "20px",
                                                                        borderBottomRightRadius:
                                                                            "20px",
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            display:
                                                                                "block",
                                                                            textAlign:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        {
                                                                            item.con_titulo
                                                                        }
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </NavLink>
                                                    )
                                                )}
                                            </OwlCarousel>
                                            <div className="about-home-before">
                                                <img
                                                    style={{
                                                        objectFit: "cover",
                                                        width: "100%",
                                                        height: "450px",
                                                    }}
                                                    src={img ?? images.BgOne}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    sinRegistros
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (
        institucion &&
        !loading_static_data &&
        !loading_images &&
        !loading_cursos &&
        tipo === TIPOS.CURSOS
    ) {
        const { txt_content_cursos, txt_content_texto, txt_content_btn } =
            staticData;

        const { institucion_nombre, portada } = institucion;

        /* FILTRADO DE LOS ULTIMOS CURSOS Y SEMINARIOS. */
        const filteredDataCursos = cursos.filter(
            (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS
        );
        const lastCurso = filteredDataCursos[filteredDataCursos.length - 1];

        const filteredDataSeminarios = cursos.filter(
            (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS
        );
        const lastSeminario =
            filteredDataSeminarios[filteredDataSeminarios.length - 1];

        /* ARRAY CON LOS ULTIMOS CURSOS Y SEMINARIOS FILTRADOS */
        const CursosAndSeminarios = [lastCurso, lastSeminario].filter(
            (item) => item !== undefined
        );

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${
            import.meta.env.VITE_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <div
                    className="section-full mobile-page-padding p-t80 p-b80 bg-white bg-no-repeat bg-bottom-left"
                    style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                >
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div
                                    className="sx-separator bg-white bg-moving bg-repeat-x"
                                    style={{
                                        backgroundImage: "url(" + bgimg2 + ")",
                                    }}
                                >
                                    <h3 className="sep-line-one">
                                        {txt_content_cursos}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="about-home-left">
                                        <h3 className="m-t0 sx-tilte">
                                            {institucion_nombre}
                                        </h3>
                                        <p>{txt_content_texto}</p>
                                        <div className="text-left">
                                            <NavLink
                                                to="/contacto"
                                                className="site-button-secondry btn-half"
                                            >
                                                <span>{txt_content_btn}</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {CursosAndSeminarios.length > 0 ? (
                                    <div className="col-lg-7 col-md-12 col-sm-12">
                                        <div className="about-home-right">
                                            <OwlCarousel
                                                className="owl-carousel about-home number-slider owl-btn-vertical-center"
                                                {...options}
                                            >
                                                {CursosAndSeminarios.map(
                                                    (item, index) => (
                                                        <NavLink
                                                            key={index}
                                                            to={`/detalle/${
                                                                item
                                                                    .tipo_curso_otro
                                                                    .tipo_conv_curso_nombre
                                                            }/${encryptId(
                                                                item.iddetalle_cursos_academicos
                                                            )}`}
                                                        >
                                                            <div
                                                                className="item"
                                                                key={index}
                                                            >
                                                                <div className="sx-img-effect zoom-slow">
                                                                    <img
                                                                        style={{
                                                                            objectFit:
                                                                                "cover",
                                                                            width: "100%",
                                                                            height: "450px",
                                                                        }}
                                                                        src={`${
                                                                            import.meta
                                                                                .env
                                                                                .VITE_APP_ROOT_API
                                                                        }/Cursos/${
                                                                            item.det_img_portada
                                                                        }`}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        padding:
                                                                            "20px",
                                                                        fontSize:
                                                                            "1.2em",
                                                                        background:
                                                                            "var(--color-secundario)",
                                                                        color: "#fff",
                                                                        borderBottomLeftRadius:
                                                                            "20px",
                                                                        borderBottomRightRadius:
                                                                            "20px",
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            display:
                                                                                "block",
                                                                            textAlign:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        {
                                                                            item.det_titulo
                                                                        }
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </NavLink>
                                                    )
                                                )}
                                            </OwlCarousel>
                                            <div className="about-home-before">
                                                <img
                                                    style={{
                                                        objectFit: "cover",
                                                        width: "100%",
                                                        height: "450px",
                                                    }}
                                                    src={img ?? images.BgOne}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    sinRegistros
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return null;
};

Convocatorias4.propTypes = {
    tipo: PropTypes.string, // Ajusta el tipo según lo que esperas
    institucion: PropTypes.object,
};

export default Convocatorias4;
