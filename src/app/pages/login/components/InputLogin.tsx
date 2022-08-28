/**
 * Essa interface vai especificar quais atributos o componente "InputLogin" espera
 * receber.
 */

interface IInputLoginProps {

    label: string;
    value: string;
    type?: string;

    onChange: (novoValor: string) => void;
    onPressEnter?: () => void;
}

/**
 * Estamos reutilizando esse componente tanto para o login quanto para a
 * senha. 
 */

export const InputLogin: React.FC<IInputLoginProps> = (props) => { //O "React.FC" indica que o "InputLogin" será um componente funcional do React que terá os atributos especificados na interface.

    return (
        <label>
            <span>{props.label}</span>
            <input
            type={props.type} 
            value={props.value}
            onChange={e => props.onChange(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' 
            ? props.onPressEnter && props.onPressEnter() : undefined} />
        </label>
    )

}