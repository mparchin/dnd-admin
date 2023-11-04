import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useInput, required } from "react-admin";

export default function RichTextInput(props: any) {
  const { onChange, onBlur, onReady, onFocus, label, ...rest } = props;
  const {
    field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
    isRequired,
  } = useInput({
    // Pass the event handlers to the hook but not the component as the field property already has them.
    // useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
    onChange,
    onBlur,
    ...rest,
  });

  return (
    <div>
      <caption>{field.name}:</caption>
      <CKEditor
        data={field.value}
        onChange={(event, editor: ClassicEditor) =>
          field.onChange(editor.getData())
        }
        editor={ClassicEditor}
        {...rest}
      ></CKEditor>
    </div>
  );
}
