import { Edit, TextInput, required, Create, SimpleForm } from "react-admin";

import { RichTextInput } from "ra-input-rich-text";
import { EditActions } from "./Actions";

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
