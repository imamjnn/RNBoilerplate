import React, { useRef, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import MText from './MText'
import MTextInput from './MTextInput'

const MTextInputSelectFilter = ({
  placeholder='Select Items',
  data=[{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}]
}) => {

  const [itemSelected, setItemSelected] = useState(null)

  const modalizeRef = useRef(null)

  const onOpen = () => {
    modalizeRef.current?.open()
  }

  const onSelectItem = (item) => {
    console.log(item)
    setItemSelected(item)
    modalizeRef.current?.close()
  }

  return (
    <>
      <Pressable onPress={() => onOpen()} style={styles.txtInput}>
        <View style={{width: '90%'}}>
          <MText textStyle={{paddingLeft: 8, color: itemSelected ? 'black' : 'grey'}}>{itemSelected ? itemSelected.name : placeholder}</MText>
        </View>
        <View style={{width: '10%', alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='chevron-down' size={26} color='grey' />
        </View>
      </Pressable>
      <Portal>
        <Modalize 
          ref={modalizeRef} 
          snapPoint={400}
          adjustToContentHeight={true}
          HeaderComponent={
            <View style={{height: 30, justifyContent: 'center', alignItems: 'center'}}>
              <MText medium>{placeholder}</MText>
            </View>
          }
        >
          <View style={{height: 400}}>
            <View style={{padding: 10}}>
              <MTextInput
                placeholder='Search'
                iconRight='text-box-search-outline'
              />
            </View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={[...data]}
              contentContainerStyle={{flexGrow: 1}}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => onSelectItem(item)} style={{padding: 10}}>
                  <MText>{item.name}</MText>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modalize>
      </Portal>
    </>
  )
}

const styles = StyleSheet.create({
  txtInput: {
    height: 40,
    width: '100%',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: 'lightgrey'
  }
})

export default MTextInputSelectFilter