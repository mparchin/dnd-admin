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

export const RaceList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
    </Datagrid>
  </List>
);

function SimpleEditForm() {
  return (
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="imageUrl" helperText="لینک عکس رو بذار این تو" />
      <RichTextInput source="description" validate={required()} />
      <RichTextInput source="info" />
    </SimpleForm>
  );
}

export const RaceEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const RaceCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
