import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
    children: ReactNode;
    // Здесь цвета задаются primary и ghost
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}

