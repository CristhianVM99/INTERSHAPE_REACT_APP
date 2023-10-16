import {
    getLinksInstExtAll,
    getStaticDataIndex,
} from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../../types/types";
import bgimg1 from "../../images/background/bg-12.jpg";
import bgimg2 from "../../images/background/cross-line2.png";
import SinRegistros from "../Common/SinRegistros";

const LinksExternos1 = () => {
    /* OBTENCION DE INFORMACON DE LINKS EXTERNOS */
    const { isLoading: loading_links_externos, data: links } = useQuery({
        queryKey: ["links_externos"],
        queryFn: getLinksInstExtAll,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    if (!loading_links_externos && !loading_static_data) {
        /* OBTENCION DE LINKS EXTERNOS Y FILTRACION SEGUN KARDEX */
        const { txt_content_links_externos, txt_content_links_btn } =
            staticData;
        const links_filter = links.filter((e) => e.ei_tipo === TIPOS.KARDEX);

        return (
            <>
                <div
                    className="section-full mobile-page-padding bg-gray  p-t80 p-b10 bg-repeat"
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
                                        {txt_content_links_externos}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {links_filter.length > 0 ? (
                            <div className="section-content">
                                <div className="client-grid m-b40">
                                    <div className="row justify-content-center">
                                        {links_filter.map((item, index) => (
                                            <div
                                                className="col-lg-3 col-md-4 col-sm-6 col-6 m-b30"
                                                key={index}
                                            >
                                                <a
                                                    href={item.ei_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="client-logo-pic"
                                                >
                                                    <img
                                                        src={`${
                                                            import.meta.env
                                                                .VITE_APP_ROOT_API
                                                        }/InstitucionUpea/LinksExternos/${
                                                            item.ei_imagen
                                                        }`}
                                                        alt={item.ei_nombre}
                                                        style={{
                                                            height: "150px",
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                    />
                                                    <div>
                                                        <span>
                                                            {
                                                                txt_content_links_btn
                                                            }
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <SinRegistros />
                        )}
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Enlaces</strong>
                    </div>
                </div>
            </>
        );
    }
    return null;
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */

export default LinksExternos1;
