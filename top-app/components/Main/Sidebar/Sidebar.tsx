import {SidebarProps} from "./Sidebar.props";
import {JSX} from "react";
// import styles from './Sidebar.module.css';

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};