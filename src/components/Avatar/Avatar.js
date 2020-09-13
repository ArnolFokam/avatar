import React from "react";
import Cropper from "react-cropper";

//  Datas
import avatarImg from "../../images/avatar.png";

//  Styles
import useStyles from "./Style";

const Avatar = () => {
    const classes = useStyles();

    return (
        <div>
            <img src={avatarImg} alt="avatar" className={classes.image} />
        </div>
    );
};

export default Avatar;