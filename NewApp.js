import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native';
import Box from './components/ColorBox';

const NewApp = () => {
  const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];
  return (
   <SafeAreaView>
      {/* <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>
          Here are some boxes of diffrent colours
        </Text>
      </View>

      <View style={styles.Cyanyancontainer}>
        <Text style={styles.text}>Muddassir Ali Rana</Text>
      </View>
      <View style={styles.Bluecontainer}>
        <Text style={styles.text}>Muddassir Ali Rana</Text>
      </View>
      <View style={styles.Magentacontainer}>
        <Text style={styles.text}>Muddassir Ali Rana</Text>
      </View>
      <View style={styles.Orangecontainer}>
        <Text style={styles.text}>Muddassir Ali Rana</Text>
      </View>
      <Box name="Ali" no="0903i302" hexCode="#2aa198" />
    </View> */}
    <FlatList
    data={COLORS}
    style={styles.container}
    keyExtractor={item => item.hexCode}
    renderItem={({item})=>(
      <Box hexCode={item.hexCode} colorName={item.colorName}/>
            )}
            ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
    />
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  mainText: {
    color: 'black',
    fontSize: 15,
    marginTop: 20,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  Cyanyancontainer: {
    backgroundColor: '#2aa198',
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  Bluecontainer: {
    backgroundColor: '#268bd2',
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',
  },
  Magentacontainer: {
    backgroundColor: '#d33682',
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',
  },
  Orangecontainer: {
    backgroundColor: '#cb4b16',
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    color: 'white',
  },
});

export default NewApp;
