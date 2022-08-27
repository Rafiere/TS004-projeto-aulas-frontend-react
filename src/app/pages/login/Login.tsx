import { useNavigate } from "react-router-dom"

export const Login = () => {

    const history = useNavigate();

    const handleClick = () => { //Quando clicarmos no botão, o usuário será redirecionado para a página inicial.
        
        history('/pagina-inicial');

    }

    return (
        <div>
            <p>Hello, world!</p>

            <button onClick={handleClick}>Página Inicial</button>
        </div>
    )
}