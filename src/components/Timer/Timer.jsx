import React, {useEffect} from 'react';
import Countdown from 'react-countdown';
import styles from './Timer.module.scss';
import classNames from 'classnames';

export default function Timer({ time }) {
    const Completionist = () => <span>Live Auction finished</span>;

    const liveIcon = <p className={classNames(styles.liveIcon)}>
        <span>•</span> LIVE
    </p>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <div className={classNames(styles.counterContainer)}>
            <div className={classNames(styles.badge)}>
                {liveIcon}
            </div>

            <div className={classNames(styles.counter)}>
                <Countdown
                    date={Date.now() + time}
                    renderer={renderer}
                />
            </div>
        </div>

    );


}