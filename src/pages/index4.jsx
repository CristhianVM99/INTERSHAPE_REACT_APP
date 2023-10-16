import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Autoridades1 from "../components/Elements/Autoridades1";
import Convocatorias4 from "../components/Elements/Convocatorias4";
import LinksExternos2 from "../components/Elements/LinksExternos2";
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1";
import Slider4 from "../components/Elements/Slider4";
import Categorias4 from "../components/Elements/Categorias4";
import { TIPOS } from "../types/types";

function index4({ institucion = null }) {
    if (institucion) {
        return (
            <div>
                <Header institucion={institucion} />
                <div className="page-content">
                    {/* SLIDER START */}
                    <Slider4 institucion={institucion} />

                    {/* COMPONENTE => AUTORIDADES */}
                    <Autoridades1 institucion={institucion} />

                    {/* COMPONENTE => PLAN DE ESTUDIOS  */}
                    <PlanDeEstudios1 />

                    {/* COMPONENTE => LINK EXTERNOS */}
                    <LinksExternos2 />

                    {/* COMPONENTE  => CONVOCATORIAS */}
                    <Convocatorias4
                        tipo={TIPOS.CONVOCATORIAS}
                        institucion={institucion}
                    />

                    {/* COMPONENTE => CATEGORIAS  */}
                    <Categorias4 />

                    {/* COMPONENTE => CURSOS */}
                    <Convocatorias4
                        tipo={TIPOS.CURSOS}
                        institucion={institucion}
                    />
                </div>
                <Footer institucion={institucion} />
            </div>
        );
    }
    return null;
}

export default index4;
