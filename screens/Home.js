import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
    const logout = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }
    const dadosPessoais = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "DadosPessoais" }]
        })
    }

    const BtnHome = (props) =>{
        return(
            <TouchableOpacity style={styles.boxButtons}>
                <View style={styles.boxIntern}>
                    <View style={styles.gapBoxs}>
                        <Text style={styles.textTitleBox}>{props.title}</Text>
                        <Text style={styles.textSubtitle}>{props.subtitle}</Text>
                    </View>
                    <View>
                        <Icon name="angle-right" size={40} color="#000" style={styles.iconArrow} /> 
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    
    return (
        <ScrollView>
        <View>
            <View style={styles.areaMenu}>
                <TouchableOpacity style={styles.buttonMenu}>
                    <Icon name="bars" size={20} color="#FFF" />
                </TouchableOpacity>

                <Text style={styles.areaTitle}>SIGA</Text>

                <TouchableOpacity style={styles.buttonUser} onPress={() => dadosPessoais(navigation)}>
                    <Icon name="user" size={20} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogout} onPress={() => logout(navigation)}>
                    <Icon name="sign-out" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
            
            <View style={styles.box}>
                <BtnHome title="MATRICULA" subtitle="Solicitar matriculas em disciplinas" />
            </View>

            <View style={styles.box}>
                <BtnHome title="NOTAS" subtitle="Verificar Notas" />
            </View>

            <View style={styles.box}>
                <BtnHome title="HISTORICO" subtitle="Consultar historico" />
            </View>

            <View style={styles.box}>
                <BtnHome title="TRANCAMENTO" subtitle="Solicitar Trancamento em disciplinas" />
            </View>

            <View style={styles.box}>
                <BtnHome title="BOLSA" subtitle="Consultar bolsas" />
            </View>

            <View style={styles.box}>
                <BtnHome title="IRA ACADEMICO" subtitle="Calcular IRA Academico" />
            </View>

            <View style={styles.box}>
                <BtnHome title="TRANCAMENTO" subtitle="Solicitar Trancamento de periodo" />
            </View>

        </View>
        <View style={styles.rodape}></View>
        </ScrollView>

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
        justifyContent: "center"
    },
    areaTitle: {
        width: "75%",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFF",
        textAlign: "center"
    },
    buttonMenu: {
        textAlign: "left"
    },
    buttonLogout: {
        textAlign: "right"
    },
    buttonUser: {
        textAlign: "right",
        paddingRight: 20
    },
    box: {
        marginTop: 20,
        alignItems: 'center'
    },
    boxButtons: {
        backgroundColor: '#a8bbe2',
        width: '90%',
        borderRadius: 15,
    },
    boxIntern:{
        flexDirection: 'row',
    },
    gapBoxs: {
        width: '90%'
    },
    textTitleBox: {
        marginLeft: 30,
        marginTop: 15,
        marginRight: 145,
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold'
    },
    textSubtitle: {
        marginLeft: 30,
        marginBottom: 15,
        fontSize: 15
    },
    iconArrow: {
        marginTop: '100%'
    },
    rodape: {
        marginBottom: 25
    }
});