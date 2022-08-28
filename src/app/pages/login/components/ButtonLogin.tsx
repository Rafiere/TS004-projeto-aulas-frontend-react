interface IButtonLoginProps {

    type?: "button" | "submit" | "reset"; //O "type" só pode assumir esses três valores.
    onClick: () => void;

    children: React.ReactNode //O "children" será o nome do componente, assim, podemos reaproveitar esse componente da melhor forma possível, sem inserirmos um valor "hard-coded", e
                              //sim, ao invés disso, utilizarmos um valor variável, de acordo com o objetivo do botão. Basicamente, podemos passar
                              //qualquer texto desejado para dentro do botão.
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {

    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}