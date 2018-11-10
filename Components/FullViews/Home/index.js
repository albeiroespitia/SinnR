import React from 'react';
import { View, Text, Button, StyleSheet,ScrollView } from 'react-native'
import CardComponent from '../../Card'


export default class Home extends React.Component{
    static navigationOptions = {
        title: 'SpensionR',
        headerStyle: {
            backgroundColor: '#222831',
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
				<ScrollView>
                	<CardComponent />
					<CardComponent />
				</ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#393e46',
        height: '100%',
    }
})
