import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
const API_URL = "https://apren-dev-fdb98-default-rtdb.firebaseio.com/";


class RouterApi {

    static async fetchData() {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Method": "GET",
                "Content-Type": "application/json",
            }
        };
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            throw error;
        }
    }

    static async postData(seusDados) {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Method": "POST",
                "Content-Type": "application/json",
            }
        };

        try {
            const response = await axios.post(`${API_URL}/testing.json`, seusDados, config);
            console.log('Resposta do servidor:', response.data);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    static async updateData(idDoItem, seusDadosAtualizados) {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Method": "PUT",
                "Content-Type": "application/json",
            }
        };
        try {
            const response = await axios.put(`${API_URL}/${idDoItem}`, seusDadosAtualizados, config);
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            throw error;
        }
    }

    static async patchData(idDoItem, seusDadosParciais) {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Method": "PATCH",
                "Content-Type": "application/json",
            }
        };
        try {
            const response = await axios.patch(`${API_URL}/${idDoItem}`, seusDadosParciais, config);
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar dados parciais:', error);
            throw error;
        }
    }

    static async deleteData(idDoItem) {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Method": "DELETE",
                "Content-Type": "application/json",
            }
        };
        try {
            const response = await axios.delete(`${API_URL}/${idDoItem}`, config);
            return response.data;
        } catch (error) {
            console.error('Erro ao excluir dados:', error);
            throw error;
        }
    }
}

export default RouterApi;
