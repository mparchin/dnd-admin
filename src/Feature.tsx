import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  Edit,
  TextInput,
  NumberInput,
  required,
  ReferenceInput,
  AutocompleteInput,
  Create,
  SimpleForm,
} from "react-admin";

import { EditActions, SearchFilter } from "./Actions";
import RichTextInput from "./textEditor";

export const FeatureList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <ReferenceField source="classId" reference="classes">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="subclass" />
      <NumberField source="level" />
      <NumberField source="order" />
    </Datagrid>
  </List>
);

function SimpleEditForm() {
  return (
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <NumberInput source="level" min={0} max={20} validate={required()} />
      <NumberInput source="order" min={1} max={20} />
      <TextInput source="subclass" />

      <ReferenceInput
        source="classId"
        reference="classes"
        validate={required()}
      >
        <AutocompleteInput optionText="name" optionValue="id" />
      </ReferenceInput>

      <RichTextInput source="description" validate={required()} />
    </SimpleForm>
  );
}

export const FeatureEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const FeatureCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
