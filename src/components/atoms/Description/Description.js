import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {
  DescriptionCardView,
  DescriptionText,
  MoreText,
  Title,
} from './DescriptionStyles';
import Gap from '../Gap/Gap';

const Description = ({title, description, profile}) => {
  const [moreText, setMoreText] = useState(false);
  var string = `${description}`;
  var length = 150;

  if (string.length > 150 && moreText === false) {
    var trimmedString = string.substring(0, length);
    var result = `${trimmedString}...`;
  } else {
    var result = `${description}`;
  }

  return (
    <>
      <DescriptionCardView>
        {title && <Title>{title}</Title>}
        <DescriptionText>{result}</DescriptionText>
        <Gap height={10} />
        {profile && (
          <>
            <Title>Profile dan Sejarah Mata Kuliah</Title>
            <DescriptionText>{profile}</DescriptionText>
          </>
        )}
      </DescriptionCardView>
      <TouchableOpacity onPress={() => setMoreText(!moreText)}>
        {moreText === true ? (
          <MoreText>Sembunyikan </MoreText>
        ) : (
          <MoreText>Tampilkan lebih </MoreText>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Description;
