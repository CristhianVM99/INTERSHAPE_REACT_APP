import { useEffect } from 'react';
import Header4 from '../components/Common/Header4';
import Footer from '../components/Common/Footer';
import Banner from '../components/Elements/Banner';
import Services7 from '../components/Elements/Services7';
import { getInstitucion, getStaticDataVerMas, getStaticImages } from '../api/institucionAPI';
import { useQuery } from '@tanstack/react-query';
import ConfigColorIcon from '../utils/ConfigColorIcon';

const Categoria = () => {

    /* OBTENCION DE INFORMACION DEL STORE API */
    const { isLoading: loading_institucion, data: institucion } = useQuery({
        queryKey: ['institucion'],
        queryFn: getInstitucion,
    })

    /* OBTENCION DE INFORMACION DEL STORE IMAGES */
    const { isLoading: loading_images, data: images } = useQuery({
        queryKey: ['getStaticImages'],
        queryFn: getStaticImages,
    });

    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ['staticDataVerMas'],
        queryFn: getStaticDataVerMas,
    });

    useEffect(()=>{
        // Establecer colores si los datos están disponibles
        if (!loading_institucion) {
            ConfigColorIcon(institucion)
        }        
    }, [loading_institucion, institucion])

    if(!loading_images && !loading_static_data && !loading_institucion){

        /* DATOS ESTATICOS */
        const {
            txt_content_banner_ver_mas,
        } = staticData  

        /* DATOS DE LA INSTITUCION */
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
                    <Banner title="CATEGORIA" pagename="CATEGORIA" description={txt_content_banner_ver_mas} bgimage={ img ?? images.BgTwo}/>                    
                    <Services7 />
                </div>
                <Footer />
            </>
        );
    }
};

export default Categoria;