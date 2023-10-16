import Footer3 from "../components/Common/Footer3";
import Header3 from "../components/Common/Header3";
import Convocatorias3 from "../components/Elements/Convocatorias3";
import LinksExternos1 from "../components/Elements/LinksExternos1";
import PlanDeEstudios1 from "../components/Elements/PlanDeEstudios1";
import Slider3 from "../components/Elements/Slider3";
import { TIPOS } from "../types/types";
import Autoridades3 from "../components/Elements/Autoridades3";
import Categorias3 from "../components/Elements/Categorias3";

function index3({ institucion = null }) {
    if (institucion) {
        return (
            <div>
                <Header3 institucion={institucion} />
                <div className="page-content">
                    <Slider3 />

                    <div style={{ height: "100px" }}></div>

                    {/* COMPONENTE => AUTORIDADES */}
                    <Autoridades3 institucion={institucion} />

                    {/* COMPONENTE => CATEGORIAS  */}
                    <Categorias3 />

                    {/* COMPONENTE => PLAN DE ESTUDIOS  */}
                    <PlanDeEstudios1 institucion={institucion} />

                    {/* COMPONENTE  => CONVOCATORIAS */}
                    <Convocatorias3
                        tipo={TIPOS.CONVOCATORIAS}
                        institucion={institucion}
                    />

                    {/* COMPONENTE => CURSOS */}
                    <Convocatorias3
                        tipo={TIPOS.CURSOS}
                        institucion={institucion}
                    />

                    {/* COMPONENTE => LINK-EXTERNOS */}
                    <LinksExternos1 />
                </div>
                <Footer3 institucion={institucion} />
            </div>
        );
    }
    return null;
}

export default index3;
