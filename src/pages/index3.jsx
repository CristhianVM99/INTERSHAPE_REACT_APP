import Footer3 from "../components/Common/Footer3"
import Header3 from "../components/Common/Header3"
import Convocatorias3 from "../components/Elements/Convocatorias3"
import LinksExternos1 from "../components/Elements/LinksExternos1"
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1"
import Slider3 from "../components/Elements/Slider3"
import { TIPOS } from "../types/types"
import Autoridades3 from "../components/Elements/Autoridades3"
import Categorias3 from "../components/Elements/Categorias3"

function index3() {
  return (
    <div>
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
      </div>
  )
}

export default index3