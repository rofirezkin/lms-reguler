import {Text} from 'react-native';
import React from 'react';

import {
  ICBlog,
  ICBrowser,
  ICDetail,
  ICFile,
  ICLogout,
  ICSetting,
  ICToga,
} from '../../../assets';
import {ListDefaultButton} from './CostumListStyles';
import {fonts, RowView} from '../../../utils';
import Gap from '../Gap/Gap';
import {ICNext} from '../../../assets/icon';

const ListDefault = ({title, icon, onPress}) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    switch (icon) {
      case 'toga':
        return <ICToga />;

      case 'blog':
        return <ICBlog />;

      case 'file':
        return <ICFile />;

      case 'situs':
        return <ICBrowser />;

      case 'preferensi':
        return <ICSetting />;

      case 'logout':
        return <ICLogout />;
      default:
        return <ICDetail />;
    }
  };
  return (
    <ListDefaultButton onPress={onPress}>
      <RowView justifyContent>
        <RowView>
          <Icon />
          <Gap width={20} />
          <Text style={{fontFamily: fonts.primary[600]}}>{title}</Text>
        </RowView>
        <ICNext />
      </RowView>
    </ListDefaultButton>
  );
};

export default ListDefault;
