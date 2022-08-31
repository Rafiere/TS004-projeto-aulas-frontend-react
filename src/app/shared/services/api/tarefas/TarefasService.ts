/**
 * Esse arquivo fará a comunicação com a API externa para realizar
 * as consultas aos endpoints de tarefas. É recomendado que, para cada
 * entidade do back-end, tenhamos uma pastinha para separar as requisições
 * para essas entidades no front-end.
 */

import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

/**
 * Abaixo, teremos o objeto que representará uma tarefa, que virá diretamente
 * do back-end.
 */

export interface ITarefa { //Essa interface representará um item de nossa lista.
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => { //Sempre devemos passar o "async" no método para utilizarmos o "await".
    
    try {

        const { data } = await Api().get('/tarefas'); //Esse endpoint obterá uma lista de tarefas. Como estamos informando a URL base no "ApiConfig", basta informarmos o endpoint dessa URL base.

        return data;

    }catch(error: any){
        return new ApiException(error.message || 'Erro ao consultar a API.')
    }
    
};

const getById = async(id: number): Promise<ITarefa | ApiException> => { //Será retornado apenas uma única tarefa ou um erro de API.

    try {

        const { data } = await Api().post(`/tarefas/${id}`); //Esse endpoint obterá uma lista de tarefas. Como estamos informando a URL base no "ApiConfig", basta informarmos o endpoint dessa URL base.

        return data;
        
    }catch(error: any){
        return new ApiException(error.message || 'Erro ao consultar a API.')
    }

};

const create = async(dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa[] | ApiException> => { //Como o ID será inserido no back-end, vamos enviar um objeto sem o ID.

    try {

        const { data } = await Api().post('/tarefas', dataToCreate); //Esse endpoint obterá uma lista de tarefas. Como estamos informando a URL base no "ApiConfig", basta informarmos o endpoint dessa URL base.

        return data;
        
    }catch(error: any){
        return new ApiException(error.message || 'Erro ao criar uma tarefa.')
    }

};

const updateById = async(id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {

    try {

        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate); //Esse endpoint obterá uma lista de tarefas. Como estamos informando a URL base no "ApiConfig", basta informarmos o endpoint dessa URL base.

        return data;
        
    }catch(error: any){
        return new ApiException(error.message || 'Erro ao atualizar uma tarefa.')
    }

};

const deleteById = async(id: number): Promise<ITarefa[] | ApiException> => {

    try {

        const { data } = await Api().delete(`/tarefas/${id}`);

        return data;
        
    }catch(error: any){
        return new ApiException(error.message || 'Erro ao deletar uma tarefa.')
    }

};

/**
 * A constante abaixo serve para exportarmos com uma maior facilidade os métodos
 * dessa classe que farão consulta a API.
 */

export const TarefasService = {

    getAll,
    getById,
    create,
    updateById,
    deleteById
};