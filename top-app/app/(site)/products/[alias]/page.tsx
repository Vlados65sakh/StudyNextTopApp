// import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';

interface AliasParams { alias: string }
type Props = { params: Promise<AliasParams> };

const cachedGetPage = cache(getPage);

export async function generateStaticParams(): Promise<AliasParams[]> {
	const menu = await getMenu(0);
	return menu.flatMap(item =>
		item.pages.map(p => ({ alias: p.alias }))
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

// Компонент страницы
export default async function PageProducts({ params }: Props) {
	const { alias } = await params;
	const page = await cachedGetPage(alias);

	if (!page) {
		notFound();
	}
	return (
		<div>
			<h1>{page.title}</h1>
		</div>
	);
}

// export const dynamicParams = true;
// export const revalidate = 60; // ISR: обновление каждые 60 сек
