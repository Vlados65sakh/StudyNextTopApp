import {getMenu} from "@/api/menu";

export  async function Menu () {

    const menu = await getMenu(0);
    // console.log('I am home');
    return (
        <main >
                <div>{menu.length}</div>
        </main>
    );
}