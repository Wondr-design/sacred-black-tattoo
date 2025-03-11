import React from 'react';
import sbtLogo from '@/assets/logo.svg';
import sbtText from '@/assets/sbt.svg';

const Nav = () => {
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
                        <img src={sbtLogo} alt="sbt logo" width="80rem" />
                    </div>
                    <div>
                        <img src={sbtText} alt="sbt logo" width="240rem" />
                    </div>
                </div>
            </div>
            <div className="nav_menu_wrap border-b-1">
                <div className="nav_menu_wrap">
                    <div className="nav_item">info</div>
                    <div className="nav_item">artist</div>
                    <div className="nav_item">gallery</div>
                    <div className="nav_item">FAQ</div>
                    <div className="nav_item">contact</div>
                </div>
            </div>
        </>
    );
};
export default Nav;
