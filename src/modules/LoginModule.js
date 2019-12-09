import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ToastAndroid,
    Platform
} from 'react-native'

const width = Dimensions.get('screen').width

class LoginModule extends Component {

    constructor(props){
        super(props)
    }

    handleClick(){
        if(Platform === 'ios'){
            alert(logado)
            Actions.pets()
        }else{
            ToastAndroid.show('Logado', ToastAndroid.LONG)
            Actions.pets()
        }
    }

    render(){
        return(
            <View style={styles.content}>
                <Text style={styles.label}>{this.props.login}</Text>
                <TextInput style={styles.input} placeholder='Digite o login' />

                <Text style={styles.label}>{this.props.password}</Text>
                <TextInput style={styles.input} placeholder='Digite o password' />

                <View>
                    <TouchableOpacity style={styles.button} onPress={this.handleClick}>
                        <Text style={styles.buttonLabel}>Logar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        color: '#FFF',
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        backgroundColor: '#FFF',
        width: width,
        marginBottom: 10,
        fontSize: 18,
        color: '#000'
    },
    button: {
        width: width,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55
    },
    buttonLabel:{
        color: '#FFF',
        fontSize: 18,
    },
})

export default LoginModule