import React from 'react';

import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles/style';
import RouterApi from '../../utils/router_api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


import axios from 'axios';

const Step1Screen = () => {


    // const async nexStep = () =>  {
    //     try {
    //         const body = {
    //             'id': 1,
    //             'nome': 'nome'
    //         };

    //         const request = await RouterApi.postData(body);
    //         console.log(request);
    //     } catch (error) {
    //         console.error('Erro na solicitação:', error.message);
    //     }
    // }

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>

                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { navigation.navigate('IntroScreen') }}>
                        <View style={{ paddingRight: 100, paddingTop: 40, paddingLeft: 20 }}>
                            {/* Mover o ícone para a esquerda */}
                            <Icon name="arrow-back" size={30} color="#000" />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center', paddingTop: 40 }}>
                        {/* Centralizar a imagem horizontalmente */}
                        <Image style={styles.image} source={require('../../assets/logo.png')} />
                    </View>
                </View>
                <Text style={styles.title}>Cadastro</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.label}><Text style={styles.label_aster}>*</Text> Nome</Text>
                    <TextInput style={styles.input} placeholder="Nome" />
                    <Text style={styles.label}><Text style={styles.label_aster}>*</Text> Username</Text>

                    <TextInput style={styles.input} placeholder="Username" />
                    <Text style={styles.label}><Text style={styles.label_aster}>*</Text> E-mail</Text>

                    <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
                    <Text style={styles.label}><Text style={styles.label_aster}>*</Text> Senha</Text>

                    <TextInput style={styles.input} placeholder="Senha" passwordRules={true} secureTextEntry={true} />
                    <Text style={styles.label}><Text style={styles.label_aster}>*</Text> Confirmar Senha</Text>

                    <TextInput style={styles.input} placeholder="Confirmar Senha" passwordRules={true} secureTextEntry={true} />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
                            <Text style={styles.buttonText}>Avançar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={this.handleSecondButtonPress}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>Login</Text></View>
            </ScrollView>
        </SafeAreaView>


    )


}
export default Step1Screen;
