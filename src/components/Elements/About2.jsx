import PropTypes from "prop-types";
import { useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
    getGacetas,
    getStaticDataAcademia,
    getStaticImages,
} from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../../types/types";
import SinRegistros from "../Common/SinRegistros";

const About2 = ({ tipo, institucion = null }) => {
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    });

    /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
    const { isLoading: loading_gacetas, data: gacetas } = useQuery({
        queryKey: ["gacetas"],
        queryFn: getGacetas,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataAcademia"],
        queryFn: getStaticDataAcademia,
    });

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    if (
        institucion &&
        !loading_gacetas &&
        !loading_static_data &&
        tipo !== TIPOS.REGLAMENTO
    ) {
        /* DATOS ESTATICOS */
        const {
            txt_content_btn,
            txt_content_calendario,
            txt_content_horario,
            txt_content_plan_de_estudio,
        } = staticData;

        var item = null;
        var content = "";

        if (tipo === TIPOS.CALENDARIO) {
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */
            item = gacetas.find((e) =>
                e.gaceta_titulo.includes(TIPOS.CALENDARIO)
            );
            content = txt_content_calendario;
        }
        if (tipo === TIPOS.HORARIO) {
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */
            item = gacetas.find((e) => e.gaceta_titulo.includes(TIPOS.HORARIO));
            content = txt_content_horario;
        }
        if (tipo === TIPOS.PLANESTUDIO) {
            /* OBTENEMOS EL CALENDARIO DE LA INSTITUCION */
            item = gacetas.find((e) => e.gaceta_titulo.includes(TIPOS.PLAN));
            content = txt_content_plan_de_estudio;
        }

        return (
            <>
                {item !== undefined ? (
                    <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12 ">
                                        <Document
                                            file={`${
                                                import.meta.env
                                                    .VITE_APP_ROOT_API
                                            }/Gaceta/${item.gaceta_documento}`}
                                        >
                                            <Page pageNumber={1} width={400} />
                                        </Document>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2">
                                            <h3 className="m-t0 sx-tilte">
                                                {item.gaceta_titulo}
                                            </h3>
                                            <p>{content}</p>
                                            <div className="text-left">
                                                <a
                                                    href={`${
                                                        import.meta.env
                                                            .VITE_APP_ROOT_API
                                                    }/Gaceta/${
                                                        item.gaceta_documento
                                                    }`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="site-button-link"
                                                >
                                                    {txt_content_btn}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <SinRegistros />
                )}
            </>
        );
    }

    if (
        institucion &&
        !loading_static_data &&
        !loading_images &&
        tipo === TIPOS.REGLAMENTO
    ) {
        /* DATOS DE LA INSTITUCION */
        const { institucion_sobre_ins, portada } = institucion;

        /* DATOS ESTATICOS */
        const { txt_content_reglamento } = staticData;

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${
            import.meta.env.VITE_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 ">
                                    <div
                                        className="home-2-about bg-bottom-left bg-no-repeat bg-cover"
                                        style={{
                                            backgroundImage:
                                                "url(" + img ??
                                                images.BgThree + ")",
                                        }}
                                    ></div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-12">
                                    <div className="about-home-2">
                                        <h3 className="m-t0 sx-tilte">
                                            {txt_content_reglamento}
                                        </h3>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: institucion_sobre_ins,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return null;
};

About2.propTypes = {
    tipo: PropTypes.string, // Ajusta el tipo según lo que esperas
    institucion: PropTypes.object,
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */
export default About2;
