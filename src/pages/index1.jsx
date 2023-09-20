import Footer from "../components/Common/Footer"
import Header from "../components/Common/Header"
import Autoridades1 from "../components/Elements/Autoridades1"
import Categorias1 from "../components/Elements/Categorias1"
import Convocatorias1 from "../components/Elements/Convocatorias1"
import LinksExternos1 from "../components/Elements/LinksExternos1"
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1"
import Slider1 from "../components/Elements/Slider1"
import { TIPOS } from "../types/types"

function index1() {
  return (
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
  )
}

export default index1