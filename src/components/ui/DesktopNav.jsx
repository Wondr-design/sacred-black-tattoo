import React from 'react';
import { Link } from 'react-router-dom';
import sbtLogo from '@/assets/logo.svg';
import sbtText from '@/assets/sbt.svg';

const DesktopNav = () => {
    return (
        <>
            <div className="border-b-1">
                <div className=" nav_contain flex justify-between">
                    <div>
                        <p className="nav">
                            15 Hampton Court <br /> Peterborough
                            <br /> PE3 7JB
                            <br />
                            info@sacredblacktattoo.com
                            <br /> 0173 326 8823
                        </p>
                    </div>
                    <div>
                        <Link to="/" className="nav_logo">
                            <img
                                src={sbtLogo}
                                alt="sbt logo"
                                width="80rem"
                            />{' '}
                        </Link>
                    </div>
                    <div>
                        <img src={sbtText} alt="sbt logo" width="240rem" />
                    </div>
                </div>
            </div>
            <div className="nav_menu_wrap border-b-1">
                <div className="nav_menu_wrap">
                    <Link to={'/info'} className="nav_item">
                        info
                    </Link>
                    <Link to={'/artists'} className="nav_item">
                        artist
                    </Link>
                    <Link to={'/gallery'} className="nav_item">
                        gallery
                    </Link>
                    <Link to={'/faq'} className="nav_item">
                        FAQ
                    </Link>
                    <Link to={'/contact'} className="nav_item">
                        contact
                    </Link>
                </div>
            </div>
        </>
    );
};
export default DesktopNav;
