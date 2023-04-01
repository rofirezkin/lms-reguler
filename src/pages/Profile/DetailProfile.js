import React from 'react';

import {Gap, Header} from '../../components';
import {AvatarProfileDosen} from '../../assets/dummy';
import {BgProfileBottom, BgProfileTop} from '../../assets/background';

import ListDefault from '../../components/atoms/CustomList/ListDefault';

import {
  AvatarView,
  BgView1,
  BgView2,
  PositionProfileView,
  Subtitle,
  Title,
} from './ProfileStyles';
import Border from '../../utils/theme/border';
import {SafeArea, SpacingView} from '../../utils';

const DetailProfile = ({navigation}) => {
  return (
    <SafeArea>
      <BgView1 source={BgProfileTop} />
      <BgView2 source={BgProfileBottom} />
      <Header onPress={() => navigation.goBack()} title="Detail Profile" />
      <PositionProfileView>
        <AvatarView source={AvatarProfileDosen} />
      </PositionProfileView>
      <Gap height={13} />
      <Title>Nama Dosen</Title>
      <Subtitle>7777600000</Subtitle>
      <SpacingView>
        <Gap height={30} />
        <Border />
        <ListDefault icon="detail" title="Detail" />
        <ListDefault icon="blog" title="Situs Blog" />
      </SpacingView>
    </SafeArea>
  );
};

export default DetailProfile;
