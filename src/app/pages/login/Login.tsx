import { useCallback, useEffect, useMemo, useState } from "react";

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

    //O "useMemo()" serve para realizar um determinado cálculo e armazená-lo na
    //memória, dessa forma, sempre que alterarmos um estado e o componente for
    //renderizado novamente, esses calculos não serão feitos novamente, economizando
    //processamento e memória, desde que o valor desse cálculo não seja alterado.

    //Quando o componente "Login" for executado, a arrow function que está sendo passada como
    //argumento para o "useMemo()" será executada, após isso, o valor que essa função retornar
    //será armazenado, e esse cálculo será refeito apenas se o valor dessa função for alterado.

    const emailLength = useMemo(() => {
        return email.length * 1000; //Simulação de cálculo complexo.
    }, [email.length]); //Toda vez que o "email.length" for alterado, a arrow function será executada.

    //A cada alteração dos inputs, os eventos "onChange()" serão disparados, que contém a função "setEmail()" e "setSenha()". Essas funções retornarão o valor atual do input, dessa
    //forma, a cada alteração dos inputs, as variáveis "email" e "senha", que estão no atributo "value", serão modificadas
    //com o valor que está atualmente nesse elemento HTML.

    //O "useCallback()" é um hook que serve para armazenar uma função em memória. Ele permite que uma
    //determinada função não seja reutilizada todas as vezes que o componente for renderizado
    //na tela.

    //Isso economiza muitos recursos, assim, a função "handleEntrar" apenas será processada quando
    //o email ou a senha forem alterados.
    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(senha);
    }, [email, senha])

    return (
        <div>
            <form>

                <p>Quantidade de caracteres no email: {emailLength}</p>

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