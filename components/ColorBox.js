import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Box = props => {

    const colorstyle={
        backgroundColor: props.hexCode,
    }
    const textStyle = {
      color:
        parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.2
          ? 'black'
          : 'white',
    };
    
  return (
    <View style={[styles.box , colorstyle]}>
      <Text style={[styles.text, textStyle]}>
        {props.colorName} {props.hexCode}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
   
    box: {
     
      padding: 10,
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      textAlign: 'center',
      paddingHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      elevation: 2,
    },
    
    text: {
      color: 'white',
    },
  });
export default Box;
