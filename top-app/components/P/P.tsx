import {PProps} from "./P.props";
import {JSX} from "react";
import styles from './P.module.css';

export const P = ({size = 'm', children}: PProps): JSX.Element => {
    switch (size){
        case "s":
            return <h1 className={styles.s}>{children}</h1>;
        case "m":
            return <h2 className={styles.m}>{children}</h2>;
        case "l":
            return <h3 className={styles.l}>{children}</h3>;
        default:
            return <></>;
    }
};