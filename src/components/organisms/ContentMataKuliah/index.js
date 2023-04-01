import React from 'react';

import {CustomList, Gap} from '../../atoms';
import {ProgressView} from '@react-native-community/progress-view';
import Description from '../../atoms/Description/Description';

import ListContent from './ListContent';
import {PersenView, ProgressBarView} from './ContentStyles';

import {useSelector} from 'react-redux';
import {FlexView, ScrollView, SpacingView} from '../../../utils';

const Content = () => {
  const {content} = useSelector(state => state.mataKuliahReducer);

  return (
    <ScrollView>
      <SpacingView>
        <Gap height={20} />
        <ProgressBarView>
          <FlexView>
            <ProgressView
              progressTintColor="#FFD600"
              trackTintColor="#F2F2F2"
              progress={content.statusProgres / 100}
            />
          </FlexView>

          <Gap width={14} />
          <PersenView>{content.statusProgres}%</PersenView>
        </ProgressBarView>
        <Gap height={20} />
        <CustomList label={content.namaMatakuliah} onlyLabel />
        <Gap height={10} />
        <Description
          title="Identitas Mata Kuliah"
          description={content.identitasKuliah}
          profile={content.sejarahKuliah}
        />
        <Gap height={20} />
        <ListContent materiKuliah={content.materiKuliah} />
      </SpacingView>
    </ScrollView>
  );
};

export default Content;
