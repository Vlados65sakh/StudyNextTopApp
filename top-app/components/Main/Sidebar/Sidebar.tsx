import {SidebarProps} from "./Sidebar.props";
import {JSX} from "react";
import Menu from "@/components/Menu/Menu";

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu/>
        </div>
    );
};