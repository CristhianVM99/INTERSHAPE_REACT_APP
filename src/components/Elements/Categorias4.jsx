import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TIPOS } from "../../types/types";
import { getStaticImages } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import bgimg1 from "../../images/background/cross-line2.png";

const Services3 = () => {
  /* OBTENCION DE INFORMACION DEL STORE IMAGES */
  const { isLoading: loading_images, data: images } = useQuery({
    queryKey: ["getStaticImages"],
    queryFn: getStaticImages,
  });

  if (!loading_images) {
    const options = {
      loop: true,
      autoplay: false,
      center: false,
      margin: 0,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        640: {
          items: 2,
        },
        768: {
          items: 2,
        },
        991: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    };

    const services = [
      {
        count: "01",
        title: "Convocatorias",
        flaticon: "flaticon-sketch",
        image: images.BgConvocatorias,
        description: "Convocatorias de la Carrera",
        link: `/recursos/${TIPOS.CONVOCATORIAS}`,
      },
      {
        count: "02",
        title: "Comunicados",
        flaticon: "flaticon-tv",
        image: images.BgComunicados,
        description: "Comunicados de la Carrera",
        link: `/recursos/${TIPOS.COMUNICADOS}`,
      },
      {
        count: "03",
        title: "Avisos",
        flaticon: "flaticon-certificate",
        image: images.BgAvisos,
        description: "Avisos de la Carrera",
        link: `/recursos/${TIPOS.AVISOS}`,
      },
      {
        count: "04",
        title: "Cursos",
        flaticon: "flaticon-sketch",
        image: images.BgCursos,
        description: "Cursos de la Carrera",
        link: `/recursos/${TIPOS.CURSOS}`,
      },
      {
        count: "05",
        title: "Seminarios",
        flaticon: "flaticon-project",
        image: images.BgSeminarios,
        description: "Seminarios de la Carrera",
        link: `/recursos/${TIPOS.SEMINARIOS}`,
      },
      {
        count: "06",
        title: "Servicios",
        flaticon: "flaticon-set-square",
        image: images.BgServicios,
        description: "Servicios de la Carrera",
        link: `/recursos/${TIPOS.SERVICIOS}`,
      },
      {
        count: "07",
        title: "Ofertas Academicas",
        flaticon: "flaticon-sketch",
        image: images.BgOfertasAcademicas,
        description: "Ofertas Academicas de la Carrera",
        link: `/recursos/${TIPOS.OFERTAS_ACADEMICAS}`,
      },
      {
        count: "08",
        title: "Publicaciones",
        flaticon: "flaticon-bookcase",
        image: images.BgPublicaciones,
        description: "Publicaciones de la Carrera",
        link: `/recursos/${TIPOS.PUBLICACIONES}`,
      },
      {
        count: "09",
        title: "Gacetas",
        flaticon: "flaticon-3d",
        image: images.BgGacetas,
        description: "Gacetas de la Carrera",
        link: `/recursos/${TIPOS.GACETAS}`,
      },
      {
        count: "10",
        title: "Eventos",
        flaticon: "flaticon-sketch",
        image: images.BgEventos,
        description: "Eventos de la Carrera",
        link: `/recursos/${TIPOS.EVENTOS}`,
      },
      {
        count: "11",
        title: "Videos",
        flaticon: "flaticon-table-1",
        image: images.BgVideos,
        description: "Videos de la Carrera",
        link: `/recursos/${TIPOS.VIDEOS}`,
      },
    ];

    return (
      <>
        <div className="section-full mobile-page-padding p-t80 bg-white bg-change-section">
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="sx-separator-outer separator-center">
                <div
                  className="sx-separator bg-white bg-moving bg-repeat-x"
                  style={{ backgroundImage: "url(" + bgimg1 + ")" }}
                >
                  <h3 className="sep-line-one">Categorias</h3>
                </div>
              </div>
            </div>
            {/* TITLE END */}
          </div>
          <OwlCarousel
            className="owl-carousel service-slider-two owl-btn-vertical-center"
            {...options}
          >
            {services.map((item, index) => (
              <NavLink key={index} to={item.link}>
                <div className="item" key={index}>
                  <div
                    className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper"
                    style={{ backgroundImage: "url(" + item.image + ")" }}
                  >
                    <div className="overlay-main bg-black opacity-05" />
                    <div className="bg-content-mid-outer">
                      <div className="bg-content-mid">
                        <div className="sx-icon-box-wraper center text-white">
                          <div className="icon-lg m-b15">
                            <span className="icon-cell">
                              <i className={item.flaticon} />
                            </span>
                          </div>
                          <div className="icon-content">
                            <h4 className="sx-tilte">                              
                                {item.title}
                            </h4>
                          </div>
                        </div>
                        <span className="bgcall-block-number">
                          {item.count}
                        </span>
                        <div className="bg-overlay" />
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </OwlCarousel>
        </div>
      </>
    );
  }
};

export default Services3;
