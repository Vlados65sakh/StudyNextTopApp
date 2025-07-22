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