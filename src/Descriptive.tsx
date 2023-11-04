import { Edit, TextInput, required, Create, SimpleForm } from "react-admin";

import { EditActions } from "./Actions";
import RichTextInput from "./textEditor";

const SimpleFormEdit = () => (
  <SimpleForm>
    <TextInput source="name" validate={required()} />
    <RichTextInput source="description" validate={required()} />
  </SimpleForm>
);

export const DescriptiveEdit = () => (
  <Edit actions={<EditActions />}>
    <SimpleFormEdit />
  </Edit>
);

export const DescriptiveCreate = () => (
  <Create actions={<EditActions />}>
    <SimpleFormEdit />
  </Create>
);
