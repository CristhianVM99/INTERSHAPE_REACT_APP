import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Autoridades1 from "../components/Elements/Autoridades1";
import Categorias1 from "../components/Elements/Categorias1";
import Convocatorias1 from "../components/Elements/Convocatorias1";
import LinksExternos1 from "../components/Elements/LinksExternos1";
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1";
import Slider1 from "../components/Elements/Slider1";
import { TIPOS } from "../types/types";

function index1({ institucion = null }) {
    if (institucion) {
        return (
            <div>
                <Header institucion={institucion} />
                <div className="page-content">
                    {/* COMPONENTE => BANNER */}
                    <Slider1 institucion={institucion} />

                    {/* COMPONENTE => AUTORIDADES */}
                    <Autoridades1 institucion={institucion} />

                    {/* COMPONENTE => CATEGORIAS */}
                    <Categorias1 />

                    {/* COMPONENTE  => CONVOCATORIAS */}
                    <Convocatorias1
                        tipo={TIPOS.CONVOCATORIAS}
                        institucion={institucion}
                    />

                    {/* COMPONENTE => PLAN DE ESTUDIOS  */}
                    <PlanDeEstudios1 institucion={institucion} />

                    {/* COMPONENTE => CURSOS */}
                    <Convocatorias1
                        tipo={TIPOS.CURSOS}
                        institucion={institucion}
                    />

                    {/* COMPONENTE => LINK-EXTERNOS */}
                    <LinksExternos1 />
                </div>
                <Footer />
            </div>
        );
    }
    return null;
}

export default index1;
