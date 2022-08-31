// import { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useUsuarioLogado } from '../../shared/hooks';

import React, { useCallback, useDebugValue, useEffect, useState } from "react";
import { ApiException } from "../../shared/services/api/ApiException";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasService";

export const Dashboard = () => {

    // const counterRef = useRef({ //O "useRef()" não é um estado, assim, o valor dele será alterado mas o componente não será recarregado.
    //     counter: 0              //Dessa forma, basicamente, quando clicarmos em somar, o contador não será atualizado, pois esse componente não será renderizado novamente.
    //                             //O "useRef()" é útil para isso, ou seja, quando desejamos obter um valor mas não vamos utilizá-lo para renderizar a página.
    // })

    // const {nomeDoUsuario, logout } = useUsuarioLogado(); //Esse hook permite o acesso a qualquer um dos atributos que estão nesse contexto.

    //O "{}" dentro do HTML significa que inseriremos um código em TS dentro desse código HTML.

    //Tudo que precisar de uma interação, ou seja, de uma modificação em nossa
    //interface, utilizaremos o "useState()".

    const [lista, setLista] = useState<ITarefa[]>([]); //Estamos passando três valores iniciais para essa lista.

    useEffect(() => {

        TarefasService.getAll().then((result) => { //O resultado será uma "ApiException" ou uma lista de tarefas.
            
            //Essa função será executada quando a consulta for finalizada, ou seja, quando a promise for resolvida.

            if(result instanceof ApiException){ //Estamos tratando um possível erro.
                alert(result.message)
            }else{
                setLista(result);
            }

        }); //O "then()" trata uma promise. O método "getAll()" devolverá uma promise pois ele é assíncrono.
    }, [])

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((evento) => { //Quando qualquer tecla for pressionada nesse input, essa função será ativada.
        if(evento.key === 'Enter'){
         
            if(evento.currentTarget.value.length === 0){ //Se esse valor for igual a zero, isso significa que o usuário não digitou nada no input.
                return;
            }

            if(evento.currentTarget.value.trim().length === 0){ //Vamos verificar se, sem os espaços no input do usuário, a quantidade de caracteres no input será maior que zero. Se for igual a zero, isso significa que o usuário digitou apenas espaços em branco, e o software não pode permitir isso.
                return;
            }

            const novoValor = evento.currentTarget.value;
            evento.currentTarget.value = ''; //Estamos limpando o valor que foi digitado após atribuirmos esse valor em uma variável.

            if(lista.some((itemDeLista) => itemDeLista.title === novoValor)){ //Estamos impedindo que valores repetidos sejam adicionados na lista.
                return;
            }

            TarefasService.create({ //Estamos criando uma tarefa em nosso banco de dados.
                title: novoValor,
                isCompleted: false
            }).then((result) => {

                if(result instanceof ApiException){
                    
                    alert(result.message)
                } else {
                    setLista((listaAntiga) => {
        
                        return [...listaAntiga, {
                            id: listaAntiga.length,
                            title: novoValor,
                            isCompleted: false
                        }]; //Estamos adicionando o novo elemento na lista antiga.
                    });
                }
            });
        }

    }, [])

    //RESOLVER BUG ABAIXO. VERIFICAR O QUE EU DIGITEI ERRADO E TERMINAR A AULA.

    return (
        <div>
            <p>Lista</p>

            <input
                onKeyDown={handleInputKeyDown}
            />

            <p>Quantidade de itens selecionados: {lista.filter((itemDeLista) => itemDeLista.isCompleted).length}</p>

            <ul>
                {lista.map((itemDeLista) => {
                    return <li key={itemDeLista.id}>
                    <input type="checkbox"
                           onChange={() => {
                                setLista(listaAntiga => {
                                    return listaAntiga.map(itemDeListaAntigo => {
                                        
                                        const isNovoSelecionado = itemDeListaAntigo.title === itemDeLista.title 
                                        ? !itemDeListaAntigo.isCompleted 
                                        : itemDeListaAntigo.isCompleted;
                                        
                                        return {
                                            ...itemDeListaAntigo,
                                            isSelected: isNovoSelecionado,
                                        };
                                    });
                                });
                           }}
                           />
                           {itemDeLista.title}
                    </li>;
                })}
            </ul>


            {/* <p>{nomeDoUsuario}</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Somar</button>
            
            <button onClick={logout}>Logout</button> */}

            {/* <Link to="/entrar">Login</Link> */}
        </div>
    );
}