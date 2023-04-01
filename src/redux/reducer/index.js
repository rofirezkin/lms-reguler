import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {loadingReducer} from './loading';
import {loginReducer} from './auth';
import {timelineReducer} from './timeline';
import {userReducer} from './user';
import {berandaMahasiswaReducer} from './berandaMahasiswa';
import {dasborReducer} from './dasbor';
import {gambaranKursusReducer} from './gambaranKursus';
import {allTimelineReducer} from './allTimeline';
import {taskDetailReducer} from './taskDetail';
import {mataKuliahReducer} from './mataKuliah';
import {pemberitahuanReducer} from './pemberitahuan';
import {pageReducer} from './page';
import {quizReducer} from './quiz';
import {answerCounter} from './answerCounter';
const reducer = combineReducers({
  answerCounter,
  quizReducer,
  pageReducer,
  allTimelineReducer,
  pemberitahuanReducer,
  mataKuliahReducer,
  taskDetailReducer,
  loadingReducer,
  globalReducer,
  loginReducer,
  timelineReducer,
  userReducer,
  berandaMahasiswaReducer,
  dasborReducer,
  gambaranKursusReducer,
}); //combine reducer karena reducer akan banyak

export default reducer;
