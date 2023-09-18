
import { createBrowserRouter } from "react-router-dom";
import Principal from '../pages/Principal';
import Prueba from "../pages/Prueba";
import Academia from "../pages/Academia";
import SobreNosotros from "../pages/SobreNosotros";
import Contacto from "../pages/Contacto";
import Categoria from "../pages/Categoria";
import Recursos from "../pages/Recursos";
import Institucion from "../pages/Institucion";
import Detalle from "../pages/Detalle"
//import Error from "../pages/Error"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Principal />,
    },
    {
        path: '/academia/:cat',
        element: <Academia />
    },
    {
        path: '/institucion/:cat',
        element: <Institucion />
    },
    {
        path: '/sobreNosotros',
        element: <SobreNosotros />
    },
    {
        path: '/categoria',
        element: <Categoria />
    },
    {
        path: '/recursos/:cat',
        element: <Recursos />
    },
    {
        path: '/detalle/:cat/:id',
        element: <Detalle />
    },
    {
        path: '/contacto',
        element: <Contacto />
    },
    {
        path: '/prueba/:cat',
        element: <Prueba />,
    },
    // {
    //     path:  '*',
    //     element: <Error  />
    // }
])

export default Router