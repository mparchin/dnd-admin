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
  SelectInput,
  BooleanInput,
} from "react-admin";

import { EditActions, SearchFilter } from "./Actions";
import RichTextInput from "./textEditor";

export const ItemList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="name" />
      <TextField source="type" />
      <TextField source="rarity" />
    </Datagrid>
  </List>
);

function SimpleEditForm() {
  return (
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <SelectInput
        source="rarity"
        choices={[
          { id: "None", name: "None" },
          { id: "Common", name: "Common" },
          { id: "Uncommon", name: "Uncommon" },
          { id: "Rare", name: "Rare" },
          { id: "Very Rare", name: "Very Rare" },
          { id: "Legendary", name: "Legendary" },
          { id: "Artifact", name: "Artifact" },
        ]}
        validate={required()}
      />
      <TextInput source="type" validate={required()} />
      <TextInput source="restrictions" />
      <TextInput source="properties" />
      <BooleanInput source="needsAttunment" />
      <NumberInput source="cost" />
      <NumberInput source="weight" />
      <RichTextInput source="description" validate={required()} />
    </SimpleForm>
  );
}

export const ItemEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleEditForm />
  </Edit>
);

export const ItemCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleEditForm />
  </Create>
);
