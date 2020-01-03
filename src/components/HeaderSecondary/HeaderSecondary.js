import React from "react"
import userlogo from "img/vector/userlogo.svg";
import {UserLogo} from "./UserLogo"
import {UserMenu} from "./UserMenu"


export const HeaderSocondary = () => (
    <div className='nav navbar-secondary'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4 col-sm-4 col-md-3 col-lg-2'>
                    <UserLogo img={userlogo}/>
                </div>
                <div className='col-6 col-sm-6 col-md-7 col-lg-8'>
                    <div className='secondary-header-text'>
                        <h5 className='text-white'>
                            Herzlich Willcommen, Derya Bulut!
                        </h5>
                    </div>
                </div>
                <div className='col-2'>
                    <UserMenu/>
                </div>
            </div>
        </div>
    </div>
)
