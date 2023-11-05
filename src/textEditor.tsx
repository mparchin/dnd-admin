import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useInput } from "react-admin";
import Editor from "ckeditor5-custom-build/build/ckeditor";

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
        onChange={(event, editor: Editor) => field.onChange(editor.getData())}
        editor={Editor}
        {...rest}
      ></CKEditor>
    </div>
  );
}
