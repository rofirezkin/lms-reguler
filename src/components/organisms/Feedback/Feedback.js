import React, {useState} from 'react';

import {Gap} from '../../atoms';

import {ICPanah} from '../../../assets/DetailKuliah';
import {ICButton} from '../../../assets/icon';
import {ButttonView} from '../../../utils/theme/area';
import {ButtonBack} from './FeedbackStyles';
import {ScrollView, SpacingView} from '../../../utils';
import {ModalPesan, ModalSuccess} from '../../molecules';

import DetailFeedback from './DetailFeedback';
import ListFeedback from './ListFeedback';

const Feedback = () => {
  const [navigationPage, setNavigationPage] = useState(false);
  const [button, setButton] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = () => {
    setSuccess(true);
    setButton(false);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  const handleInput = () => {
    setButton(true);
  };
  return (
    <>
      <ModalSuccess visible={success} />
      <ModalPesan
        feedback={true}
        visible={button}
        onRequestClose={() => setButton(false)}
        onSubmit={onSubmit}
      />
      <ScrollView>
        <SpacingView>
          <Gap height={20} />
          {navigationPage === false ? (
            <>
              <ListFeedback
                navigatePage={e => setNavigationPage(e)}
                deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
                mode="forum"
                name="Judul Feedback"
                title="Nama Mahasiswa"
                date="21/04/2022 | 10:00"
              />
              <Gap height={20} />
              <ListFeedback
                navigatePage={e => setNavigationPage(e)}
                deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
                mode="forum"
                name="Judul Feedback"
                title="Nama Mahasiswa"
                date="21/04/2022 | 10:00"
              />
              <Gap height={20} />
              <ListFeedback
                navigatePage={e => setNavigationPage(e)}
                deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
                mode="forum"
                name="Judul Feedback"
                title="Nama Mahasiswa"
                date="21/04/2022 | 10:00"
              />
              <Gap height={20} />
              <ListFeedback
                navigatePage={e => setNavigationPage(e)}
                deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
                mode="forum"
                name="Judul Feedback"
                title="Nama Mahasiswa"
                date="21/04/2022 | 10:00"
              />
            </>
          ) : (
            <>
              <ButtonBack onPress={() => setNavigationPage(false)}>
                <ICPanah />
              </ButtonBack>
              <DetailFeedback />
            </>
          )}
        </SpacingView>
      </ScrollView>

      <ButttonView onPress={handleInput}>
        <ICButton />
      </ButttonView>
    </>
  );
};

export default Feedback;
