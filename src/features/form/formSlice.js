import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  forms: [
    {
      id: 1,
      firstName: "Usama",
      lastName: "Ashraf",
      address: "KRL Road Rawalpindi",
      company: "Wanclouds",
      telephone: "0330-5710260",
    },
  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      const form = {
        id: nanoid(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        address: action.payload.address,
        company: action.payload.company,
        telephone: action.payload.telephone,
      };
      state.forms.push(form);
    },
    removeFormData: (state, action) => {
      state.forms = state.forms.filter((form) => form.id !== action.payload);
    },
  },
});

export const { addFormData, removeFormData } = formSlice.actions;
export default formSlice.reducer;

console.log(initialState.forms);
