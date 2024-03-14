import React from 'react';

import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles/style';
import RouterApi from '../../utils/router_api';
import axios from 'axios';

class SuaOutraClasse extends React.Component {
    async nexStep() {
        try {
            const body = {
                'id': 1,
                'nome': 'nome'
            };

            const request = await RouterApi.postData(body);
            console.log(request);
        } catch (error) {
            console.error('Erro na solicitação:', error.message);
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image style={styles.image} source={require('../../assets/LEGO_logo.svg.webp')} />
                        <Text style={styles.title}>Seja bem-vindo!</Text>
                        <Text style={styles.description}>Uma breve descrição do seu aplicativo.</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <TextInput style={styles.input} placeholder="Nome" />
                        <TextInput style={styles.input} placeholder="Sobrenome" />
                        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
                        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
                        <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />

                        <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>


        )
    };

}
export default SuaOutraClasse;
