import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  TextInput,
  NumberInput,
  required,
  Create,
  SimpleForm,
} from "react-admin";

import { EditActions, SearchFilter } from "./Actions";
import RichTextInput from "./textEditor";

export const FeatList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <NumberField source="level" />
      <TextField source="prerequisite" />
    </Datagrid>
  </List>
);

function SimpleEditForm() {
  return (
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <NumberInput source="level" min={1} max={20} validate={required()} />
      <TextInput source="prerequisite" />

      <RichTextInput source="description" validate={required()} />
    </SimpleForm>
  );
}

export const FeatEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const FeatCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
