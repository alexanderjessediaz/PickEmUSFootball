import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../models';
import {RootState} from '../store';

const initialState: User = {
  firstName: '',
  lastName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
  },
});

export const {setFirstName, setLastName} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
