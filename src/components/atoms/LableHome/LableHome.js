import React from 'react';
import {ICNext, ICYellowDashboard} from '../../../assets/icon';

import Gap from '../Gap/Gap';
import {IconNext, IconView, LableStyle, LableText} from './LableHomeStyles';
import {TouchableOpacity} from 'react-native';
import {SpacingView} from '../../../utils';

const LableHome = ({title, next}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} disabled={!next} onPress={next}>
      <SpacingView borderBottom={next}>
        <LableStyle>
          <ICYellowDashboard />
        </LableStyle>
        <IconView>
          <LableText>{title}</LableText>
          {title === 'Gambaran Kursus' && (
            <IconNext>
              <ICNext />
            </IconNext>
          )}
          <Gap height={18} />
          {next && <ICNext />}
        </IconView>
      </SpacingView>
    </TouchableOpacity>
  );
};

export default LableHome;
