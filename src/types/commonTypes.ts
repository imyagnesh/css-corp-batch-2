import rootReducer from 'reducers/rootReducer';
import store from '../configureStore';

export enum GenderEnum {
  male = 'male',
  female = 'female',
  other = 'other',
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
