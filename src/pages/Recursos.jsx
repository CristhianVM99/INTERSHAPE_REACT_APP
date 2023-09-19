import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header4 from "../components/Common/Header4";
import Footer from "../components/Common/Footer";
import Banner from "../components/Elements/Banner";
import {
  getConvocatorias,
  getCursos,
  getEventos,
  getGacetas,
  getInstitucion,
  getOfertasAcademicas,
  getPublicaciones,
  getServicios,
  getStaticDataCategory,
  getStaticImages,
  getVideos,
} from "../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { Document, Page, pdfjs } from "react-pdf";
import { TIPOS } from "../types/types";
import ConfigColorIcon from "../utils/ConfigColorIcon";
import { AES } from 'crypto-js';
import ReactPlayer from 'react-player/youtube'

const Recursos = () => {
  /* OBTENEMOS EL TIPO DE CATEGORIA */
  const { cat } = useParams();

  /* OBTENCION DE INFORMACION DEL STORE IMAGES */
  const { isLoading: loading_images, data: images } = useQuery({
    queryKey: ["getStaticImages"],
    queryFn: getStaticImages,
  });

  /* OBTENCION DE INFORMACION DEL STORE API INSTITUCION*/
  const { isLoading: loading_institucion, data: institucion } = useQuery({
    queryKey: ["institucion"],
    queryFn: getInstitucion,
  });

  /* OBTENCION DE INFORMACION DEL STORE CONVOCATORIAS */
  const { isLoading: loading_convocatorias, data: convocatorias } = useQuery({
    queryKey: ["convocatorias"],
    queryFn: getConvocatorias,
  });

  /* OBTENCION DE INFORMACION DEL STORE CURSO */
  const { isLoading: loading_cursos, data: cursos } = useQuery({
    queryKey: ["cursos"],
    queryFn: getCursos,
  });

  /* OBTENCION DE INFORMACION DEL STORE API SERVICIOS*/
  const { isLoading: loading_servicios, data: servicios } = useQuery({
    queryKey: ["servicios"],
    queryFn: getServicios,
  });

  /* OBTENCION DE INFORMACION DEL STORE API OFERTAS ACADEMICAS*/
  const { isLoading: loading_ofertas, data: ofertas } = useQuery({
    queryKey: ["ofertas"],
    queryFn: getOfertasAcademicas,
  });

  /* OBTENCION DE INFORMACION DEL STORE API PUBLICACIONES*/
  const { isLoading: loading_publicaciones, data: publicaciones } = useQuery({
    queryKey: ["publicaciones"],
    queryFn: getPublicaciones,
  });

  /* OBTENCION DE INFORMACION DEL STORE API GACETAS*/
  const { isLoading: loading_gacetas, data: gacetas } = useQuery({
    queryKey: ["gacetas"],
    queryFn: getGacetas,
  });

  /* OBTENCION DE INFORMACION DEL STORE API EVENTOS*/
  const { isLoading: loading_eventos, data: eventos } = useQuery({
    queryKey: ["eventos"],
    queryFn: getEventos,
  });

  /* OBTENCION DE INFORMACION DEL STORE API VIDEOS*/
  const { isLoading: loading_videos, data: videos } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  /* OBTENCION DE INFORMACION DEL STORE STATICO CATEGORY */
  const { isLoading: loading_static_data, data: staticData } = useQuery({
    queryKey: ["staticDataCategory"],
    queryFn: getStaticDataCategory,
  });

  /* FUNCION PARA OBTENER EL DIA DE UNA FECHA  */
  function obtenerDiaDeFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    return dia;
  }

  /* FUNCION PARA OBTENER EL MES DE UNA FECHA */
  function obtenerMesDeFecha(fechaISO) {
    const mesesDelAnio = [
      "ENE",
      "FEB",
      "MAR",
      "ABR",
      "MAY",
      "JUN",
      "JUL",
      "AGO",
      "SEP",
      "OCT",
      "NOV",
      "DIC",
    ];

    const fecha = new Date(fechaISO);
    const mesIndex = fecha.getMonth();
    const mesReducido = mesesDelAnio[mesIndex];

    return mesReducido;
  }

  /* FUNCION PARA OBTENER EL DIA DE UNA FECHA */
  function obtenerDiaDeFecha2(fechaString) {
    const fecha = new Date(fechaString);
    const dia = fecha.getDate();
    return dia;
  }

  /* FUNCION PARA OBTENER EL MES DE UNA FECHA */
  function obtenerMesDeFecha2(fechaString) {
    const fecha = new Date(fechaString);
    const meses = [
      "ENE",
      "FEB",
      "MAR",
      "ABR",
      "MAY",
      "JUN",
      "JUL",
      "AGO",
      "SEP",
      "OCT",
      "NOV",
      "DIC",
    ];
    const mes = fecha.getMonth(); // Obtiene el mes (0-11)
    return meses[mes];
  }

  const sinRegistros = (
    <div
      style={{
        textAlign: "center",
        fontSize: "3em",
        padding: "20px",
        background: "var(--color-primario)",
        color: "#fff",
      }}
    >
      Sin Registros
    </div>
  );
  
  const encryptId = (data) => {
    const encryptedData = AES.encrypt(JSON.stringify(data), import.meta.env.VITE_APP_ENCRYPT).toString();
    return encodeURIComponent(encryptedData); // Codifica el resultado antes de usarlo en una URL
  };


  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    // Establecer colores si los datos están disponibles
    if (!loading_institucion) {
      ConfigColorIcon(institucion);
    }
  }, [loading_institucion, institucion]);

  // SERVICIOS - OFERTAS ACADEMICAS - PUBLICACIONES - GACETAS - EVENTOS - VIDEOS 
  if (
    !loading_institucion &&
    !loading_static_data &&
    !loading_servicios &&
    !loading_ofertas &&
    !loading_images &&
    !loading_publicaciones &&
    !loading_gacetas &&
    !loading_eventos &&
    !loading_videos &&
    [
      TIPOS.SERVICIOS,
      TIPOS.OFERTAS_ACADEMICAS,
      TIPOS.PUBLICACIONES,
      TIPOS.GACETAS,
      TIPOS.EVENTOS,
      TIPOS.VIDEOS,
    ].includes(cat)
  ) {
    /* DATOS OBTENIDOS DESDE LA STORE API */
    const { txt_content_btn, txt_content_banner_category } = staticData;

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const { institucion_iniciales, portada } = institucion;

    const indiceAleatorio = Math.floor(Math.random() * portada.length);
    const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
    const img = `${
      import.meta.env.VITE_APP_ROOT_API
    }/InstitucionUpea/Portada/${imagenSeleccionada}`;

    return (
      <>
        <Header4 />
        <div className="page-content">
          <Banner
            title={
              cat === TIPOS.OFERTAS_ACADEMICAS ? "OFERTAS ACADEMICAS" : cat
            }
            pagename={
              cat === TIPOS.OFERTAS_ACADEMICAS ? "OFERTAS ACADEMICAS" : cat
            }
            description={txt_content_banner_category}
            bgimage={img ?? images.BgFour}
          />

          <div className="section-full p-tb80 bg-white inner-page-padding">
            <div className="container">
              {cat === TIPOS.SERVICIOS ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {servicios.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${TIPOS.SERVICIOS}/${encryptId(item.serv_id)}`}
                          >
                            <img
                              style={{ height: "400px" }}
                              src={`${
                                import.meta.env.VITE_APP_ROOT_API
                              }/Carrera/Servicios/${item.serv_imagen}`}
                              alt=""
                            />
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {obtenerDiaDeFecha(item.serv_registro)}
                                </strong>{" "}
                                <span>
                                  {obtenerMesDeFecha(item.serv_registro)}
                                </span>{" "}
                              </li>
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${TIPOS.SERVICIOS}/${encryptId(item.serv_id)}`}
                                >
                                  <span>{institucion_iniciales}</span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${TIPOS.SERVICIOS}/${encryptId(item.serv_id)}`}
                                >
                                  {TIPOS.SERVICIOS}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${TIPOS.SERVICIOS}/${encryptId(item.serv_id)}`}
                              >
                                {item.serv_nombre}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${TIPOS.SERVICIOS}/${encryptId(item.serv_id)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {cat === TIPOS.OFERTAS_ACADEMICAS ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {ofertas.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${TIPOS.OFERTAS_ACADEMICAS}/${encryptId(item.ofertas_id)}`}
                          >
                            <img
                              style={{ height: "400px" }}
                              src={`${
                                import.meta.env.VITE_APP_ROOT_API
                              }/Carrera/OfertasAcademicas/${
                                item.ofertas_imagen
                              }`}
                              alt=""
                            />
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {obtenerDiaDeFecha(
                                    item.ofertas_inscripciones_ini
                                  )}
                                </strong>{" "}
                                <span>
                                  {obtenerMesDeFecha(
                                    item.ofertas_inscripciones_ini
                                  )}
                                </span>{" "}
                              </li>
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${TIPOS.OFERTAS_ACADEMICAS}/${encryptId(item.ofertas_id)}`}
                                >
                                  <span>{institucion_iniciales}</span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${TIPOS.OFERTAS_ACADEMICAS}/${encryptId(item.ofertas_id)}`}
                                >
                                  {TIPOS.OFERTAS_ACADEMICAS}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${TIPOS.OFERTAS_ACADEMICAS}/${encryptId(item.ofertas_id)}`}
                              >
                                {item.ofertas_titulo}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${TIPOS.OFERTAS_ACADEMICAS}/${encryptId(item.ofertas_id)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {cat === TIPOS.PUBLICACIONES ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {publicaciones.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${TIPOS.PUBLICACIONES}/${encryptId(item.publicaciones_id)}`}
                          >
                            <img
                              src={`${
                                import.meta.env.VITE_APP_ROOT_API
                              }/Publicaciones/${item.publicaciones_imagen}`}
                              alt=""
                              style={{ height: "400px" }}
                            />
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {obtenerDiaDeFecha2(item.publicaciones_fecha)}
                                </strong>{" "}
                                <span>
                                  {obtenerMesDeFecha2(item.publicaciones_fecha)}
                                </span>{" "}
                              </li>
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${TIPOS.PUBLICACIONES}/${encryptId(item.publicaciones_id)}`}
                                >
                                  <span>{item.publicaciones_autor}</span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${TIPOS.PUBLICACIONES}/${encryptId(item.publicaciones_id)}`}
                                >
                                  {TIPOS.PUBLICACIONES}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${TIPOS.PUBLICACIONES}/${encryptId(item.publicaciones_id)}`}
                              >
                                {item.publicaciones_titulo}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${TIPOS.PUBLICACIONES}/${encryptId(item.publicaciones_id)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {cat === TIPOS.GACETAS ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {gacetas.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${TIPOS.GACETAS}/${encryptId(item.gaceta_id)}`}
                          >
                            <Document
                              className="pdf"
                              file={`${
                                import.meta.env.VITE_APP_ROOT_API
                              }/Gaceta/${item.gaceta_documento}`}
                            >
                              <Page pageNumber={1} height={400} />
                            </Document>
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {obtenerDiaDeFecha(item.gaceta_fecha)}
                                </strong>{" "}
                                <span>
                                  {obtenerMesDeFecha(item.gaceta_fecha)}
                                </span>{" "}
                              </li>
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${TIPOS.GACETAS}/${encryptId(item.gaceta_id)}`}
                                >
                                  <span>{institucion_iniciales}</span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${TIPOS.GACETAS}/${encryptId(item.gaceta_id)}`}
                                >
                                  {TIPOS.GACETAS}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${TIPOS.GACETAS}/${encryptId(item.gaceta_id)}`}
                              >
                                {item.gaceta_titulo}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${TIPOS.GACETAS}/${encryptId(item.gaceta_id)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {cat === TIPOS.EVENTOS ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {eventos.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${TIPOS.EVENTOS}/${encryptId(item.evento_id)}`}
                          >
                            <img
                              style={{ height: "400px" }}
                              src={`${
                                import.meta.env.VITE_APP_ROOT_API
                              }/Eventos/${item.evento_imagen}`}
                              alt=""
                            />
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {obtenerDiaDeFecha2(item.evento_fecha)}
                                </strong>{" "}
                                <span>
                                  {obtenerMesDeFecha2(item.evento_fecha)}
                                </span>{" "}
                              </li>
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${TIPOS.EVENTOS}/${encryptId(item.evento_id)}`}
                                >
                                  <span>{institucion_iniciales}</span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${TIPOS.EVENTOS}/${encryptId(item.evento_id)}`}
                                >
                                  {TIPOS.EVENTOS}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${TIPOS.EVENTOS}/${encryptId(item.evento_id)}`}
                              >
                                {item.evento_titulo}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${TIPOS.EVENTOS}/${encryptId(item.evento_id)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {cat === TIPOS.VIDEOS ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {videos.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${TIPOS.VIDEOS}/${encryptId(item.video_id)}`}
                          >                            
                            <ReactPlayer 
                              url={item.video_enlace} 
                              className='react-player'
                              width='100%'
                              height='400px'
                            />
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              {/* <li className="post-date"><strong>{item.date}</strong> <span>{item.month}</span> </li> */}
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${TIPOS.VIDEOS}/${encryptId(item.video_id)}`}
                                >
                                  <span>{institucion_iniciales}</span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${TIPOS.VIDEOS}/${encryptId(item.video_id)}`}
                                >
                                  {TIPOS.VIDEOS}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${TIPOS.VIDEOS}/${encryptId(item.video_id)}`}
                              >
                                {item.video_titulo}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${TIPOS.VIDEOS}/${encryptId(item.video_id)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* PARA CASOS SIN REGISTROS */}
              {TIPOS.SERVICIOS === cat && servicios.length === 0
                ? sinRegistros
                : null}
              {TIPOS.OFERTAS_ACADEMICAS === cat && ofertas.length === 0
                ? sinRegistros
                : null}
              {TIPOS.PUBLICACIONES === cat && publicaciones.length === 0
                ? sinRegistros
                : null}
              {TIPOS.GACETAS === cat && gacetas.length === 0
                ? sinRegistros
                : null}
              {TIPOS.EVENTOS === cat && eventos.length === 0
                ? sinRegistros
                : null}
              {TIPOS.VIDEOS === cat && videos.length === 0
                ? sinRegistros
                : null}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // CONVOCATORIAS - COMUNICADOS - AVISOS - CURSOS - SEMINARIOS
  if (
    !loading_institucion &&
    !loading_static_data &&
    !loading_convocatorias &&
    !loading_cursos &&
    !loading_images &&
    [
      TIPOS.CONVOCATORIAS,
      TIPOS.COMUNICADOS,
      TIPOS.AVISOS,
      TIPOS.CURSOS,
      TIPOS.SEMINARIOS,
    ].includes(cat)
  ) {
    var items = null;

    if ([TIPOS.CONVOCATORIAS, TIPOS.COMUNICADOS, TIPOS.AVISOS].includes(cat)) {
      items = convocatorias.filter(
        (e) => e.tipo_conv_comun.tipo_conv_comun_titulo === cat
      );
    } else if ([TIPOS.CURSOS, TIPOS.SEMINARIOS].includes(cat)) {
      items = cursos.filter(
        (e) => e.tipo_curso_otro.tipo_conv_curso_nombre === cat
      );
    }

    /* DATOS OBTENIDOS DESDE LA STORE API */
    const { txt_content_btn, txt_content_banner_category } = staticData;

    /* DATOS OBTENIDOS DESDE LA STORE STATICA*/
    const { institucion_iniciales, portada } = institucion;

    const indiceAleatorio = Math.floor(Math.random() * portada.length);
    const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
    const img = `${
      import.meta.env.VITE_APP_ROOT_API
    }/InstitucionUpea/Portada/${imagenSeleccionada}`;

    return (
      <>
        <Header4 />
        <div className="page-content">
          <Banner
            title={cat}
            pagename={cat}
            description={txt_content_banner_category}
            bgimage={img ?? images.BgFour}
          />

          <div className="section-full p-tb80 bg-white inner-page-padding">
            <div className="container">
              {[TIPOS.CONVOCATORIAS, TIPOS.COMUNICADOS, TIPOS.AVISOS].includes(
                cat
              ) ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {items.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${cat}/${encryptId(item.idconvocatorias)}`}
                          >
                            <img
                              style={{ height: "400px" }}
                              src={`${
                                import.meta.env.VITE_APP_ROOT_API
                              }/Convocatorias/${item.con_foto_portada}`}
                              alt=""
                            />
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {obtenerDiaDeFecha(item.con_fecha_inicio)}
                                </strong>{" "}
                                <span>
                                  {obtenerMesDeFecha(item.con_fecha_inicio)}
                                </span>{" "}
                              </li>
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${cat}/${encryptId(item.idconvocatorias)}`}
                                >
                                  <span>
                                    {
                                      item.tipo_conv_comun
                                        .tipo_conv_comun_titulo
                                    }
                                  </span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${cat}/${encryptId(item.idconvocatorias)}`}
                                >
                                  {institucion_iniciales}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${cat}/${encryptId(item.idconvocatorias)}`}
                              >
                                {item.con_titulo}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${cat}/${encryptId(item.idconvocatorias)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {[TIPOS.CURSOS, TIPOS.SEMINARIOS].includes(cat) ? (
                <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                  {items.map((item, index) => (
                    <div
                      className="masonry-item  col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="blog-post blog-grid date-style-2">
                        <div className="sx-post-media sx-img-effect img-reflection">
                          <NavLink
                            to={`/detalle/${cat}/${encryptId(item.iddetalle_cursos_academicos)}`}
                          >
                            <img
                              style={{ height: "400px" }}
                              src={`${
                                import.meta.env.VITE_APP_ROOT_API
                              }/Cursos/${item.det_img_portada}`}
                              alt=""
                            />
                          </NavLink>
                        </div>
                        <div className="sx-post-info p-t30">
                          <div className="sx-post-meta ">
                            <ul>
                              <li className="post-date">
                                <strong>
                                  {obtenerDiaDeFecha(item.det_fecha_ini)}
                                </strong>{" "}
                                <span>
                                  {obtenerMesDeFecha(item.det_fecha_ini)}
                                </span>{" "}
                              </li>
                              <li className="post-author">
                                <NavLink
                                  to={`/detalle/${cat}/${encryptId(item.iddetalle_cursos_academicos)}`}
                                >
                                  <span>
                                    {
                                      item.tipo_curso_otro
                                        .tipo_conv_curso_nombre
                                    }
                                  </span>
                                </NavLink>{" "}
                              </li>
                              <li className="post-comment">
                                {" "}
                                <NavLink
                                  to={`/detalle/${cat}/${encryptId(item.iddetalle_cursos_academicos)}`}
                                >
                                  {institucion_iniciales}
                                </NavLink>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="sx-post-title ">
                            <h4 className="post-title">
                              <NavLink
                                to={`/detalle/${cat}/${encryptId(item.iddetalle_cursos_academicos)}`}
                              >
                                {item.det_titulo}
                              </NavLink>
                            </h4>
                          </div>
                          <div className="sx-post-readmore">
                            <NavLink
                              to={`/detalle/${cat}/${encryptId(item.iddetalle_cursos_academicos)}`}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              {txt_content_btn}
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* PARA CASOS SIN REGISTROS */}
              {items.length === 0 ? sinRegistros : null}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return null;
};

export default Recursos;
