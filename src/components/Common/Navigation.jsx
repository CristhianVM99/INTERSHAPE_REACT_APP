import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getLinksInstExtAll } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import { TIPOS } from "../../types/types";
import LoadScript from "../../utils/LoadScripts";

const Navigation = () => {
  /* OBTENCION DE INFORMACION DEL STORE LINKS  */
  const { isLoading: loading_links_externos, data: links } = useQuery({
    queryKey: ["links_externos"],
    queryFn: getLinksInstExtAll,
  });

  /* TIPADO PARA LA FILTRACION PARA LOS LINKS QUE PERTENCEN AL NAV CON EL NOMBRE DE KARDEX */
  const TIPO_LINK = {
    KARDEX: "KARDEX",
    BIBLIOTECA: "BIBLIOTECA",
  };

  useEffect(() => {
    /* FUNCION PARA EL LOADER DE LA PAGINA */
    LoadScript("/assets/js/mobilenav.js");
  }, []);

  /* RENDERIZADO DEL COMPONENTE NAVIGATION */
  if (!loading_links_externos) {
    /* FILTRADO DE LINKS QUE TENGAN EL TIPO 'KARDEX' y 'BIBLIOTECA' */
    const links_filter = links.filter((e) => e.ei_tipo === TIPO_LINK.KARDEX);
    const links_biblioteca = links.filter(
      (e) => e.ei_tipo === TIPO_LINK.BIBLIOTECA
    );

    /* COMPONENTE */
    return (
      <>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li className="active">
            {/* LINKS PARA LA INFORMACION DE LA CARRERA */}
            <NavLink to={""}>Nosotros</NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink to={"/sobreNosotros"}>Misión y Visión</NavLink>
              </li>
              <li>
                <NavLink to={"/contacto"}>Contacto</NavLink>
              </li>
            </ul>
          </li>
          <li>
            {/* LINKS PARA LA INFORMACION DE LA INSTITUCION */}
            <NavLink to={""}>Academia</NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink to={`/academia/${TIPOS.CALENDARIO}`}>
                  Calendario Académico
                </NavLink>
              </li>
              <li>
                <NavLink to={`/academia/${TIPOS.HORARIO}`}>Horario</NavLink>
              </li>
              <li>
                <NavLink to={`/academia/${TIPOS.PLANESTUDIO}`}>
                  Plan de Estudio
                </NavLink>
              </li>
              <li>
                <NavLink to={`/academia/${TIPOS.REGLAMENTO}`}>
                  Reglamento mod. De graduación
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            {/* LINKS PARA INFORMACION DEL LA INSTITUCION CON EL EXTERIOR */}
            <NavLink to={""}>Institución</NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink to={`/institucion/${TIPOS.CONVENIOS}`}>
                  Convenios Institucionales
                </NavLink>
              </li>
              <li>
                <NavLink to={`/institucion/${TIPOS.PASANTIAS}`}>
                  Pasantías
                </NavLink>
              </li>
              <li>
                <NavLink to={`/institucion/${TIPOS.TRABAJOS}`}>
                  Trabajos Dirigidos
                </NavLink>
              </li>
              <li>
                <NavLink to={`/institucion/${TIPOS.INSTITUTO_INVESTIGACION}`}>
                  Instituto de Investigación
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            {/* LINKS DE RECURSOS DE LA CARRERA */}
            <NavLink to={"/"}>Convocatorias y Cursos</NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink to={`/recursos/${TIPOS.CONVOCATORIAS}`}>
                  Convocatorias
                </NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.COMUNICADOS}`}>
                  Comunicados
                </NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.AVISOS}`}>Avisos</NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.CURSOS}`}>Cursos</NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.SEMINARIOS}`}>
                  Seminarios
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            {/* LINKS PARA MAS RECURSOS DE LA CARRERA */}
            <NavLink to={"/"}>Más</NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink to={`/recursos/${TIPOS.SERVICIOS}`}>Servicios</NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.OFERTAS_ACADEMICAS}`}>
                  Ofertas Académicas
                </NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.PUBLICACIONES}`}>
                  Publicaciones
                </NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.GACETAS}`}>Gacetas</NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.EVENTOS}`}>Eventos</NavLink>
              </li>
              <li>
                <NavLink to={`/recursos/${TIPOS.VIDEOS}`}>Videos</NavLink>
              </li>
            </ul>
          </li>
          {links_filter.length > 0 ? (
            <li>
              {/* LINKS PROPIOS DE LA INSTITUCION */}
              <NavLink to={""}>Kardex</NavLink>
              <ul className="sub-menu">
                {links_filter.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.ei_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.ei_nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : null}
          {links_biblioteca.length > 0 ? (
            <li>
              {/* LINKS DE RECURSOS DE LA UNIVERSIDAD */}
              <NavLink to={""}>Biblioteca</NavLink>
              <ul className="sub-menu">
                {links_biblioteca.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.ei_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.ei_nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : null}
        </ul>
      </>
    );
  }
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */

export default Navigation;
