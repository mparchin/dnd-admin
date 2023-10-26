import {
  List,
  Datagrid,
  TextField,
  Edit,
  TextInput,
  required,
  Create,
  FilterLiveSearch,
  SimpleForm,
} from "react-admin";

import { Stack } from "@mui/material";

export const NamedList = () => (
  <List>
    <Stack direction="row" justifyContent="space-around">
      <FilterLiveSearch source="name" label="Search" />
    </Stack>

    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export function NamedEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
      </SimpleForm>
    </Edit>
  );
}

export function NamedCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
      </SimpleForm>
    </Create>
  );
}
