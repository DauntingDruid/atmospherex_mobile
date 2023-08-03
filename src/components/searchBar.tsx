import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const SearchBar = () => {
  const [text, onChangeText] = useState('');

  const locationSearch = (text: string) =>{
    console.log("Text: ",text)
    onChangeText(text)
  }

  return (
    <View style={styles.searchBar} >
      <TextInput
        placeholder='Search Location'
        style={styles.input}
        onChangeText={(e) => locationSearch(e)}
        value={text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    width: '80%',
    backgroundColor: '#535353',
    opacity: 0.3,
    borderColor: 'white',
    height: 40,
    borderRadius: 30,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: 20
  },
  input: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    color: 'white'
  }
});



export default SearchBar