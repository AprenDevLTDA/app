import React from 'react';

import { View, Text, Image, Button } from 'react-native';
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
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../assets/LEGO_logo.svg.webp')} />
                    <Text style={styles.text}>Pois é</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.button} onPress={() => { this.nexStep() }}>Acesse minha conta</Text>
                </View>
            </ScrollView>
        )
    };

}
export default SuaOutraClasse;
