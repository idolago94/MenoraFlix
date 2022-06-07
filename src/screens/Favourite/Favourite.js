import React from 'react'
import {
    View, Text, StyleSheet, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import Movie from '../../components/Movie/Movie';
import { Colors } from '../../utils/Enums';
import { SetFavMoviesShow } from '../../actions/SetFavMoviesShow'

const Favourite = (props) => {
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', props.setAllMoviesShown);

        return unsubscribe;
    }, [props.navigation])

    return (
        <View style={s.container}>
            <FlatList
                keyExtractor={(item, index) => item.title}
                data={props.favouriteMovies}
                renderItem={({ item, index }) => <View style={s.movieContainer}>
                    <Text style={s.movieTitle}>{item.Title}</Text>
                    <Movie data={item} onPress={() => setSelectedMovie(item)} showDetails />
                </View>}
            />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG
    },
    movieTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.PRIMARY
    },
    movieContainer: {
        marginVertical: 10
    }
})

const mapStateToProps = state => {
    return {
        favouriteMovies: state.user.favouriteMovies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAllMoviesShown: () => {
            dispatch(SetFavMoviesShow())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)