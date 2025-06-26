import styles from "@/app/(site)/page.module.css";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ['latin'] });

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    return (
        <html lang="ru">
        <body className={inter.className}>
        <nav className={styles.nav}>
            <ul>
                <li>Курсы</li>
                <li>Для детей</li>
                <li>О нас</li>
            </ul>
        </nav>
        {children}
        </body>
        </html>
    );
}
