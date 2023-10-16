import Footer2 from "../components/Common/Footer2";
import Header2 from "../components/Common/Header2";
import Autoridades2 from "../components/Elements/Autoridades2";
import Categorias2 from "../components/Elements/Categorias2";
import Convocatorias2 from "../components/Elements/Convocatorias2";
import LinksExternos1 from "../components/Elements/LinksExternos1";
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1";
import Slider2 from "../components/Elements/Slider2";
import { TIPOS } from "../types/types";

function index2({ institucion = null }) {
    if (institucion) {
        return (
            <div>
                <Header2 institucion={institucion} />
                <div className="page-content">
                    <Slider2 institucion={institucion} />

                    {/* COMPONENTE => AUTORIDADES */}
                    <Autoridades2 separatoralignment="separator-center" />

                    {/* COMPONENTE  => CONVOCATORIAS */}
                    <Convocatorias2
                        tipo={TIPOS.CONVOCATORIAS}
                        institucion={institucion}
                    />

                    {/* COMPONENTE => CATEGORIAS */}
                    <Categorias2 />

                    {/* COMPONENTE => CURSOS */}
                    <Convocatorias2
                        tipo={TIPOS.CURSOS}
                        institucion={institucion}
                    />

                    {/* COMPONENTE => PLAN DE ESTUDIOS  */}
                    <PlanDeEstudios1 institucion={institucion} />

                    {/* COMPONENTE => LINK-EXTERNOS */}
                    <LinksExternos1 />
                </div>
                <Footer2 institucion={institucion} />
            </div>
        );
    }
    return null;
}

export default index2;
