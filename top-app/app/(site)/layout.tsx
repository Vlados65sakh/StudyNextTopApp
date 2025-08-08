// import type {Metadata} from "next";
import "./globals.css";
import {Footer, Header, Sidebar, Up} from "@/components";
import styles from './page.module.css';
import {getMenu} from "@/api/menu";
import {AppContextProvider} from "@/context/app.context";
import {Metadata} from "next";


export async function generateMetadata(): Promise<Metadata> {
    //...
    return {
        title: 'MyTop - наш лучший топ',
    };
}

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {

    const firstCategory = 0;
    const menu = await getMenu(firstCategory);

    return (
        <html lang="ru">

        <head/>
        <body>
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
            <div className={styles.wrapper}>
                <Header className={styles.header}/>
                <Sidebar className={styles.sidebar}/>
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer}/>
                <Up/>
            </div>
        </AppContextProvider>
        </body>
        </html>
    );
}
