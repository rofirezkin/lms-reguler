import React, {useState} from 'react';
import {TabBarView, Title, TouchableView} from './NavbarStyles';

const TabBar = ({activeDashboard}) => {
  const [dasbor, setDasbor] = useState(true);

  const berandaAction = () => {
    setDasbor(false);
    activeDashboard(false);
  };
  const dasborAction = () => {
    setDasbor(true);
    activeDashboard(true);
  };
  return (
    <TabBarView>
      <TouchableView active={!dasbor} onPress={berandaAction}>
        <Title>Beranda </Title>
      </TouchableView>
      <TouchableView active={dasbor} onPress={dasborAction}>
        <Title>Dasbor </Title>
      </TouchableView>
    </TabBarView>
  );
};

export default TabBar;
