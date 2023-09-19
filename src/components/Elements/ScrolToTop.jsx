

const ScrolToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Para que el desplazamiento sea suave
        });
    };
    return (
        <button className="scroltop" onClick={scrollToTop}><span className="fa fa-angle-up  relative" id="btn-vibrate" /></button>
    );
};

export default ScrolToTop;
