import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../../utils/Enums'
import { ToggleFavMovie } from '../../actions/ToggleFavMovie'
import imgSrc from '../../utils/Images'

const Movie = (props) => {
    const { data, showDetails, onPress } = props
    const { Title, Year, imdbID, Type, Poster } = data
    const WrapComponent = onPress ? TouchableOpacity : View
    return (
        <View style={s.container}>
            <View style={s.posterView}>
                <WrapComponent onPress={onPress}>
                    <Image style={[s.poster, showDetails && s.bigPoster]} source={{ uri: Poster }} />
                </WrapComponent>
                {!showDetails && <TouchableOpacity onPress={() => props.toggleMovie(data)} style={s.posterFooter}>
                    <Image style={s.favIcon} source={props.favouriteMovies.includes(data) ? imgSrc.star_yellow : imgSrc.star} />
                </TouchableOpacity>}
            </View>
            {showDetails && <View style={s.detailsContainer}>
                <Text style={[s.movieText, s.movieTitleText]}>{Title}</Text>
                <Text style={s.movieText}>Year: {Year}</Text>
                <Text style={s.movieText}>imdbID: {imdbID}</Text>
                <Text style={s.movieText}>Type: {Type}</Text>
            </View>}
        </View>
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
        width: Dimensions.get('window').width / 2 - 10
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
    },
    posterFooter: {
        backgroundColor: 'rgb(50,50,50)',
        alignItems: 'center'
    },
    favIcon: {
        height: 30,
        width: 30
    }
})

const mapStateToProps = state => {
    return {
        favouriteMovies: state.user.favouriteMovies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleMovie: (movie) => {
            dispatch(ToggleFavMovie(movie))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)