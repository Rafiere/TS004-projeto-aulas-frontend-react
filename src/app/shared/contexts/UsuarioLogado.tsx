/**
 * A API de contexto é utilizada para compartilharmos informações entre várias
 * páginas, componentes ou qualquer coisa de nossa aplicação.
 */

import { createContext } from "react";

interface IUsuarioLogadoContextData { //Tudo o que está dentro dessa interface será compartilhado por esse contexto.
    nomeDoUsuario: string;
}

const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Lucas'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );

}