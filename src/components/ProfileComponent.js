import React from 'react';
import Prototype from 'prop-types';

import Icon from '../images/logo.png';

const ProfileComponent = (props) => {
    return (
        <div className='userprofile'>
            <div className='userimgdiv'>
                <img src={Icon} width='200px' />
            </div>
            <div className='userinfodiv'>
                <div>
                    <span>Email : </span> {props.data.Email}
                </div>
                <div>
                    <span>FirstName : </span> {props.data.FirstName}
                </div>
                <div>
                    <span>LastName : </span> {props.data.LastName}
                </div>
                <div>
                    <span>Born : </span> {props.data.Born}
                </div>
                <div>
                    <button onClick={props.logout}>Log out</button>
                </div>
            </div>
        </div>
    );
};

ProfileComponent.propTypes = {
    data: Prototype.object,
    logout: Prototype.func
};

export default ProfileComponent;