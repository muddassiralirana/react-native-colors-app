import React from 'react';
import { useCallback, useEffect, useState  } from 'react';

import {FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';


// const COLORS = [
//   { colorName: 'Base03', hexCode: '#002b36' },
//   { colorName: 'Base02', hexCode: '#073642' },
//   { colorName: 'Base01', hexCode: '#586e75' },
//   { colorName: 'Base00', hexCode: '#657b83' },
//   { colorName: 'Base0', hexCode: '#839496' },
//   { colorName: 'Base1', hexCode: '#93a1a1' },
//   { colorName: 'Base2', hexCode: '#eee8d5' },
//   { colorName: 'Base3', hexCode: '#fdf6e3' },
//   { colorName: 'Yellow', hexCode: '#b58900' },
//   { colorName: 'Orange', hexCode: '#cb4b16' },
//   { colorName: 'Red', hexCode: '#dc322f' },
//   { colorName: 'Magenta', hexCode: '#d33682' },
//   { colorName: 'Violet', hexCode: '#6c71c4' },
//   { colorName: 'Blue', hexCode: '#268bd2' },
//   { colorName: 'Cyan', hexCode: '#2aa198' },
//   { colorName: 'Green', hexCode: '#859900' },
// ];



const Home = ({navigation}) => {
  

  const [palettes, setPlettes] = useState([]);
  const handleFetchPalettes = useCallback(
    async() => {
     const response= await fetch("https://color-palette-api.kadikraman.vercel.app/palettes");
     if (response.ok){
       const palettes= await response.json();
       setPlettes(palettes);
     }
    },
    [],
  )
   useEffect(() => {
    handleFetchPalettes()
   
   }, [])

  return (
    // <View>
    //   <TouchableOpacity 
      
    //   onPress={()=>
    //   navigation.push('ColorPalette',{
    //     palettName:"Solarized",
    //     color:COLORS,
    //   })
      
    //   }>
    //   <Text>Solarized</Text>

    //   </TouchableOpacity>
    // </View>


    <FlatList
    data={palettes}
    style={styles.list }
    keyExtractor={item=>item.paletteName}
    renderItem={({item})=>(
      <PalettePreview
  
        onPress={()=>
        navigation.push("ColorPalette",item)}
      palette={item}
       />
         
    

    )}
    
    
    />
  );
};

const styles=StyleSheet.create({
  list:{
    flex:1,
    padding:10,
    backgroundColor:"white",
  },
});

export default Home;
