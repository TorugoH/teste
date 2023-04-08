import { StyleSheet, View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import React from 'react';
function MyStack() {
  
    
  const navigation = useNavigation();

 //verTabela()
  return (
    <View>
      <Cb title="Visualização das despesas"/>
      <Text style={aviso.av}>Não temos registro no momento</Text>
      <Botaoflutuante
      onPress={() => navigation.navigate('Cadastrodespesas')}
      />

    </View>
  );
}
const aviso = StyleSheet.create({
    av:{
      left:60,
      top:200,
      fontSize:20
    }
})
export default MyStack;