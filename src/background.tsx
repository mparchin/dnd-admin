import {
  List,
  Datagrid,
  TextField,
  Edit,
  TextInput,
  required,
  Create,
  SimpleForm,
} from "react-admin";

import { EditActions, SearchFilter } from "./Actions";
import RichTextInput from "./textEditor";

export const BackgroundList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="skills" />
    </Datagrid>
  </List>
);

function SimpleEditForm() {
  return (
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="skills" />
      <RichTextInput source="description" validate={required()} />
    </SimpleForm>
  );
}

export const BackgroundEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const BackgroundCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
