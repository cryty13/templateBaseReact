import axios from "axios";
import { config } from "../configs/EnvironmentConfig";
export const _URL = 'http://localhost:8181/api';

export function getSelectCliente(incluirAplicarTodos, incluirOpcaoVazia) {
    return new Promise((resolve, reject) => {
        const valores = axios.get(_URL + `/select/cliente`);
        const situcaoValores = [];
        // if (incluirAplicarTodos) {
        //     situcaoValores.push({ 'idCliente': 0, 'nomeCliente': 'Todos' });
        // }
        if (incluirOpcaoVazia) {
            situcaoValores.push({ 'idCliente': null, 'nomeCliente': '' });
        }
        valores.then(function (retorno) {
            if (retorno.status == 200 && retorno.data.entities != null) {
                retorno.data.entities.map((item, i, arr) => {
                    if (arr.length - 1 === i) {
                        situcaoValores.push({ 'idCliente': item.idCliente, 'nomeCliente': item.nomeCliente });
                        resolve(situcaoValores);
                    } else {
                        situcaoValores.push({ 'idCliente': item.idCliente, 'nomeCliente': item.nomeCliente });
                    }
                });
                resolve(situcaoValores);
            }
            else {
                resolve(situcaoValores);
            }
        });
    });
};
