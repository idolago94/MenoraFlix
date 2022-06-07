import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Colors } from '../../utils/Enums'
import { SetRecMovies } from '../../actions/SetRecMovies'
import { SetNewMovies } from '../../actions/SetNewMovies'
import { connect } from 'react-redux';
import Api from '../../utils/Api'
import Movie from '../../components/Movie/Movie';

const Home = (props) => {
    const [selectedMovie, setSelectedMovie] = React.useState(null)
    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const movies = await Api.GetMovies()
            props.setRecommendMovies(movies.results)
            setSelectedMovie(movies.results[0])
        } catch (e) {
            console.log(`### -> fetchData -> e`, e)
        }

        try {
            const movies = await Api.GetMovies({ search: 'sup' })
            props.setNewMovies(movies.results)
        } catch (e) {
            console.log(`### -> fetchData -> e`, e)
        }
    }

    return (
        <ScrollView style={s.container}>
            <Text style={s.title}>Recomended Movies</Text>
            <FlatList
                keyExtractor={(item, index) => item.title}
                data={props.recommendMovies}
                renderItem={({ item, index }) => <Movie data={item} onPress={() => setSelectedMovie(item)} />}
                horizontal
            />

            <View style={s.descContainer}>
                <Text style={s.title}>Movie Description</Text>
                {selectedMovie && <Movie data={selectedMovie} showDetails />}
            </View>

            <Text style={s.title}>New Movies</Text>
            <FlatList
                keyExtractor={(item, index) => item.title}
                data={props.newMovies}
                renderItem={({ item, index }) => <Movie data={item} onPress={() => setSelectedMovie(item)} />}
                horizontal
            />
        </ScrollView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BG,
        padding: 5
    },
    descContainer: {
        paddingVertical: 30
    },
    title: {
        color: Colors.PRIMARY,
        fontSize: 18
    }
})

const mapStateToProps = state => {
    return {
        recommendMovies: state.movies.recommendMovies,
        newMovies: state.movies.newMovies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setRecommendMovies: (movies) => {
            dispatch(SetRecMovies(movies))
        },
        setNewMovies: (movies) => {
            dispatch(SetNewMovies(movies))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)