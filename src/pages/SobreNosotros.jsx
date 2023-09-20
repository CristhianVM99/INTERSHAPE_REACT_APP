import { useEffect } from "react";
import Header4 from "../components/Common/Header4";
import Footer from "../components/Common/Footer";
import Banner from "../components/Elements/Banner";
import Autoridades1 from "../components/Elements/Autoridades1";
import LinksExternos1 from "../components/Elements/LinksExternos1";
import {
  getInstitucion,
  getStaticDataAbout,
  getStaticImages,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import loadScript from "../utils/LoadScripts";
import ConfigColorIcon from "../utils/ConfigColorIcon";
import RandomImage from "../utils/RandomImage";
import InformacionInstitucion from "../components/Elements/InformacionInstitucion";

const SobreNosotros = () => {
  /* OBTENCION DE INFORMACION DEL STORE API */
  const { isLoading: loading_institucion, data: institucion } = useQuery({
    queryKey: ["institucion"],
    queryFn: getInstitucion,
  });

  /* OBTENCION DE INFORMACION DEL STORE STATICO */
  const { isLoading: loading_static_data, data: staticData } = useQuery({
    queryKey: ["staticDataAbout"],
    queryFn: getStaticDataAbout,
  });

  /* OBTENCION DE INFORMACION DEL STORE IMAGES */
  const { isLoading: loading_images, data: images } = useQuery({
    queryKey: ["getStaticImages"],
    queryFn: getStaticImages,
  });

  useEffect(() => {
    loadScript("./assets/js/custom.js");

    // Establecer colores si los datos están disponibles
    if (!loading_institucion) {
      ConfigColorIcon(institucion);
    }
  }, [loading_institucion, institucion]);

  if (!loading_static_data && !loading_images && !loading_institucion) {
    /* DATOS DE LA INSTITUCION */
    const { portada } = institucion;

    /* IMAGEN ALEATORIA */
    const img = RandomImage(portada);

    /* DATOS ESTATICOS */
    const { txt_content_about, txt_content_banner_about } = staticData;

    return (
      <>
        <Header4 />
        <div className="page-content">
          <Banner
            title={txt_content_about}
            pagename={txt_content_about}
            description={txt_content_banner_about}
            bgimage={img ?? images.BgThree}
          />
          <InformacionInstitucion />
          <Autoridades1 />
          <LinksExternos1 />
        </div>
        <Footer />
      </>
    );
  }
  return null;
};

export default SobreNosotros;
