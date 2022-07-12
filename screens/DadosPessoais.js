import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function DadosPessoais({ navigation }) {
    const voltar = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" }]
        })
    }

    const editar = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "EditarDadosPessoais" }]
        })
    }

    return (
        <View>
            <View style={styles.areaMenu}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={() => voltar(navigation)}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.areaTitle}>DADOS PESSOAIS</Text>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.titleDadosPessoais}>Dados pessois</Text>
                    <View style={styles.areaDadosPessoais}>
                        <View style={styles.areaBloco}>
                            <Text style={styles.tipoInfo}>Nome: Ana Beatriz Kapps</Text>
                            <Text style={styles.tipoInfo}>Nome do pai: Joao Guilherme dos Reis</Text>
                            <Text style={styles.tipoInfo}>Nome da mae: Elisangela Cristina Kapps</Text>
                            <Text style={styles.tipoInfo}>Data de nascimento: 13/05/2000</Text>
                            <Text style={styles.tipoInfo}>Sexo: Feminino</Text>
                            <Text style={styles.tipoInfo}>Estado Civil: Solteiro</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.titleDadosPessoais}>Contato</Text>
                    <View style={styles.areaDadosPessoais2}>
                        <View style={styles.areaBloco}>
                            <Text style={styles.tipoInfo}>Telefone: (32) 2235-4228</Text>
                            <Text style={styles.tipoInfo}>Celular: (24) 98819-9755</Text>
                            <Text style={styles.tipoInfo}>Email: anabeatrizkapps@ice.ufjf.br</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.titleDadosPessoais}>Endereco</Text>
                    <View style={styles.areaDadosPessoais}>
                        <View style={styles.areaBloco}>
                            <Text style={styles.tipoInfo}>CEP: 123123-123</Text>
                            <Text style={styles.tipoInfo}>Endereco: Rua Jose Lourenco Kelmer, 123</Text>
                            <Text style={styles.tipoInfo}>Numero: 123</Text>
                            <Text style={styles.tipoInfo}>Bairro: Sao Pedro</Text>
                            <Text style={styles.tipoInfo}>Municipio: Juiz de Fora</Text>
                            <Text style={styles.tipoInfo}>UF: Minas Gerais</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.titleDadosPessoais}>Documentos</Text>
                    <View style={styles.areaDadosPessoais2}>
                        <View style={styles.areaBloco}>
                            <Text style={styles.tipoInfo}>CPF: 123.123.123-12</Text>
                            <Text style={styles.tipoInfo}>RG: 12.123.123-1</Text>
                            <Text style={styles.tipoInfo}>Orgao Emissor: DETRAN</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.areaEditar}>
                    <TouchableOpacity style={styles.buttonEditar} onPress={() => editar(navigation)}>
                        <Icon name="edit" size={20} color="#FFF" />
                        <Text style={styles.textEditar}>Editar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rodape}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    areaMenu: {
        backgroundColor: "#4165AD",
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "left"
    },
    buttonVoltar: {
        textAlign: "left",
        paddingLeft: 10
    },
    areaTitle: {
        width: "90%",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFF",
        textAlign: "center"
    },
    areaDadosPessoais: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#a8bbe2',
        borderRadius: 10,
    },
    areaDadosPessoais2: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#d7deed',
        borderRadius: 10,
    },
    titleDadosPessoais: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 8,
        fontSize: 15,
        color: '#4165AD',
        fontWeight: 'bold'
    },
    tipoInfo: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    areaBloco: {
        marginTop: 10
    },
    buttonEditar: {
        backgroundColor: '#4165AD',
        width: '30%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    areaEditar: {
        alignItems: 'center',
        margin: 20,
    },
    textEditar: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10
    },
    rodape: {
        marginBottom: 80
    }
});