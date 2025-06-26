import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    // Здесь цвета задаются primary и ghost
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}

