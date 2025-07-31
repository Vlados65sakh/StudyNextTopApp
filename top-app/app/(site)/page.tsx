import styles from './page.module.css';
import {Menu} from "@/app/(site)/components/menu";
import React from "react";


/**
 * Это сделанно для Page Router
 */
// const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
//     firstCategory: 0
// });

export default async function Home() {

     // console.log('I am home');
    return (
        <main className={styles.main}>
            Главная страница
            <Menu/>
        </main>
    );
}
