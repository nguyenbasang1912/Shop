import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from './Section';
import Row from './Row';
import Spacer from './Spacer';

const ToolBar = ({leftComponent, rightComponent, centerComponent, style}) => {
  const renderLeft = () => {
    return leftComponent || <Spacer />;
  };

  const renderCenter = () => {
    return <Section f={1}>{centerComponent}</Section>;
  };

  const renderRight = () => {
    return rightComponent || <Spacer />;
  };
  return (
    <Section ph={16} pv={28} style={style}>
      <Row>
        {renderLeft()}
        <Spacer w={12} />
        {renderCenter()}
        {renderRight()}
      </Row>
    </Section>
  );
};

export default ToolBar;

const styles = StyleSheet.create({});
