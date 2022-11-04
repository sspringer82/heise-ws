import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Person, { FormPerson } from './Person';

export interface PersonState {
  persons: Person[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PersonState = {
  persons: [],
  status: 'idle',
};

export const fetchPersons = createAsyncThunk(
  'persons/fetchPersons',
  async () => {
    const response = await fetch('http://localhost:3001/users');
    return response.json();
  }
);

export const removePerson = createAsyncThunk(
  'persons/removePerson',
  async (id: number) => {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);

export const createPerson = createAsyncThunk(
  'persons/createPerson',
  async (person: FormPerson) => {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    });
    return response.json();
  }
);

export const personSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // -- fetch --
    builder
      .addCase(fetchPersons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPersons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.persons = action.payload;
      })
      .addCase(fetchPersons.rejected, (state) => {
        state.status = 'failed';
      });
    // -- remove --
    builder.addCase(removePerson.fulfilled, (state, action) => {
      const index = state.persons.findIndex(
        (person) => person.id === action.payload
      );
      state.persons.splice(index, 1);
    });

    // -- create --
    builder.addCase(createPerson.fulfilled, (state, action) => {
      state.persons.push(action.payload);
    });
  },
});

export const selectPersons = (state: RootState) => state.persons.persons;
export const selectPersonStatus = (state: RootState) => state.persons.status;

export default personSlice.reducer;
