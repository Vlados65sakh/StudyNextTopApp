'use client';

import {createContext} from "react";

const SidebarContext = createContext({});

export function Sidebar(){
    return(
        <SidebarContext.Provider value={{}}>
            <div>пфпфпф</div>
        </SidebarContext.Provider>
    );
}