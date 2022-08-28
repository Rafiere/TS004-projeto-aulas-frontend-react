import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

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

    //O hook "useRef()" permite o armazenamento de valores dentro de uma variável, e, quando esse
    //componente for renderizado, o valor dessa variável não será alterado. Esse valor poderá ser acessado e
    //alterado posteriormente, caso necessário.

    //Exceto se o componente for destruído e reconstruído, o "useRef()" manterá esse determinado valor
    //armazenado.

    //Quando o componente "Login" for inicializado, o valor inicial dessa constante será nulo. O "HTMLInputElement" que está
    //na tag "input" inserirá a referência desse input na constante "inputPasswordRef", assim, essa variável terá um determinado
    //valor.
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    //No exemplo abaixo, sempre que teclarmos "Enter" no input de email, o cursor do usuário focará na input de senha. Basicamente, o
    //"useRef()" contém a referência ao elemento HTML do input da senha, assim, podemos armazenar essa referência e manipulá-la da
    //forma desejada. Nesse exemplo, estamos utilizando essa referência para focarmos o cursor nela.

    return (
        <div>
            <form>

                <p> Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={novoValor => setEmail(novoValor)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}/>

                <InputLogin
                    ref={inputPasswordRef}
                    type="password"
                    label="Senha"
                    value={senha}
                    onChange={novoValor => setSenha(novoValor)}/>

                <ButtonLogin type="button" onClick={handleEntrar}>
                    Entrar    
                </ButtonLogin>


                <ButtonLogin type="button" onClick={handleEntrar}>
                    Cadastrar-se    
                </ButtonLogin>

            </form>
        </div>
    )
}