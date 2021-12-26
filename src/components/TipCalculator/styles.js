import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const HeaderText = styled.Text`
  margin-top: 20px;
  font-size: ${RFValue(25)}px;
`;

export const Input = styled.TextInput`
  width: ${RFPercentage(45)}px;
  height: ${RFValue(50)}px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

export const CalcButton = styled.Button`
  margin-top: 10px;
`;

export const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ResultItemTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  margin-top: 30px;
`;

export const ResultItem = styled.Text`
  font-size: ${RFValue(15)}px;
`;

export const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

export const PctItem = styled.Button``;
