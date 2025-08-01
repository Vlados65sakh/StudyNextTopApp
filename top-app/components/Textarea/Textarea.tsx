import {TextareaProps} from "./Textarea.props";
import {JSX} from "react";
import cn from "classnames";
import styles from "./Textarea.module.css";

export const Textarea = ({className, ...props}: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} {...props}/>
    );
};