import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : null;
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing]= useState(false);
  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  const handleRefresh = useCallback(
    async() => {
      
      setIsRefreshing(true);
      await handleFetchPalettes();
      setTimeout(()=>{
        setIsRefreshing(false)

      },1000);
    },[])

    useEffect(() => {
      if (newPalette) {
        setPalettes(current => [newPalette, ...current]);
      }
    }, [newPalette]);

 

  return (
    <FlatList
      data={palettes}
      style={styles.list}
      keyExtractor={item => item.paletteName}
      renderItem={({item}) => (
        <PalettePreview
          onPress={() => navigation.push('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
        style={styles.button}
        onPress={()=> navigation.navigate("AddNewPalette")}>
          <Text style={styles.buttonText} >Add New color Palettes ..</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'teal',
  },
});

export default Home;
