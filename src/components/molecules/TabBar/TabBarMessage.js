import React, {useState} from 'react';
import {TabBarView, Title, TouchableView} from './TabBarStyles';

const TabBarMessage = ({activeDashboard}) => {
  const [dasbor, setDasbor] = useState(true);

  const allAction = () => {
    setDasbor(false);
    activeDashboard(false);
  };
  const personalAction = () => {
    setDasbor(true);
    activeDashboard(true);
  };
  const groupAction = () => {
    setDasbor(true);
    activeDashboard(true);
  };
  return (
    <TabBarView>
      <TouchableView active={!dasbor} onPress={allAction}>
        <Title>Semua </Title>
      </TouchableView>
      <TouchableView active={dasbor} onPress={personalAction}>
        <Title>Personal </Title>
      </TouchableView>
      <TouchableView active={dasbor} onPress={groupAction}>
        <Title>Group </Title>
      </TouchableView>
    </TabBarView>
  );
};

export default TabBarMessage;
