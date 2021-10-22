import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";
import defaultImg from "./image/avatar.png";


export default function Avatar({ url, size = 90, verified = false }) {
    const [avatarPic, setAvatarPic] = useState(url ? url : defaultImg.src);
    const [badgeSize, badgeSizeSet] = useState(size - 30);

    return (
        <div className={classNames(styles.avatar)} >
            <img className={classNames(styles.avatarimage)}  style={{ width: size, height: size }} src={avatarPic}  />
            {verified ? <img className={classNames(styles.badge)} style={{width:badgeSize, height:badgeSize}}/> : null}
        </div>
    )
};