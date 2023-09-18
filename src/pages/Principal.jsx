import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Slider1 from "../components/Elements/Slider1";
import Autoridades1 from "../components/Elements/Autoridades1";
import Autoridades2 from "../components/Elements/Autoridades2";
import Categorias1 from "../components/Elements/Categorias1";
import Convocatorias1 from "../components/Elements/Convocatorias1";
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1";
import LinksExternos1 from "../components/Elements/LinksExternos1";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getInstitucion } from "../api/institucionAPI";
import { TIPOS } from "../types/types";
import ConfigColorIcon from "../utils/ConfigColorIcon";
import Header2 from "../components/Common/Header2";
import Slider2 from "../components/Elements/Slider2";
import Convocatorias2 from "../components/Elements/Convocatorias2";
import Categorias2 from "../components/Elements/Categorias2";
import Footer2 from "../components/Common/Footer2";
import Header3 from "../components/Common/Header3";
import Slider3 from "../components/Elements/Slider3";
import Autoridades3 from "../components/Elements/Autoridades3"
import Categorias3 from "../components/Elements/Categorias3";
import Convocatorias3 from "../components/Elements/Convocatorias3";
import Footer3 from "../components/Common/Footer3";
import Slider4 from "../components/Elements/Slider4";
import LinksExternos2 from "../components/Elements/LinksExternos2";
import Convocatorias4 from "../components/Elements/Convocatorias4";
import Categorias4 from "../components/Elements/Categorias4";

const Principal = () => {

  /* OBTENCION DE INFORMACION DEL STORE API */
  const { isLoading: loading_institucion, data: institucion } = useQuery({
    queryKey: ["institucion"],
    queryFn: getInstitucion,
  });

  useEffect(() => {
    if (!loading_institucion) {
      /* CONFIGURACION DE COLOR E ICON */
      ConfigColorIcon(institucion);
    }
  }, [loading_institucion, institucion]);

  /* CONFIGURACION DE INDEX */
  const index1 = import.meta.env.VITE_INDEX_1 === "true";
  const index2 = import.meta.env.VITE_INDEX_2 === "true";
  const index3 = import.meta.env.VITE_INDEX_3 === "true";
  const index4 = import.meta.env.VITE_INDEX_4 === "true";  

  // Utiliza sjcl para encriptar o descifrar datos  
  
  return (
    <>
      {/* INDEX 1 */}
      {index1 && (
        <div>
          <Header />
          <div className="page-content">
            {/* COMPONENTE => BANNER */}
            <Slider1 />

            {/* COMPONENTE => AUTORIDADES */}
            <Autoridades1 />

            {/* COMPONENTE => CATEGORIAS */}
            <Categorias1 />

            {/* COMPONENTE  => CONVOCATORIAS */}
            <Convocatorias1 tipo={TIPOS.CONVOCATORIAS} />

            {/* COMPONENTE => PLAN DE ESTUDIOS  */}
            <PlanDeEstudios1 />

            {/* COMPONENTE => CURSOS */}
            <Convocatorias1 tipo={TIPOS.CURSOS} />

            {/* COMPONENTE => LINK-EXTERNOS */}
            <LinksExternos1 />
          </div>
          <Footer />
        </div>
      )}

      {/* INDEX 2 */}
      {index2 && <div>
          <Header2 />
          <div className="page-content">
              <Slider2 />           

              {/* COMPONENTE => AUTORIDADES */}
              <Autoridades2 separatoralignment="separator-center" />
  
              {/* COMPONENTE  => CONVOCATORIAS */}
              <Convocatorias2 tipo={TIPOS.CONVOCATORIAS}/>                                                             

              {/* COMPONENTE => CATEGORIAS */}
              <Categorias2 />     

              {/* COMPONENTE => CURSOS */}
              <Convocatorias2 tipo={TIPOS.CURSOS}/>      

              {/* COMPONENTE => PLAN DE ESTUDIOS  */}
              <PlanDeEstudios1 />              
  
              {/* COMPONENTE => LINK-EXTERNOS */}
              <LinksExternos1 />
          </div>
          <Footer2 />
      </div>}  

      {/* INDEX 3 */}
      {index3 && <div>
          <Header3 />
          <div className="page-content">
              
              <Slider3 />

              <div style={{height: '100px'}}></div>

              {/* COMPONENTE => AUTORIDADES */}
              <Autoridades3 />

              {/* COMPONENTE => CATEGORIAS  */}
              <Categorias3 />

              {/* COMPONENTE => PLAN DE ESTUDIOS  */}
              <PlanDeEstudios1 />
  
              {/* COMPONENTE  => CONVOCATORIAS */}          
              <Convocatorias3 tipo={TIPOS.CONVOCATORIAS}/>                              
  
              {/* COMPONENTE => CURSOS */}
              <Convocatorias3 tipo={TIPOS.CURSOS}/>           
                        
              {/* COMPONENTE => LINK-EXTERNOS */}
              <LinksExternos1 />
          </div>
          <Footer3 />  
      </div>}

      {/* INDEX 4 */}
      {index4 && <div>
          <Header />
            <div className="page-content">
            {/* SLIDER START */}
            <Slider4 />                         

            {/* COMPONENTE => AUTORIDADES */}
            <Autoridades1 />          

            {/* COMPONENTE => PLAN DE ESTUDIOS  */}
            <PlanDeEstudios1 />

            {/* COMPONENTE => LINK EXTERNOS */}
            <LinksExternos2 />                        
                  
            {/* COMPONENTE  => CONVOCATORIAS */}      
            <Convocatorias4 tipo={TIPOS.CONVOCATORIAS}/>

            {/* COMPONENTE => CATEGORIAS  */}
            <Categorias4 /> 
                  
            {/* COMPONENTE => CURSOS */}
            <Convocatorias4 tipo={TIPOS.CONVOCATORIAS}/>                       
            </div>
          <Footer />
          </div>
        }      
    </>
  );
};

export default Principal;
