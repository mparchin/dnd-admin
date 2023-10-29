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

export const NamedList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    {/* <SearchAction /> */}

    <Datagrid rowClick="edit" bulkActionButtons={false}>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
    </Datagrid>
  </List>
);

const SimpleEditForm = () => (
  <SimpleForm>
    <TextInput source="name" validate={required()} />
  </SimpleForm>
);

export const NamedEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const NamedCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
