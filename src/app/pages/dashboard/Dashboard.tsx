import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {

    const counterRef = useRef({ //O "useRef()" não é um estado, assim, o valor dele será alterado mas o componente não será recarregado.
        counter: 0              //Dessa forma, basicamente, quando clicarmos em somar, o contador não será atualizado, pois esse componente não será renderizado novamente.
                                //O "useRef()" é útil para isso, ou seja, quando desejamos obter um valor mas não vamos utilizá-lo para renderizar a página.
    })

    return (
        <div>
            <p>Dashboard</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Somar</button>

            <Link to="/entrar">Login</Link>
        </div>
    );
}