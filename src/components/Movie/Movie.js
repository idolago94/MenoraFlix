import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Colors } from '../../utils/Enums'

const Movie = (props) => {
    const { Title, Year, imdbID, Type, Poster, showDetails, onPress } = props
    const WrapComponent = onPress ? TouchableOpacity : View
    return (
        <WrapComponent style={s.container} onPress={onPress}>
            <View style={s.posterView}>
                <Image style={[s.poster, showDetails && s.bigPoster]} source={{ uri: Poster }} />
            </View>
            {showDetails && <View style={s.detailsContainer}>
                <Text style={[s.movieText, s.movieTitleText]}>{Title}</Text>
                <Text style={s.movieText}>Year: {Year}</Text>
                <Text style={s.movieText}>imdbID: {imdbID}</Text>
                <Text style={s.movieText}>Type: {Type}</Text>
            </View>}
        </WrapComponent>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    posterView: {
        marginRight: 15
    },
    poster: {
        width: 100,
        height: 180
    },
    bigPoster: {
        width: Dimensions.get('window').width/2 - 10
    },
    movieText: {
        color: Colors.PRIMARY
    },
    movieTitleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50
    },
    detailsContainer: {
        backgroundColor: 'rgb(42,42,42)',
        padding: 10,
        borderRadius: 5,
        flexGrow: 1
    }
})

export default Movie