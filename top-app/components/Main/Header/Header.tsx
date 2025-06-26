import {HeaderProps} from "./Header.props";
import {JSX} from "react";
// import styles from './Footer.module.css';

export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};