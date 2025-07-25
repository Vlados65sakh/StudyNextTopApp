'use client';

import {HhData, Htag, Tag} from '../../components';
import {TopPageComponentProps} from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import {JSX} from 'react';
import {TopLevelCategory} from "@/interfaces/page.interface";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'grey'} size={'s'}>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>

            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                 <Tag color={'red'} size={'m'}>hh.ru</Tag>
            </div>

            {firstCategory == TopLevelCategory.Courses && <HhData
                _id={page._id}
                count={page.hh!.count}
                juniorSalary={page.hh!.juniorSalary}
                middleSalary={page.hh!.middleSalary}
                seniorSalary={page.hh!.seniorSalary}
                updatedAt={page.updatedAt}
            />}
        </div>
    );
};