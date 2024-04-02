import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ActionButton = ({ iconName, label }) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={styles.areaButton}>
      <AntDesign name={iconName} size={26} color="#000" />
    </View>
    <Text style={styles.labelButton}>{label}</Text>
  </TouchableOpacity>
);

export default function Actions() {
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      <ActionButton iconName='addfolder' label='Entradas' />
      <ActionButton iconName='tagso' label='Compras' />
      <ActionButton iconName='creditcard' label='Carteira' />
      <ActionButton iconName='barcode' label='Boletos' />
      <ActionButton iconName='setting' label='Conta' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})