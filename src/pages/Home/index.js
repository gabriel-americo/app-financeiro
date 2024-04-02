import React, { useMemo } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

export default function Home() {
  const list = [
    {
      id: 1,
      label: 'Conta de luz',
      value: '520,00',
      date: '10/09/2023',
      type: 0
    },
    {
      id: 2,
      label: 'Pix Cliente Fulano',
      value: '2.000,00',
      date: '15/09/2023',
      type: 1
    },
    {
      id: 3,
      label: 'Salario',
      value: '7.600,20',
      date: '17/09/2023',
      type: 1
    },
    {
      id: 4,
      label: 'Item 4',
      value: '1.000,00',
      date: '18/09/2023',
      type: 0
    },
    {
      id: 5,
      label: 'Item 5',
      value: '2.500,00',
      date: '19/09/2023',
      type: 1
    },
    {
      id: 6,
      label: 'Item 6',
      value: '3.000,00',
      date: '20/09/2023',
      type: 0
    },
    {
      id: 7,
      label: 'Item 7',
      value: '4.500,00',
      date: '21/09/2023',
      type: 1
    },
    {
      id: 8,
      label: 'Item 8',
      value: '5.000,00',
      date: '22/09/2023',
      type: 0
    },
  ];

  const convertToNumber = (value) => Number(value.replace(/\./g, '').replace(',', '.'));
  
  const saldo = useMemo(() => list.reduce((acc, item) => item.type === 1 ? acc + convertToNumber(item.value) : acc, 0), [list]);
  const gastos = useMemo(() => list.reduce((acc, item) => item.type === 0 ? acc + convertToNumber(item.value) : acc, 0), [list]);

  const saldoFormatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const gastosFormatado = gastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
  }
})
