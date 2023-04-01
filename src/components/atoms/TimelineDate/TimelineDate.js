import React from 'react';

import {DateView, TextView} from './TimelineDateStyles';

const TimelineDate = ({date}) => {
  return (
    <DateView>
      <TextView>{date}</TextView>
    </DateView>
  );
};

export default TimelineDate;
