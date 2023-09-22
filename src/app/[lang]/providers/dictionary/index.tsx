'use client';

import { createContext, useContext } from "react";

interface Props {
    dictionary: any;
    children: React.ReactNode;
}

interface DictContextData {
    dictionary: any
}

const DictContext = createContext<DictContextData | undefined>(undefined);

export const useDictContext = () => {
    const context = useContext(DictContext);
    if (!context) {
        throw new Error('useDictContext must be used within a DictProvider');
    }
    return context;
}

export default function DictProvider({ dictionary, children }: Props) {
    return <DictContext.Provider value={{dictionary}}>
        {children}
    </DictContext.Provider>
}

