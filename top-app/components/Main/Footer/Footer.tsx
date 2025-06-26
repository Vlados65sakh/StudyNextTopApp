import {FooterProps} from "./Footer.props";
import {JSX} from "react";
// import styles from './Footer.module.css';

export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};