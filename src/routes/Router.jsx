
import { createBrowserRouter } from "react-router-dom";
import Principal from '../pages/Principal';
import Academia from "../pages/Academia";
import SobreNosotros from "../pages/SobreNosotros";
import Contacto from "../pages/Contacto";
import Categoria from "../pages/Categoria";
import Recursos from "../pages/Recursos";
import Institucion from "../pages/Institucion";
import Detalle from "../pages/Detalle"
import Error from "../pages/Error"

const Router = createBrowserRouter([
    /* RUTAS DE LA PAGINA WEB */
    {
        path: '/', //RUTA PRINCIPAL
        element: <Principal />,
    },
    {
        path: '/academia/:cat', // RUTA PARA DATOS DE LA CARRERA
        element: <Academia />
    },
    {
        path: '/institucion/:cat', // RUTA PARA DATOS DE LA INSTITUCION
        element: <Institucion />
    },
    {
        path: '/sobreNosotros', // RUTA DE DATOS ACERCA DE LA CARRERA
        element: <SobreNosotros />
    },
    {
        path: '/categoria', // RUTA DE DATOS DE CATEGORIAS 
        element: <Categoria />
    },
    {
        path: '/recursos/:cat', // RUTAS DE RECURSOS DE LA CARRERA
        element: <Recursos />
    },
    {
        path: '/detalle/:cat/:id', // RUTAS DE DETALLE DE ALGUN RECURSO
        element: <Detalle />
    },
    {
        path: '/contacto', // RUTA PARA CONTACTO
        element: <Contacto />
    },    
    {
        path:  '*', // RUTAS QUE NO ESTAN REGISTRADAS 
        element: <Error  />
    }
])

export default Router