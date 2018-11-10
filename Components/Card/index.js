import React from 'react';
import { View, StyleSheet, Image, Text, Button  } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


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
              <Text>
                Nueva pension cerca a la universidad sin ninguna restriccion y tres comidas
              </Text>
			  <View style={styles.dataContainer}>
			       <Text style={styles.familyText}>Genero:  <Ionicons name="md-man" size={32} color="black" /> <Ionicons name="md-woman" size={32} color="black"/> </Text>
				   <Text style={styles.familyText}>Habitaciones individuales: Si</Text>
			  </View>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                color='#00adb5'
				onPress={()=>(1)}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VER MAS INFORMACION' />
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
    },
	dataContainer:{
		marginTop: 10,
		marginBottom: 10,
	},
	familyText:{
		fontWeight:'100',
		fontStyle: 'italic',
	}
})
