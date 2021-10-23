import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Card.module.scss';
import classNames from 'classnames';
import Avatar from '../avatar/Avatar';
import { Card as CardContainer } from '@mui/material';
import { CardMedia } from '@mui/material';
import mediaImage from './image/nft.jpg';
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Timer from '../Timer/Timer';

export default function Card({ name, user, likes = 0, mediaUrl, price, currency, timeLeft = 0 }) {

    const [img, setImage] = useState(mediaUrl ? mediaUrl : mediaImage.src);
    const [millifiedLikes, setLikes] = useState(millify(likes));
    const [countDownTime, setCountDownTimer] = useState(timeLeft !==0 || timeLeft === undefined ? <Timer time={timeLeft} />: null);

    return (

        <CardContainer sx={{ maxWidth: 270 }} style={ countDownTime ? {backgroundColor: '#1A2E2D'} : {backgroundColor: '#181828'}}>
            <Avatar url={user.avatarUrl} size={50} verified={user.verified} />
            <CardMedia
                component="img"
                image={img}
                className={classNames(styles.cardImage)}>

            </CardMedia>
            {countDownTime}

            <div className={classNames(styles.infoContainer)}>
                <div>
                    <p className={classNames(styles.Card_title)}>{name}</p>
                    <p className={classNames(styles.price)}>~{price} {currency}</p>
                </div>
                <p className={classNames(styles.likes)}> <FavoriteIcon fontSize={'small'} />
                    {millifiedLikes}</p>
            </div>

        </CardContainer>

    )
}