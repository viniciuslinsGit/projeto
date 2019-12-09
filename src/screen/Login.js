import React, { Component } from 'react'
import LoginModule from '../modules/LoginModule'
import {
    StyleSheet,
    View,
    Image
} from 'react-native'

export default class Login extends Component {

    render(){
        return(
            <View style={styles.content}>
                <Image style={styles.logo} source={require('../resources/logo.png')} />
                <LoginModule 
                    login='Login'
                    password='Password'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#5c6bc0',
        alignItems: 'center',
    },
    logo: {
        marginTop: 20,
        width: 120,
        height: 120,
        marginBottom: -110,
    }
})