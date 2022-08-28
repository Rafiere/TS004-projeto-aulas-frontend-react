/**
 * Dentro desse arquivo, criaremos um hook personalizado.
 * 
 * Esse hook estará acoplado ao contexto do UsuarioLogado.
 *
 * Um React Hook customizado nada mais é do que uma função que, dentro
 * dela, estamos utilizando um Hook padrão do React.
 * 
 * Sempre que temos que utilizar o contexto, temos que importar tanto o "useContext" quanto
 * o "UsuarioLogadoContext". Com esse hook personalizado, basta importarmos apenas esse
 * hook personalizado, ou seja, isso diminuirá a quantidade de código que temos que
 * utilizar para utilizar esse hook.
 */

import { useContext } from "react"
import { UsuarioLogadoContext } from "../contexts"

export const useUsuarioLogado = () => {

    const context = useContext(UsuarioLogadoContext);

    return context;
}