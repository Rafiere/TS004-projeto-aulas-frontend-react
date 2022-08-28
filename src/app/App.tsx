import React from 'react';
import {Routes} from "./routes";
import { UsuarioLogadoProvider } from './shared/contexts';

/**
 * Estamos compartilhando o nome do usuário logado com todas as rotas da
 * aplicação, assim, através desse provider, podemos obter o nome do usuário
 * que está logado.
 */

export const App = () => {
  return (
      <UsuarioLogadoProvider>
        <Routes/>
      </UsuarioLogadoProvider>
  );
}

export default App;
