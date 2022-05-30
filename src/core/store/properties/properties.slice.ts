import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Immobile } from '../../entities/immobile';

export interface PropertiesState {
  isLoading: boolean;
  properties: Immobile[];
}

const initialState: PropertiesState = {
  isLoading: false,
  properties: [],
};

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    fetchPropertiesSuccess: (state, action: PayloadAction<Immobile[]>) => {
      state.isLoading = false;
      state.properties = action.payload;
    },
    fetchPropertiesFailed: (state, action: PayloadAction) => {
      state.isLoading = false;
    },
    createPropertySuccess: (state, action: PayloadAction<Immobile>) => {
      state.isLoading = false;
      state.properties.push(action.payload);
    },
  },
});

export const {
  loading,
  fetchPropertiesSuccess,
  fetchPropertiesFailed,
  createPropertySuccess,
} = propertiesSlice.actions;

export default propertiesSlice.reducer;
