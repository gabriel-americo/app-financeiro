import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: 'Boleto de luz',
    value: '300,00',
    date: '17/09/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.000,00',
    date: '17/09/2023',
    type: 1
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.000,00',
    date: '17/09/2023',
    type: 1
  }
];

// Converte o valor para número e soma com base no tipo
const saldo = list.reduce((acc, item) => item.type === 1 ? acc + Number(item.value.replace('.', '').replace(',', '.')) : acc, 0);
const gastos = list.reduce((acc, item) => item.type === 0 ? acc + Number(item.value.replace('.', '').replace(',', '.')) : acc, 0);

// Converte o saldo e gastos para o formato de moeda brasileira
const saldoFormatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const gastosFormatado = gastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabriel Americo" />

      <Balance saldo={saldoFormatado} gastos={gastosFormatado} />

      <Actions />

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
})
