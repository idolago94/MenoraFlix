import React from 'react'
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Colors } from '../../utils/Enums'
import imgSrc from '../../utils/Images'

const LoginModes = {
    LOGIN: 'Login',
    SIGNIN: 'Signin'
}

const Login = () => {
    const [mode, setMode] = React.useState(LoginModes.SIGNIN)

    return <ImageBackground style={s.container} source={imgSrc.login_bg} resizeMode='cover'>
        <Text style={s.title}>Menora Flix</Text>
        <View style={s.content}>
            <Text style={s.modeText}>{mode}</Text>
            <View style={s.inputWrap}>
                <Text style={s.inputLabel}>username</Text>
                <TextInput style={s.input} />
            </View>
            <View style={s.inputWrap}>
                <Text style={s.inputLabel}>password</Text>
                <TextInput style={s.input} />
            </View>

            <TouchableOpacity style={s.confirmButton}>
                <Text style={s.buttonText}>{mode}</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
}

const s = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: 'rgb(210, 47, 39)',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60,
        paddingTop: 90,
    },
    content: {
        padding: 20,
        paddingTop: 50
    },
    modeText: {
        color: Colors.PRIMARY,
        fontSize: 30,
        paddingBottom: 20
    },
    inputWrap: {
        backgroundColor: 'rgb(51, 51, 51)',
        marginBottom: 20,
        borderRadius: 2,
        padding: 5
    },
    inputLabel: {
        color: 'rgb(112, 112, 112)'
    },
    input: {
        color: Colors.PRIMARY,
        fontSize: 20,
        padding: 0
    },
    confirmButton: {
        backgroundColor: 'rgb(225, 28, 35)',
        borderRadius: 18,
        marginTop: 50
    },
    buttonText: {
        color: Colors.PRIMARY,
        fontSize: 23,
        textAlign: 'center',
        paddingVertical: 12
    }
})

export default Login