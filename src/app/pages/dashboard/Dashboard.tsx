import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UsuarioLogadoContext } from '../../shared/contexts';

export const Dashboard = () => {

    const counterRef = useRef({ //O "useRef()" não é um estado, assim, o valor dele será alterado mas o componente não será recarregado.
        counter: 0              //Dessa forma, basicamente, quando clicarmos em somar, o contador não será atualizado, pois esse componente não será renderizado novamente.
                                //O "useRef()" é útil para isso, ou seja, quando desejamos obter um valor mas não vamos utilizá-lo para renderizar a página.
    })

    const usuarioLogadoContext = useContext(UsuarioLogadoContext); //Esse hook permite o acesso a qualquer um dos atributos que estão nesse contexto.

    return (
        <div>
            <p>Dashboard</p>

            <p>{usuarioLogadoContext.nomeDoUsuario}</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Somar</button>

            <Link to="/entrar">Login</Link>
        </div>
    );
}