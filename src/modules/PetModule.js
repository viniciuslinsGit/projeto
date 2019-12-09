import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class PetModule extends Component {

    constructor(props){
        super(props)
        this.state = {
            pets: this.props.pet
        }
    }

    render(){

        const { pets } = this.state

        return(
            <View key={this.props.id} style={styles.container}>
                <Text style={styles.label}>Nome: {pets.name}</Text>
                <Text style={styles.label}>Raça: {pets.raca}</Text>
                <Text style={styles.label}>Criado em: {pets.createdAt}</Text>
                <Text style={styles.label}>Atualizado em: {pets.updatedAt}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'flex-start',
        backgroundColor: '#000', 
        marginHorizontal: 5,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        opacity: 0.7,
        shadowColor: '#000',
        borderRadius: 10
    },
    label: {
        color: '#FFF',
        fontSize: 18, 
    }
})

export default PetModule