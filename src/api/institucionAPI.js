import axios from "axios";
import { staticData } from "../store/store";

const institucionAPI = axios.create({
    baseURL: 'https://serviciopagina.upea.bo/api'
})

/* DATOS OBTENIDOS DESDE LA API ================== */
export const getInstitucion = async () => {
    const res = await institucionAPI.get('/InstitucionUPEA/'+import.meta.env.VITE_APP_ID_INSTITUCION)
    return res.data.Descripcion
}

export const getConvocatorias = async () => {
    const res = await institucionAPI.get('/convocatoriasAll/'+import.meta.env.VITE_APP_ID_CARRERA)
    return res.data
}

export const getCursos = async () => {
    const res = await institucionAPI.get('/cursosAll/'+import.meta.env.VITE_APP_ID_CARRERA)
    return res.data
};

export const getLinksInstExtAll = async () => {
    const res = await institucionAPI.get('/linksIntExtAll/'+import.meta.env.VITE_APP_ID_INSTITUCION)
    return res.data
}

export const getServicios = async () => {
    const res = await institucionAPI.get('/ServicioAll/'+import.meta.env.VITE_APP_ID_CARRERA)
    return res.data
}

export const getOfertasAcademicas = async () => {
    const res = await institucionAPI.get('/OfertasAcademicasAll/'+import.meta.env.VITE_APP_ID_CARRERA)
    return res.data
}

export const getPublicaciones = async () => {
    const res = await institucionAPI.get('/publicacionesAll/'+import.meta.env.VITE_APP_ID_INSTITUCION)
    return res.data
}

export const getGacetas = async () => {
    const res = await institucionAPI.get('/gacetaunivAll/'+import.meta.env.VITE_APP_ID_INSTITUCION)
    return res.data
}

export const getEventos = async () => {
    const res = await institucionAPI.get('/eventoAll/'+import.meta.env.VITE_APP_ID_INSTITUCION)
    return res.data
}

export const getVideos = async () => {
    const res = await institucionAPI.get('/VideosAll/'+import.meta.env.VITE_APP_ID_INSTITUCION)
    return res.data
}
/* DATOS ESTATICOS PARA LA PAGINA WEB =============== */
export const getStaticData = () => {
    return staticData
}
export const getStaticDataIndex = () => {
    return staticData.dataIndex
}

export const getStaticDataCategory = () => {
    return staticData.dataCategory
}

export const getStaticDataCategoryDetail = () => {
    return staticData.dataCategoryDetail
}

export const getStaticDataKey = () => {
    return staticData.dataKey
}

export const getStaticDataContact = () => {
    return staticData.dataContact
}

export const getStaticDataAbout = () => {
    return staticData.dataAbout
}

export const getStaticDataAcademia = () => {
    return staticData.dataAcademia
}

export const getStaticDataInstitucion = () => {
    return staticData.dataInstitucion
}

export const getStaticImages = () => {
    return staticData.dataImagesStatic
}

export const getStaticDataVerMas = () =>{
    return staticData.dataVerMas
}