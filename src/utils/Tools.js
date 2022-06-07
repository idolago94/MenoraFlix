import { sign } from "react-native-pure-jwt"
import Config from 'react-native-config'

export const getJWTToken = async (payload) => {
    return await sign(
        { exp: new Date().getTime() + 3600 * 1000, ...payload }, // body
        Config.JWT_SECRET, // secret
        { alg: "HS256" }
    )
}