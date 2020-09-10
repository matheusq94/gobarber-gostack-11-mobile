import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  margin: 64px 0 24px;

  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  line-height: 26px;

  color: #f4ede8;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  border-top-width: 1px;
  border-top-color: #232129;

  padding: 16px 0 ${16 + getBottomSpace()}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
