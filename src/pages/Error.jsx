import { NavLink } from 'react-router-dom';
import Header4 from '../components/Common/Header4';
import Footer from '../components/Common/Footer';
import Banner from '../components/Elements/Banner';
import imgError from "../images/error-404.png"
import { getInstitucion, getStaticImages } from '../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';

const Error = () =>  {

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ["getStaticImages"],
        queryFn: getStaticImages,
    });

    /* OBTENCION DE INFORMACION DEL STORE API INSTITUCION*/
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    if(!loading_images && !loading_institucion){

        /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
        const {
            portada
        } = institucion
        
        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${import.meta.env.VITE_APP_ROOT_API}/InstitucionUpea/Portada/${imagenSeleccionada}`;

        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Error 404" pagename="Error" description="Ups. Ocurrio un Error" bgimage={img ?? images.BgOne}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full mobile-page-padding p-tb150 bg-bottom-left bg-no-repeat" style={{ backgroundImage: 'url(images/background/bg-4.png)' }}>
                        <div className="container">
                            <div className="section-content">
                                <div className="page-notfound row">
                                    <div className="col-md-7">
                                        <img src={imgError} alt="" />
                                    </div>
                                    <div className="col-md-5">
                                        <strong>Page Not Found</strong>
                                        <span className="title">Error 404</span>
                                        <p>Quiere Volver a la Pagina Principal</p>
                                        <NavLink to={"/"} title="Back to home" className="site-button btn-half"><span> Principal</span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
    
                <Footer />
            </>
        );
    }
};

export default Error;