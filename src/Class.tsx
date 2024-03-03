import {
  List,
  Datagrid,
  TextField,
  Edit,
  TextInput,
  required,
  Create,
  SimpleForm,
  NumberField,
  NumberInput,
} from "react-admin";

import { EditActions, SearchFilter } from "./Actions";

export const ClassList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    {/* <SearchAction /> */}

    <Datagrid rowClick="edit" bulkActionButtons={false}>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <NumberField source="hitDie" />
      <TextField source="proficiencyBonous" />
      <TextField source="casterSubClassName" />
      <TextField source="manaPerLevel" />
    </Datagrid>
  </List>
);

const SimpleEditForm = () => (
  <SimpleForm>
    <TextInput source="name" validate={required()} />
    <NumberInput source="hitDie" validate={required()} />
    <TextInput source="proficiencyBonous" validate={required()} />
    <TextInput source="manaPerLevel" validate={required()} />
    <TextInput source="casterSubClassName" />
  </SimpleForm>
);

export const ClassEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const ClassCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
