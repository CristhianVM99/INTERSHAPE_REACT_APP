import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getInstitucion } from "../api/institucionAPI";
import ConfigColorIcon from "../utils/ConfigColorIcon";
import Index1 from "./index1"
import Index2 from "./index2"
import Index3 from "./index3"
import Index4 from "./index4"

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
  
  return (
    <>
      {/* INDEX 1 */}
      {index1 && <Index1 />}

      {/* INDEX 2 */}
      {index2 && <Index2 />}  

      {/* INDEX 3 */}
      {index3 && <Index3 />}

      {/* INDEX 4 */}
      {index4 && <Index4 />}      
    </>
  );
};

export default Principal;
