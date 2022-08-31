/**
 * Esse arquivo tratará os possíveis erros que poderão ocorrer quando
 * nos comunicarmos com uma API externa.
 */

export class ApiException extends Error {

    public readonly message: string = '';

    constructor(message: string){
        super();

        this.message = message;
    }
}