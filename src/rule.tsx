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

export const RuleList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="category" />
      <NumberField source="order" />
    </Datagrid>
  </List>
);

function SimpleEditForm() {
  return (
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <NumberInput source="order" min={1} max={100} />
      <TextInput source="category" validate={required()} />
      <RichTextInput source="description" validate={required()} />
    </SimpleForm>
  );
}

export const RuleEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const RuleCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
