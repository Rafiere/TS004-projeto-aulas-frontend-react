import { useEffect, useState } from "react";

export const Login = () => {

    //Quando qualquer alteração nos inputs for realizada, o React renderizará novamente
    //esse componente, ou seja, todo o bloco de código que está dentro do
    //"Login".

    const [email, setEmail] = useState(''); //O '' é o valor inicial que será inserido no input.
    const [senha, setSenha] = useState('');

    //Esse bloco de código será executado APENAS quando o componente
    //"Login" for carregado pela PRIMEIRA VEZ.

    //Se não utilizássemos o "useEffect()", a cada vez que o estado desse componente
    //fosse alterado, ou seja, a cada caractere que fosse digitado no input, esse bloco de
    //código seria executado, porém, como queremos que ele seja executado apenas uma
    //vez, utilizamos o "useEffect()".

    //Isso é muito útil para chamadas de API, pois essas chamadas, na maioria das
    //vezes, deverão ser realizadas apenas uma única vez.
    useEffect(() => {

    }, []);

    //Dentro do array, que é o segundo parâmetro do "useEffect()", estamos passando as
    //dependências, assim, a função que é o primeiro parâmetro do "useEffect()" será
    //executada apenas quando os valores "email" ou "senha", que foram passados para
    //dentro do array, sofrerem alterações.
    useEffect(() => {
        console.log(email);
        console.log(senha);

    }, [email, senha]); //Quando qualquer uma das propriedades "email" ou "senha" forem alteradas, essa função será executada.

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