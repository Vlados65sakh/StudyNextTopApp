import {FirstLevelMenuItem} from "@/interfaces/menu.interface";
import CoursesIcon from "@/helpers/icons/courses.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import ServicesIcon from "@/helpers/icons/services.svg";
import ProductsIcon from "@/helpers/icons/product.svg";
import BooksIcon from "@/helpers/icons/books.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'products', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <ProductsIcon/>, id: TopLevelCategory.Books},
    {route: 'courses', name: 'Товары', icon: <BooksIcon/>, id: TopLevelCategory.Products}
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
};