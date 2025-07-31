'use client';

import {useSearchParams} from "next/navigation";


export default function SearchPage() {
    const searchParams = useSearchParams();
    const q = searchParams.get('q') || '';

    return (
        <div>
            <h1>Результаты поиска</h1>
            <p>Вы искали: {q}</p>
        </div>
    );
}