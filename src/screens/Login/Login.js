import { isEmpty } from 'lodash'
import React from 'react'
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Colors, RegexType } from '../../utils/Enums'
import imgSrc from '../../utils/Images'
import Api from '../../utils/Api'

const LoginModes = {
    LOGIN: 'Login',
    SIGNIN: 'Signin'
}

const Login = () => {
    const [mode, setMode] = React.useState(LoginModes.SIGNIN)
    const [credentials, setCredentials] = React.useState({ username: '', password: '' })
    const [error, setError] = React.useState({})

    const _usernameValid = () => (credentials.username.length < 8 || !RegexType.LETTERS.test(credentials.username)) && ({ username: 'Username is not valid.' })
    const _passwordValid = () => (credentials.password.length < 8 || !RegexType.PASSWORD.test(credentials.password)) && ({ password: 'Password is not valid' })


    const handleSubmit = async () => {
        try {
            const errors = {
                ..._usernameValid(),
                ..._passwordValid()
            }
            if (!isEmpty(errors)) {
                setError(errors)
                return
            }

            switch (mode) {
                case LoginModes.SIGNIN:
                    await Api.Register(credentials)
                    setCredentials({ username: '', password: '' })
                    setMode(LoginModes.LOGIN)
                    break;
                case LoginModes.LOGIN:
                    const res = await Api.Login(credentials)
                    setCredentials({ username: '', password: '' })
                    alert('success !!')
                    // enter the entire app
                    break;
                default: break;
            }
        } catch (e) {
            console.log(`### -> handleSubmit -> e`, e)
            setError({ server: e.error_message })
        }
    }

    const onInputChange = (name, value) => {
        setCredentials({ ...credentials, [name]: value })
        setError({})
    }

    return <ImageBackground style={s.container} source={imgSrc.login_bg} resizeMode='cover'>
        <Text style={s.title}>Menora Flix</Text>
        <View style={s.content}>
            <Text style={s.modeText}>{mode}</Text>
            <View style={s.inputWrap}>
                <Text style={s.inputLabel}>username</Text>
                <TextInput value={credentials.username} onChangeText={e => onInputChange('username', e)} style={s.input} />
            </View>
            <Text style={s.error}>{error?.username}</Text>

            <View style={s.inputWrap}>
                <Text style={s.inputLabel}>password</Text>
                <TextInput value={credentials.password} secureTextEntry onChangeText={e => onInputChange('password', e)} style={s.input} />
            </View>
            <Text style={s.error}>{error?.password}</Text>
            <Text style={s.error}>{error?.server}</Text>

            <TouchableOpacity onPress={handleSubmit} style={s.confirmButton}>
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
    },
    error: {
        marginBottom: 15,
        color: 'red'
    }
})

export default Login