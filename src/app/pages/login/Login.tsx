import { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState(''); //O '' é o valor inicial que será inserido no input.
    const [senha, setSenha] = useState('');

    const handleEntrar = () => {

        console.log(email);
        console.log(senha);
    }

    //A cada alteração dos inputs, os eventos "onChange()" serão disparados, que contém a função "setEmail()" e "setSenha()". Essas funções retornarão o valor atual do input, dessa
    //forma, a cada alteração dos inputs, as variáveis "email" e "senha", que estão no atributo "value", serão modificadas
    //com o valor que está atualmente nesse elemento HTML.

    return (
        <div>
            <form>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    )
}