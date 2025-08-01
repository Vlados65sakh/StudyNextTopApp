'use client';

import {SearchProps} from './Search.props';
import React, {JSX, useState} from 'react';
import cn from 'classnames';
import styles from './Search.module.css';
import {Button, Input} from '@/components';
import GlassIcon from './glass.svg';
import {useRouter} from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push( `/search?q=${search}` );
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder={"Поиск..."}
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance={"primary"}
                className={styles.button}
                onClick={goToSearch}
            >
                <GlassIcon/>

            </Button>
        </div>
    );
};