import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getStaticDataIndex } from "../../api/institucionAPI";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";

const Slider4 = ({ institucion = null }) => {
    /* OBTENCION DE INFORMACION DEL STORE STATICO */
    const { isLoading: loading_static_data, data: staticData } = useQuery({
        queryKey: ["staticDataIndex"],
        queryFn: getStaticDataIndex,
    });

    useEffect(() => {
        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement("script");
                script.src = src;
                script.addEventListener("load", function () {
                    resolve();
                });
                script.addEventListener("error", function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            });
        }

        loadScript("./assets/js/rev-script-1.js");
    });

    if (institucion && !loading_static_data) {
        /* DATOS DE LA INSTITUCION */
        const {
            institucion_nombre,
            institucion_facebook,
            institucion_youtube,
            institucion_twitter,
            institucion_iniciales,
            portada,
        } = institucion;

        /* DATOS STATICOS  */
        const {
            txt_content_banner_two,
            txt_content_banner,
            txt_content_btn,
            txt_content_banner_three,
        } = staticData;

        const indiceAleatorio = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
        const img = `${
            import.meta.env.VITE_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada}`;

        const indiceAleatorio2 = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada2 = portada[indiceAleatorio2].portada_imagen;
        const img2 = `${
            import.meta.env.VITE_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada2}`;

        const indiceAleatorio3 = Math.floor(Math.random() * portada.length);
        const imagenSeleccionada3 = portada[indiceAleatorio3].portada_imagen;
        const img3 = `${
            import.meta.env.VITE_APP_ROOT_API
        }/InstitucionUpea/Portada/${imagenSeleccionada3}`;

        return (
            <>
                <div
                    id="rev_slider_26_1_wrapper "
                    className="rev_slider_wrapper fullscreen-container home-rev-slider"
                    data-alias="mask-showcase"
                    data-source="gallery"
                >
                    {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
                    <div
                        id="rev_slider_26_1"
                        className="rev_slider fullscreenbanner"
                        style={{ display: "none" }}
                        data-version="5.4.1"
                    >
                        <ul>
                            {/* SLIDE 1 */}
                            {img && (
                                <li
                                    data-index="rs-73"
                                    data-transition="fade"
                                    data-slotamount="default"
                                    data-hideafterloop={0}
                                    data-hideslideonmobile="off"
                                    data-easein="default"
                                    data-easeout="default"
                                    data-masterspeed={300}
                                    data-rotate={0}
                                    data-saveperformance="off"
                                    data-title
                                    data-param1={1}
                                    data-param2
                                    data-param3
                                    data-param4
                                    data-param5
                                    data-param6
                                    data-param7
                                    data-param8
                                    data-param9
                                    data-param10
                                    data-description
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src={img}
                                        alt=""
                                        data-bgcolor="#f8f8f8"
                                        style={{}}
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                        data-bgparallax="off"
                                        className="rev-slidebg"
                                        data-no-retina
                                    />
                                    {/* LAYER 1  right image overlay dark*/}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                                        id="slide-73-layer-1"
                                        data-x="['right','right','right','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-fontweight="['100','100','400','400']"
                                        data-width="['full','full','full','full']"
                                        data-height="['full','full','full','full']"
                                        data-whitespace="nowrap"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 6,
                                            textTransform: "left",
                                            backgroundColor: "rgba(0,0,0,0.5)",
                                        }}
                                    ></div>
                                    {/* LAYERS 2 number block*/}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme slider-block sx-bg-primary"
                                        id="slide-73-layer-2"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['-220','-220','-220','50']"
                                        data-fontweight="['600','600','600','600']"
                                        data-fontsize="['120','120','80','80']"
                                        data-lineheight="['120','120','80','80']"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[20,20,20,20]"
                                        data-paddingright="[10,10,10,10]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[10,10,10,10]"
                                        style={{
                                            zIndex: 10,
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        01
                                    </div>
                                    {/* LAYER 3  Thin text title*/}
                                    <div
                                        className="tp-caption   tp-resizeme slider-tag-line"
                                        id="slide-73-layer-3"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['-80','-80','-80','170']"
                                        data-fontsize="['64','64','60','40']"
                                        data-lineheight="['74','74','70','50']"
                                        data-width="['700','650','620','380']"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":300,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[20,20,20,0]"
                                        data-paddingbottom="[10,10,10,10]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 10,
                                            fontWeight: 200,
                                            letterSpacing: 10,
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {institucion_iniciales}
                                    </div>
                                    {/* LAYER 4  Bold Title*/}
                                    <div
                                        className="tp-caption   tp-resizeme"
                                        id="slide-73-layer-4"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['10','10','10','230']"
                                        data-fontsize="['64','64','60','40']"
                                        data-lineheight="['74','74','70','50']"
                                        data-width="['700','700','700','700']"
                                        data-height="none"
                                        data-whitespace="normal"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[70,70,70,70]"
                                        data-paddingright="[20,20,20,10]"
                                        data-paddingbottom="[30,30,30,30]"
                                        data-paddingleft="[0,0,0,10]"
                                        style={{
                                            zIndex: 10,
                                            textTransform: "uppercase",
                                            letterSpacing: 10,
                                            whiteSpace: "normal",
                                            fontWeight: 600,
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        {institucion_nombre}
                                    </div>
                                    {/* LAYER 5  Paragraph*/}
                                    <div
                                        className="tp-caption   tp-resizeme"
                                        id="slide-73-layer-5"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['90','90','90','300']"
                                        data-fontsize="['20','20','20','20']"
                                        data-lineheight="['30','30','30','30']"
                                        data-width="['600','600','600','380']"
                                        data-height="none"
                                        data-whitespace="normal"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[120,120,120,120]"
                                        data-paddingright="[20,20,20,20]"
                                        data-paddingbottom="[30,30,30,30]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 10,
                                            whiteSpace: "normal",
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        {txt_content_banner}
                                    </div>
                                    {/* LAYER 6  Read More*/}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme"
                                        id="slide-73-layer-6"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['180','180','180','420']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[60,60,60,60]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 9, lineHeight: 30 }}
                                    >
                                        <NavLink
                                            to={"/categoria"}
                                            className="site-button-secondry btn-half"
                                        >
                                            <span>{txt_content_btn}</span>
                                        </NavLink>
                                    </div>
                                    {/* LAYER 7 left dark Block */}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme rev-slider-white-block"
                                        id="slide-73-layer-7"
                                        data-x="['right','right','left','right']"
                                        data-hoffset="['870','570','0','870']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[250,250,250,250]"
                                        data-paddingright="[250,150,150,150]"
                                        data-paddingbottom="[250,250,250,250]"
                                        data-paddingleft="[250,150,250,250]"
                                        style={{
                                            zIndex: 6,
                                            width: 6000,
                                            backgroundColor: "#23252d",
                                            height: "100vh",
                                        }}
                                    />
                                    {/* Border left Part */}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper "
                                        id="slide-73-layer-8"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-visibility="['on','on','off','off']"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 8,
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderLeft: "40px solid #eef1f2",
                                        }}
                                    >
                                        {" "}
                                    </div>
                                    {/* Border bottom Part */}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper "
                                        id="slide-73-layer-7"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-visibility="['on','on','off','off']"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 8,
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderBottom: "80px solid #eef1f2",
                                        }}
                                    >
                                        {" "}
                                    </div>
                                </li>
                            )}
                            {/* SLIDE 2 */}
                            {img2 && (
                                <li
                                    data-index="rs-74"
                                    data-transition="fade"
                                    data-slotamount="default"
                                    data-hideafterloop={0}
                                    data-hideslideonmobile="off"
                                    data-easein="default"
                                    data-easeout="default"
                                    data-masterspeed={300}
                                    data-rotate={0}
                                    data-saveperformance="off"
                                    data-title
                                    data-param1={1}
                                    data-param2
                                    data-param3
                                    data-param4
                                    data-param5
                                    data-param6
                                    data-param7
                                    data-param8
                                    data-param9
                                    data-param10
                                    data-description
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src={img2}
                                        alt=""
                                        data-bgcolor="#f8f8f8"
                                        style={{}}
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                        data-bgparallax="off"
                                        className="rev-slidebg"
                                        data-no-retina
                                    />
                                    {/* LAYER 1  right image overlay dark*/}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                                        id="slide-74-layer-1"
                                        data-x="['right','right','right','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-fontweight="['100','100','400','400']"
                                        data-width="['full','full','full','full']"
                                        data-height="['full','full','full','full']"
                                        data-whitespace="nowrap"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 6,
                                            textTransform: "left",
                                            backgroundColor: "rgba(0,0,0,0.5)",
                                        }}
                                    ></div>
                                    {/* LAYERS 2 number block*/}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme slider-block sx-bg-primary"
                                        id="slide-74-layer-2"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['-220','-220','-220','50']"
                                        data-fontweight="['600','600','600','600']"
                                        data-fontsize="['120','120','80','80']"
                                        data-lineheight="['120','120','80','80']"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[20,20,20,20]"
                                        data-paddingright="[10,10,10,10]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[10,10,10,10]"
                                        style={{
                                            zIndex: 10,
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        02
                                    </div>
                                    {/* LAYER 3  Thin text title*/}
                                    <div
                                        className="tp-caption   tp-resizeme slider-tag-line"
                                        id="slide-74-layer-3"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['-80','-80','-80','170']"
                                        data-fontsize="['64','64','60','40']"
                                        data-lineheight="['74','74','70','50']"
                                        data-width="['700','650','620','380']"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":300,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[20,20,20,0]"
                                        data-paddingbottom="[10,10,10,10]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 10,
                                            fontWeight: 200,
                                            letterSpacing: 10,
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {institucion_iniciales}
                                    </div>
                                    {/* LAYER 4  Bold Title*/}
                                    <div
                                        className="tp-caption   tp-resizeme"
                                        id="slide-74-layer-4"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['10','10','10','230']"
                                        data-fontsize="['64','64','60','40']"
                                        data-lineheight="['74','74','70','50']"
                                        data-width="['700','700','700','700']"
                                        data-height="none"
                                        data-whitespace="normal"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[70,70,70,70]"
                                        data-paddingright="[20,20,20,10]"
                                        data-paddingbottom="[30,30,30,30]"
                                        data-paddingleft="[0,0,0,10]"
                                        style={{
                                            zIndex: 10,
                                            textTransform: "uppercase",
                                            letterSpacing: 10,
                                            whiteSpace: "normal",
                                            fontWeight: 600,
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        {institucion_nombre}
                                    </div>
                                    {/* LAYER 5  Paragraph*/}
                                    <div
                                        className="tp-caption   tp-resizeme"
                                        id="slide-74-layer-5"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['90','90','90','300']"
                                        data-fontsize="['20','20','20','20']"
                                        data-lineheight="['30','30','30','30']"
                                        data-width="['600','600','600','380']"
                                        data-height="none"
                                        data-whitespace="normal"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[120,120,120,120]"
                                        data-paddingright="[20,20,20,20]"
                                        data-paddingbottom="[30,30,30,30]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 10,
                                            whiteSpace: "normal",
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        {txt_content_banner_two}
                                    </div>
                                    {/* LAYER 6  Read More*/}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme"
                                        id="slide-74-layer-6"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['180','180','180','410']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[60,60,60,60]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 9, lineHeight: 30 }}
                                    >
                                        <NavLink
                                            to={"/categoria"}
                                            className="site-button-secondry btn-half"
                                        >
                                            <span>{txt_content_btn}</span>
                                        </NavLink>
                                    </div>
                                    {/* LAYER 7 left dark Block */}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme rev-slider-white-block"
                                        id="slide-74-layer-7"
                                        data-x="['right','right','left','right']"
                                        data-hoffset="['870','570','0','870']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[250,250,250,250]"
                                        data-paddingright="[250,150,150,150]"
                                        data-paddingbottom="[250,250,250,250]"
                                        data-paddingleft="[250,150,250,250]"
                                        style={{
                                            zIndex: 6,
                                            width: 6000,
                                            backgroundColor: "#23252d",
                                            height: "100vh",
                                        }}
                                    />
                                    {/* Border left Part */}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper "
                                        id="slide-74-layer-8"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-visibility="['on','on','off','off']"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 8,
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderLeft: "40px solid #eef1f2",
                                        }}
                                    >
                                        {" "}
                                    </div>
                                    {/* Border bottom Part */}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper "
                                        id="slide-74-layer-7"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-visibility="['on','on','off','off']"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 8,
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderBottom: "80px solid #eef1f2",
                                        }}
                                    >
                                        {" "}
                                    </div>
                                </li>
                            )}
                            {/* SLIDE 3 */}
                            {img3 && (
                                <li
                                    data-index="rs-75"
                                    data-transition="fade"
                                    data-slotamount="default"
                                    data-hideafterloop={0}
                                    data-hideslideonmobile="off"
                                    data-easein="default"
                                    data-easeout="default"
                                    data-masterspeed={300}
                                    data-rotate={0}
                                    data-saveperformance="off"
                                    data-title
                                    data-param1={1}
                                    data-param2
                                    data-param3
                                    data-param4
                                    data-param5
                                    data-param6
                                    data-param7
                                    data-param8
                                    data-param9
                                    data-param10
                                    data-description
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src={img3}
                                        alt=""
                                        data-bgcolor="#f8f8f8"
                                        style={{}}
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                        data-bgparallax="off"
                                        className="rev-slidebg"
                                        data-no-retina
                                    />
                                    {/* LAYER 1  right image overlay dark*/}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                                        id="slide-75-layer-1"
                                        data-x="['right','right','right','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-fontweight="['100','100','400','400']"
                                        data-width="['full','full','full','full']"
                                        data-height="['full','full','full','full']"
                                        data-whitespace="nowrap"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 6,
                                            textTransform: "left",
                                            backgroundColor: "rgba(0,0,0,0.5)",
                                        }}
                                    ></div>
                                    {/* LAYERS 2 number block*/}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme slider-block sx-bg-primary"
                                        id="slide-75-layer-2"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['-220','-220','-220','50']"
                                        data-fontweight="['600','600','600','600']"
                                        data-fontsize="['120','120','80','80']"
                                        data-lineheight="['120','120','80','80']"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[20,20,20,20]"
                                        data-paddingright="[10,10,10,10]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[10,10,10,10]"
                                        style={{
                                            zIndex: 10,
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        03
                                    </div>
                                    {/* LAYER 3  Thin text title*/}
                                    <div
                                        className="tp-caption   tp-resizeme slider-tag-line"
                                        id="slide-75-layer-3"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['-80','-80','-80','170']"
                                        data-fontsize="['64','64','60','40']"
                                        data-lineheight="['74','74','70','50']"
                                        data-width="['700','650','620','380']"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":300,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[20,20,20,0]"
                                        data-paddingbottom="[10,10,10,10]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 10,
                                            fontWeight: 200,
                                            letterSpacing: 10,
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {institucion_iniciales}
                                    </div>
                                    {/* LAYER 4  Bold Title*/}
                                    <div
                                        className="tp-caption   tp-resizeme"
                                        id="slide-75-layer-4"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['10','10','10','230']"
                                        data-fontsize="['64','64','60','40']"
                                        data-lineheight="['74','74','70','50']"
                                        data-width="['700','700','700','700']"
                                        data-height="none"
                                        data-whitespace="normal"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[70,70,70,70]"
                                        data-paddingright="[20,20,20,10]"
                                        data-paddingbottom="[30,30,30,30]"
                                        data-paddingleft="[0,0,0,10]"
                                        style={{
                                            zIndex: 10,
                                            textTransform: "uppercase",
                                            letterSpacing: 10,
                                            whiteSpace: "normal",
                                            fontWeight: 600,
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        {institucion_nombre}
                                    </div>
                                    {/* LAYER 5  Paragraph*/}
                                    <div
                                        className="tp-caption   tp-resizeme"
                                        id="slide-75-layer-5"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['90','90','90','300']"
                                        data-fontsize="['20','20','20','20']"
                                        data-lineheight="['30','30','30','30']"
                                        data-width="['600','600','600','380']"
                                        data-height="none"
                                        data-whitespace="normal"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":200,"speed":750,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"sfxcolor":"#ffffff","sfx_effect":"blocktoleft","frame":"999","to":"z:0;","ease":"Power4.easeOut"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[120,120,120,120]"
                                        data-paddingright="[20,20,20,20]"
                                        data-paddingbottom="[30,30,30,30]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 10,
                                            whiteSpace: "normal",
                                            color: "#fff",
                                            fontFamily: '"Poppins", sans-serif',
                                        }}
                                    >
                                        {txt_content_banner_three}
                                    </div>
                                    {/* LAYER 6  Read More*/}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme"
                                        id="slide-75-layer-6"
                                        data-x="['left','left','left','center']"
                                        data-hoffset="['60','60','30','0']"
                                        data-y="['middle','middle','middle','top']"
                                        data-voffset="['180','180','180','420']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','center']"
                                        data-paddingtop="[60,60,60,60]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 9, lineHeight: 30 }}
                                    >
                                        <NavLink
                                            to={"/categoria"}
                                            className="site-button-secondry btn-half"
                                        >
                                            <span>{txt_content_btn}</span>
                                        </NavLink>
                                    </div>
                                    {/* LAYER 7 left Dark Block */}
                                    <div
                                        className="tp-caption rev-btn  tp-resizeme rev-slider-white-block"
                                        id="slide-75-layer-7"
                                        data-x="['right','right','left','right']"
                                        data-hoffset="['870','570','0','870']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-type="button"
                                        data-responsive_offset="on"
                                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[250,250,250,250]"
                                        data-paddingright="[250,150,150,150]"
                                        data-paddingbottom="[250,250,250,250]"
                                        data-paddingleft="[250,150,250,250]"
                                        style={{
                                            zIndex: 6,
                                            width: 6000,
                                            backgroundColor: "#23252d",
                                            height: "100vh",
                                        }}
                                    />
                                    {/* Border left Part */}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper "
                                        id="slide-75-layer-8"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-visibility="['on','on','off','off']"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 8,
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderLeft: "40px solid #eef1f2",
                                        }}
                                    >
                                        {" "}
                                    </div>
                                    {/* Border bottom Part */}
                                    <div
                                        className="tp-caption tp-shape tp-shapewrapper "
                                        id="slide-75-layer-7"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['0','0','0','0']"
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-visibility="['on','on','off','off']"
                                        data-type="shape"
                                        data-basealign="slide"
                                        data-responsive_offset="off"
                                        data-responsive="off"
                                        data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{
                                            zIndex: 8,
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderBottom: "80px solid #eef1f2",
                                        }}
                                    >
                                        {" "}
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="tp-bannertimer" />
                        {/* left side social bar*/}
                        <div className="slide-left-social">
                            <ul className="clearfix">
                                <li>
                                    <a
                                        href={institucion_youtube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sx-title-swip"
                                        data-hover="YouTube"
                                    >
                                        Youtube
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={institucion_twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sx-title-swip"
                                        data-hover="Twitter"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={institucion_facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sx-title-swip"
                                        data-hover="Facebook"
                                    >
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
Slider4.propTypes = {
    institucion: PropTypes.object,
};
export default Slider4;
