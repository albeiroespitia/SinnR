import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'


export default class Home extends React.Component{
    static navigationOptions = {
        title: 'SpensionR',
        headerStyle: {
            backgroundColor: '#15b7b9',
        },
        headerTitleStyle: {
            textAlign:'center',
            alignSelf:'center',
            flex:1,
            color:'white',
            fontWeight:'100',
            fontStyle: 'italic',
        },
        headerLeft: (<View></View>),
        headerRight: (<View></View>),
    };
    render(){
        return(
            <View style={styles.container}>
                <Text> Hola </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        height: '100%',
    }
})
