import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getInstitucion } from "../api/institucionAPI";
import ConfigColorIcon from "../utils/ConfigColorIcon";
import Index1 from "./index1";
import Index2 from "./index2";
import Index3 from "./index3";
import Index4 from "./index4";

const Principal = () => {
    // obtención de información sobre la institución
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ["institucion"],
        queryFn: getInstitucion,
    });

    // configuración de colores y el icono de la pagina asi como su titulo
    useEffect(() => {
        if (!loading_institucion) {
            /* CONFIGURACION DE COLOR E ICON */
            ConfigColorIcon(institucion);
        }
    }, [loading_institucion, institucion]);

    // configuración del index a usar
    const index1 = import.meta.env.VITE_INDEX_1 === "true";
    const index2 = import.meta.env.VITE_INDEX_2 === "true";
    const index3 = import.meta.env.VITE_INDEX_3 === "true";
    const index4 = import.meta.env.VITE_INDEX_4 === "true";

    return (
        <>
            {/* INDEX 1 */}
            {index1 && <Index1 institucion={institucion} />}

            {/* INDEX 2 */}
            {index2 && <Index2 institucion={institucion} />}

            {/* INDEX 3 */}
            {index3 && <Index3 institucion={institucion} />}

            {/* INDEX 4 */}
            {index4 && <Index4 institucion={institucion} />}
        </>
    );
};

export default Principal;
