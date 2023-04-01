import React, {useState} from 'react';
import {TabBarView, Title, TouchableView} from './TabBarStyles';
import {TouchableOpacity} from 'react-native';
import {
  ICNextLeftActive,
  ICNextLeftInactive,
  ICNextRightActive,
  ICNextRightInactive,
} from '../../../assets/icon';
const TabBarCustom = ({activeDashboard, activePage, role}) => {
  const [dasbor, setDasbor] = useState(true);
  const [countBar, setCountBar] = useState(0);

  const firstTitleAction = () => {
    setDasbor(true);
    activeDashboard(true);
  };
  const secondTitleAction = () => {
    setDasbor(false);
    activeDashboard(false);
  };

  const nameBar = [
    {
      id: 1,
      firstTitle: 'Konten',
      secondTitle: 'Partisipan',
    },
    {
      id: 2,
      firstTitle: 'Nilai',
      secondTitle: 'Kompetensi',
    },
    {
      id: 3,
      firstTitle: role === 'Dosen' ? 'Notes' : 'Feedback',
      secondTitle: 'Terselesaikan',
    },
  ];

  const PreviousAction = () => {
    setCountBar(countBar - 1);
    activePage(countBar - 1);

    setDasbor(true);
  };
  const NextAction = () => {
    setCountBar(countBar + 1);
    activePage(countBar + 1);
    setDasbor(true);
  };

  return (
    <TabBarView>
      <TouchableOpacity
        onPress={PreviousAction}
        disabled={countBar === 0}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {countBar === 0 ? <ICNextLeftInactive /> : <ICNextLeftActive />}
      </TouchableOpacity>
      <TouchableView active={dasbor} onPress={firstTitleAction}>
        <Title>{nameBar[countBar].firstTitle} </Title>
      </TouchableView>
      <TouchableView active={!dasbor} onPress={secondTitleAction}>
        <Title>{nameBar[countBar].secondTitle} </Title>
      </TouchableView>
      <TouchableOpacity
        disabled={countBar === 2}
        onPress={NextAction}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {countBar === 2 ? <ICNextRightInactive /> : <ICNextRightActive />}
      </TouchableOpacity>
    </TabBarView>
  );
};

export default TabBarCustom;
