import {AdvantagesProps} from "./Advantages.props";
import {JSX} from "react";
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon/>
                    <div className={styles.title}>{a.title}</div>
                    <div className={styles.vline}/>
                    <div>{a.description}</div>
                </div>
            ))}
            </>
        // <div className={styles.upper}>
        //    <div className={styles.heading}>Преимущества</div>
        //
        //     <div className={styles.wrapper}>
        //         <GalochkaIcon/>
        //         <div className={styles.title}>Мобильность специалиста</div>
        //     </div>
        //
        //     <div className={styles.text}>
        //         <div className={styles.title}>Выше указаны программы Adobe InDesign, Adobe Illustrator,
        //             Corel Draw и ими можно успешно пользоваться дома или в дороге.
        //             Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис.
        //             В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</div>
        //     </div>
        //
        //     <div className={styles.wrapper}>
        //         <GalochkaIcon/>
        //         <div className={styles.title}>Индивидуальный график работы</div>
        //     </div>
        //
        //     <div className={styles.text}>
        //         <div className={styles.title}>Если освоить программы и найти заказы по графическому дизайну,
        //             вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека вечером продуктивность
        //             выше, надо этим пользоваться.</div>
        //     </div>
        //
        //     <div className={styles.wrapper}>
        //         <GalochkaIcon/>
        //         <div className={styles.title}>Контроль дохода</div>
        //     </div>
        //
        //     <div className={styles.text}>
        //         <div className={styles.title}>Прохождения собеседований в крупные компании могут принести свои плоды.
        //             В случае с профессией графического дизайна вполне возможна работа на рынке фриланса.
        //             Специалист сам выбирает регион, с кем работать и сколько работать.
        //             В связи с этим получится точно контролировать доход в большую или меньшую сторону.</div>
        //     </div>
        //
        //     <div className={styles.wrapper}>
        //         <GalochkaIcon/>
        //         <div className={styles.title}>Выбор работы</div>
        //     </div>
        //
        //     <div className={styles.text}>
        //         <div className={styles.title}>Пользователи сети, которые знают Photoshop,
        //             не обязательно должны выполнять одну работу. Профессия графического
        //             дизайнера дает возможность отойти от обычных проектов и повысить скил в других компьютерных программах.</div>
        //     </div>
        //
        //     <div className={styles.text}>
        //         При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах.
        //         Отличие профессиональных дизайнеров заключается в том, что они гибкие.
        //         Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.
        //     </div>
        //
        //     <div className={styles.heading}>
        //         Получаемые навыки
        //     </div>
        //     <div className={styles.tag}>
        //     <Tag color={"primary"}>Работа в Photoshop</Tag>
        //     <Tag color={"primary"}>Подготовка макетов</Tag>
        //     <Tag color={"primary"}>Графический дизайн</Tag>
        //     <Tag color={"primary"}>Web дизайн</Tag>
        //     <Tag color={"primary"}>Дизайн сайтов</Tag>
        //     </div>
        // </div>
    );
};