import Footer from "../components/Common/Footer"
import Header from "../components/Common/Header"
import Autoridades1 from "../components/Elements/Autoridades1"
import Convocatorias4 from "../components/Elements/Convocatorias4"
import LinksExternos2 from "../components/Elements/LinksExternos2"
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1"
import Slider4 from "../components/Elements/Slider4"
import Categorias4 from "../components/Elements/Categorias4"
import { TIPOS } from "../types/types"

function index4() {
  return (
    <div>
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
            <Convocatorias4 tipo={TIPOS.CURSOS}/>                       
            </div>
          <Footer />
    </div>
  )
}

export default index4