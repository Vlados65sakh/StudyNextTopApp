'use client';

import {Advantages, HhData, Htag, Sort, Tag} from '../../components';
import {TopPageComponentProps} from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import {JSX, useReducer} from 'react';
import {TopLevelCategory} from "@/interfaces/page.interface";
import {SortEnum} from "@/components/Sort/Sort.props";
import {sortReducer} from "@/components/TopPageComponent/sort.reducer";
import {Product} from "@/components/Product/Product";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
    const setSort = (sort: SortEnum) => {
        dispathSort({type: sort});
    };

    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'grey'} size={'s'}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>

            <div  role='list'>
                {sortedProducts && sortedProducts.map(p => (<Product role='listitem' key={p._id} product={p} />))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                <Tag color={'red'} size={'m'}>hh.ru</Tag>
            </div>

            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData
                _id={page._id}
                count={page.hh!.count}
                juniorSalary={page.hh!.juniorSalary}
                middleSalary={page.hh!.middleSalary}
                seniorSalary={page.hh!.seniorSalary}
                updatedAt={page.updatedAt}
            />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag={"h2"}>Преимущества</Htag>
                <Advantages advantages={page.advantages}/>
            </>
            }
            {/*Это можно сделать через  https://www.npmjs.com/package/html-react-parser
            Я про блок с seo*/}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag={"h2"}>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color={"primary"}>{t}</Tag>)}
        </div>
    );
};