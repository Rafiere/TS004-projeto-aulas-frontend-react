/**
 * A API de contexto é utilizada para compartilharmos informações entre várias
 * páginas, componentes ou qualquer coisa de nossa aplicação.
 */

import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData { //Tudo o que está dentro dessa interface será compartilhado por esse contexto.
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome('Lucas')
        }, 1000);
    });

    const handleLogout = useCallback(() => {

        console.log('O logout foi executado!')
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{
            nomeDoUsuario: 'Lucas',
            logout: handleLogout
        }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );

}