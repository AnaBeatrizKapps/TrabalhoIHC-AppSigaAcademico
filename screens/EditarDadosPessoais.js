import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function EditarDadosPessoais({ navigation }) {
    const voltar = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "DadosPessoais" }]
        })
    }
    return (
        <View>
            <View style={styles.areaMenu}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={() => voltar(navigation)}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.areaTitle}>EDITAR DADOS PESSOAIS</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.titleDadosPessoais}>Dados pessois</Text>
                        <View style={styles.areaDadosPessoais}>
                            <View style={styles.areaBloco}>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Nome: </Text>
                                    <TextInput style={styles.input} value="Ana Beatriz Kapps" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Pai: </Text>
                                    <TextInput style={styles.input} value="Joao Guilherme dos Reis" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Mae: </Text>
                                    <TextInput style={styles.input} value="Elisangela Cristina Kapps" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Data Nasc.: </Text>
                                    <TextInput style={styles.input} value="13/05/2000" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Sexo: </Text>
                                    <TextInput style={styles.input} value="Feminino" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Estado Civil: </Text>
                                    <TextInput style={styles.input} value="Solteiro" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.titleDadosPessoais}>Contato</Text>
                        <View style={styles.areaDadosPessoais2}>
                            <View style={styles.areaBloco}>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Telefone: </Text>
                                    <TextInput style={styles.input} value="(32) 2235-4228" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Celular: </Text>
                                    <TextInput style={styles.input} value="98819-9755" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Email: </Text>
                                    <TextInput style={styles.input} value="anabeatrizkapps@ice.ufjf.br" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.titleDadosPessoais}>Endereco</Text>
                        <View style={styles.areaDadosPessoais}>
                            <View style={styles.areaBloco}>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>CEP: </Text>
                                    <TextInput style={styles.input} value="123123-123" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Endereco: </Text>
                                    <TextInput style={styles.input} value="Rua Jose Lourenco Kelmer, 123" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Numero: </Text>
                                    <TextInput style={styles.input} value="123" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Bairro: </Text>
                                    <TextInput style={styles.input} value="Sao Pedro" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Municipio: </Text>
                                    <TextInput style={styles.input} value="Juiz de Fora" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>UF: </Text>
                                    <TextInput style={styles.input} value="Minas Gerais" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.titleDadosPessoais}>Documentos</Text>
                        <View style={styles.areaDadosPessoais2}>
                            <View style={styles.areaBloco}>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>CPF: </Text>
                                    <TextInput style={styles.input} value="123.123.123-12" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>RG: </Text>
                                    <TextInput style={styles.input} value="12.123.123-198819-9755" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                                <View style={styles.areaInput}>
                                    <Text style={styles.tipoInfo}>Orgao Emissor: </Text>
                                    <TextInput style={styles.input} value="DETRAN" autoCorrect={false} onChangeText={() => { }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.areaSalvar}>
                    <TouchableOpacity style={styles.buttonSalvar}>
                        <Icon name="save" size={20} color="#FFF" />
                        <Text style={styles.textSalvar}>Salvar</Text>
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
    input: {
        backgroundColor: '#FFF',
        width: '65%',
        marginBottom: 15,
        color: '#222',
        fontSize: 15,
        borderRadius: 7,
        padding: 7,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
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
    areaBloco: {
        marginTop: 10
    },
    tipoInfo: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold',
        width: '25%'
    },
    areaInput: {
        flexDirection: 'row',
        alignItems: "start",
        justifyContent: "left"
    },
    rodape: {
        marginBottom: 100
    },
    buttonSalvar: {
        backgroundColor: '#4165AD',
        width: '30%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    areaSalvar: {
        alignItems: 'center',
        margin: 20,
    },
    textSalvar: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10
    },
});