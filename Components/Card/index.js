import React from 'react';
import { View, StyleSheet, Image, Text, Button  } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'

export default class CardComponent extends React.Component{
    render(){
        return(
            <Card
				containerStyle = {{borderRadius: 10}}
				featuredTitle="PENSION LA WEA"
                image={{uri:'http://decoracionparatodo.com/wp-content/uploads/2015/12/Decoracion-de-cuartos-para-adultos.jpg'}}
				imageStyle={{
	              borderWidth: 1,
				  borderBottomLeftRadius: 0,
				  borderBottomRightRadius: 0,
				  borderTopLeftRadius: 10,
				  borderTopRightRadius: 10,
	              overflow: 'hidden', // This does the magic
	            }}>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                color='#00adb5'
				onPress={()=>(1)}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        height: '50%'
    }
})
