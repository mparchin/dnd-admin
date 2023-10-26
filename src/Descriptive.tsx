import { Edit, TextInput, required, Create, SimpleForm } from "react-admin";

import { RichTextInput } from "ra-input-rich-text";

export function DescriptiveEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <RichTextInput source="description" validate={required()} />
      </SimpleForm>
    </Edit>
  );
}

export function DescriptiveCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <RichTextInput source="description" validate={required()} />
      </SimpleForm>
    </Create>
  );
}
