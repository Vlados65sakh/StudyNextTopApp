// import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import {cache} from 'react';
import {getPage, getProduct} from '@/api/page';
import {getMenu} from '@/api/menu';
import {ProductModel} from "@/interfaces/product.interface";
import {TopPageComponent} from "@/components";
import {firstLevelMenu} from "@/helpers/helpers";

interface AliasParams {
    alias: string
}

type Props = { params: Promise<AliasParams> };

const cachedGetPage = cache(getPage);
const cachedGetProduct = cache(getProduct);

export async function generateStaticParams(): Promise<AliasParams[]> {
    // const secondLevelMenu: MenuItem[][] = [];
    let paths: {type: string, alias: string }[] = [];

    for (const m of firstLevelMenu) {
        const  menu  = await getMenu(m.id);
        console.log(menu.flatMap(s => s.pages.map(p => {type: m.route })));
        // paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    // console.log(paths);



    // for(const m of firstLevelMenu){
    //     const secondMenu = await getMenu(m.id);
    //     // secondLevelMenu.push(secondMenu);
    //
    // }
    //
    // // const thirdLevelMenu = [];
    //
    // for(const sm of secondLevelMenu) {
    //     console.log(sm);

        // for(const fm of sm){
        //     // const thirdMenu = await getMenu(fm);
        //     // thirdLevelMenu.push(thirdMenu);
        //     // console.log(fm);
        // }
    // }


    // console.log(secondLevelMenu);

    const menu = await getMenu(3);
    // console.log(menu.map(item => item.pages, ));

    return menu.flatMap(item =>
        item.pages.map(p => ({alias: p.alias}))
    );
}

// Компонент страницы
export default async function PageProducts({params}: Props) {
    const {alias} = await params;
    const page = await cachedGetPage(alias);

    if (!page) {
        notFound();
    }
    const products: ProductModel[] | null = await cachedGetProduct(page);

    return (
        <TopPageComponent firstCategory={page.firstCategory} page={page} products={products ?? []}/>
    );
}

// Генерация метаданных
// export async function generateMetadata(
// 	{ params }: Props,
// 	// parent: ResolvingMetadata
// ): Promise<Metadata | null> {
// 	const { alias } = await params;
//
// 		const page = await cachedGetPage(alias);
// 		if (!page) {
// 			notFound(); // вызывает 404 и прекращает рендер segment
// 		}
// 		return {
// 			title: page.metaTitle ?? undefined,
// 		};
//
// }



