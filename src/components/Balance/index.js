import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MotiView } from "moti";

const BalanceItem = ({ title, value, style }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{title}</Text>
    <View style={styles.content}>
      <Text style={styles.currencySymbol}>R$</Text>
      <Text style={[styles.value, style]}>{value}</Text>
    </View>
  </View>
);

export default function Balance({ saldo, gastos }) {
  const transitionConfig = {
    type: 'timing',
    delay: 300,
    duration: 900
  };

  return (
    <MotiView style={styles.container}
      from={{ rotateX: '-100deg', opacity: 0 }}
      animate={{ rotateX: '0deg', opacity: 1 }} 
      transition={transitionConfig}>
      
      <BalanceItem title="Saldo" value={saldo} style={styles.balance} />
      <BalanceItem title="Gastos" value={gastos} style={styles.expenses} />

    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 15,
    marginEnd: 15,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#DADADA",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#DADADA",
    marginRight: 6,
  },
  value: {
    fontSize: 22,
  },
  balance: {
    color: "#2ecc71",
  },
  expenses: {
    color: "#e74c3c",
  },
});