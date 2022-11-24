import { IUser } from '../../interfaces/users.interface';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const usersSummary: IUser[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersSummary,
  reducers: {
    addUser: (state: IUser[], action: PayloadAction<IUser>) => {
      state.push(action.payload);
    }
  }
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
