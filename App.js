import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 10px;
`;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  
`;

export default () => {

  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill){
      setTip(nBill * 0.1);
    } else {
      alert("Digite o valor da conta")
    }
    
  }

  return(
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <CalcButton 
        title="Calcular" onPress={calc}
      />
      {tip > 0 &&
      <ResultArea>
        <ResultItemTitle>Valor da conta</ResultItemTitle>
        <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

        <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
        <ResultItem>R$ {tip.toFixed(2)} (10%)</ResultItem>

        <ResultItemTitle>Valor Total</ResultItemTitle>
        <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
      </ResultArea>
      }
    </Page>
  );
}