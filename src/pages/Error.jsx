import { NavLink } from 'react-router-dom';
import Header4 from '../components/Common/Header4';
import Footer from '../components/Common/Footer';
import Banner from '../components/Elements/Banner';
import bnrimg from "../images/banner/8.jpg"
import imgError from "../images/error-404.png"

const Error = () =>  {
    return (
        <>
            <Header4 />
            <div className="page-content">
                <Banner title="Error 404" pagename="Error" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
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
                                    <p>The Page Requested Could not be foundwere working on it</p>
                                    <NavLink to={"/"} title="Back to home" className="site-button btn-half"><span> Back to home</span></NavLink>
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
};

export default Error;