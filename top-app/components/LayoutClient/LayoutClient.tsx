'use client';

import {Footer, Header, Sidebar, Up} from "@/components";
import styles from './LayoutClient.module.css';

import cn from "classnames";
import React, {KeyboardEvent, useRef, useState} from "react";
import {LayoutClientProps} from './LayoutClient.props';

export function LayoutClient({children}: LayoutClientProps) {
    const bodyRef = useRef<HTMLDivElement>(null);
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState(false);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };


    return (

        <div className={styles.wrapper}>
            <a
                onFocus={() => setIsSkipLinkDisplayed(true)}
                tabIndex={1}
                className={cn(styles.sciplink, {
                    [styles.displayed]: isSkipLinkDisplayed
                })}
                onKeyDown={skipContentAction}
            >
                Сразу к содержанию
            </a>

            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body} ref={bodyRef} tabIndex={0} >
                {children}
            </div>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
    );
}

