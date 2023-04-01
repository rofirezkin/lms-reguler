/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  ICBookGrey,
  ICCHeckBulet,
  ICKompetensi,
  ICQuiz,
  ICx,
} from '../../../assets';
import {ICAlbum, ICDocument, ICVideo} from '../../../assets/icon';
import {RowView} from '../../../utils';

import Gap from '../Gap/Gap';
import {Text} from '../typography/text.component';

const CostumListFile = ({title, icon, size, success, pageSuccess, nilai}) => {
  const Icon = () => {
    if (icon === 'Document') {
      return <ICDocument />;
    } else if (icon === 'Foto') {
      return <ICAlbum />;
    } else if (icon === 'Video') {
      return <ICVideo />;
    } else if (icon === 'Book') {
      return <ICBookGrey />;
    } else if (icon === 'quiz') {
      return <ICQuiz />;
    } else {
      return <ICKompetensi />;
    }
  };
  return (
    <RowView justifyContent listUser>
      <RowView>
        <Icon />
        <Gap width={14} />
        <Text>{title}</Text>
      </RowView>
      {size && <Text>{size}</Text>}
      {icon === 'quiz' && <Text>{nilai}</Text>}
      {pageSuccess && (
        <>{success && pageSuccess ? <ICCHeckBulet /> : <ICx />}</>
      )}
    </RowView>
  );
};

export default CostumListFile;
