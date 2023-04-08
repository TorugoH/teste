
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Cb = (props,{goBack}) => (
    <SafeAreaProvider>

  <Appbar.Header mode='center-aligned'>
      {
        goBack &&
        <Appbar.BackAction onPress={goBack}/>
      }
      <Appbar.Action {...props}/>
      <Appbar.Content color="green" {...props} />
    </Appbar.Header>
  </SafeAreaProvider>
  );

  const estilo = StyleSheet.create({
      cabecalho:{
      backgroundColor:"green"
      }
  })
export default Cb;