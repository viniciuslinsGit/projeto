import React, { Component } from 'react'
import api from '../services/api'
import PetModule from '../modules/PetModule'

import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'

export default class Pets extends Component {

    constructor(){
        super()
        this.state = {
            pets: []
        }
    }

    componentDidMount(){
        api.get('/pets').then((res) => 
            this.setState({pets: res.data})
        )
    }

    render(){
        return(
            <View style={styles.content}>
                <FlatList 
                    data={this.state.pets}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => 
                        <PetModule 
                            pet={item}
                        />
                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#5c6bc0'
    }
})