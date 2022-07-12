import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export default function Login({navigation}) {
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
        })
    }
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.container}>
                <Image
                    style={styles.logoUfjf}
                    source={require('../assets/logo_ufjf.png')}
                />

                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TouchableOpacity style={styles.btnAcessar} onPress={()=> entrar()}>
                    <Text style={styles.acessarText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4165AD'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },
    logoUfjf: {
        marginBottom: 45,
    },
    input: {
        backgroundColor: '#E7E7E7',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnAcessar: {
        backgroundColor: '#000',
        width: '35%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    },
    acessarText: {
        color: '#FFF',
        fontSize: 18
    }
});