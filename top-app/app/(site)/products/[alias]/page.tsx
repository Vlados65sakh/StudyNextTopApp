// import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import {cache} from 'react';
import {getPage, getProduct} from '@/api/page';
import {getMenu} from '@/api/menu';
import {ProductModel} from "@/interfaces/product.interface";
import {TopPageComponent} from "@/components";

interface AliasParams {
    alias: string
}

type Props = { params: Promise<AliasParams> };

const cachedGetPage = cache(getPage);
const cachedGetProduct = cache(getProduct);

export async function generateStaticParams(): Promise<AliasParams[]> {
    const menu = await getMenu(0);
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



