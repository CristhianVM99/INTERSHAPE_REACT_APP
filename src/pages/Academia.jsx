import Header4 from "../components/Common/Header4";
import Footer from "../components/Common/Footer";
import Banner from "../components/Elements/Banner";
import About2 from "../components/Elements/About2";
import {
  getInstitucion,
  getStaticDataAcademia,
  getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ConfigColorIcon from "../utils/ConfigColorIcon";

const Academia = () => {
  /* OBTENCION DE INFORMACION DEL STORE API */
  const { isLoading: loading_institucion, data: institucion } = useQuery({
    queryKey: ["institucion"],
    queryFn: getInstitucion,
  });

  /* OBTENCION DE INFORMACION DEL STORE IMAGES */
  const { isLoading: loading_images, data: images } = useQuery({
    queryKey: ["getStaticImages"],
    queryFn: getStaticImages,
  });

  /* OBTENCION DE INFORMACION DEL STORE STATICO */
  const { isLoading: loading_static_data, data: staticData } = useQuery({
    queryKey: ["staticDataAcademia"],
    queryFn: getStaticDataAcademia,
  });

  /* OBTENEMOS EL TIPO DE CATEGORIA */
  const { cat } = useParams();
  var categoria = null;

  if (cat === "PLANESTUDIO") {
    categoria = "PLAN DE ESTUDIO";
  } else {
    categoria = cat;
  }

  useEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    // Cargar scripts dinámicamente
    loadScript("/assets/js/custom.js");

    // Establecer colores si los datos están disponibles
    if (!loading_institucion) {
      ConfigColorIcon(institucion);
    }
  }, [loading_institucion, institucion]);

  if (!loading_static_data && !loading_images && !loading_institucion) {
    /* DATOS ESTATICOS */
    const { txt_content_banner_academia } = staticData;

    /* DATOS DE LA INSTITUCION */
    const { portada } = institucion;

    const indiceAleatorio = Math.floor(Math.random() * portada.length);
    const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
    const img = `${
      import.meta.env.VITE_APP_ROOT_API
    }/InstitucionUpea/Portada/${imagenSeleccionada}`;

    return (
      <>
        <Header4 />
        <div className="page-content">
          <Banner
            title={categoria}
            pagename={categoria}
            description={txt_content_banner_academia}
            bgimage={img ?? images.BgTwo}
          />
          <About2 tipo={cat} />
        </div>
        <Footer />
      </>
    );
  }
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */
export default Academia;
