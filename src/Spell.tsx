import { useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  ReferenceField,
  Edit,
  TabbedForm,
  TextInput,
  NumberInput,
  required,
  SelectInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  Create,
  useRecordContext,
  WithRecord,
} from "react-admin";

import { EditActions, SearchFilter } from "./Actions";
import { Chip } from "@mui/material";
import RichTextInput from "./textEditor";

export const SpellList = () => (
  <List
    sort={{ field: "name", order: "ASC" }}
    perPage={25}
    filters={SearchFilter}
  >
    {/* <SearchAction /> */}

    <Datagrid rowClick="edit" bulkActionButtons={false}>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <ReferenceField source="schoolId" reference="schools">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="level" />
      <TextField source="book" />
      <BooleanField source="hasVerbalComponent" />
      <BooleanField source="hasSomaticComponent" />
      <TextField source="materials" />
      <WithRecord
        label="Spell List"
        render={(record) => {
          return record.spellListsString
            .replace("[", "")
            .replace("]", "")
            .split(",")
            .map((i: string) =>
              i == "0" ? "Arcane" : i == "1" ? "Divine" : "Primal"
            )
            .sort()
            .map((str: string) => <Chip key={str} label={str} />);
        }}
      />
      {/* <TextField source="savingThrow" /> */}
      {/* <TextField source="damageType" /> */}
      {/* <TextField source="action" /> */}
      {/* <TextField source="longerAction" /> */}
      {/* <TextField source="range" /> */}
      {/* <TextField source="duration" /> */}
      {/* <BooleanField source="isConcentration" /> */}
      {/* <BooleanField source="isRitual" /> */}
      {/* <TextField source="Description" /> */}
      {/* <TextField source="HigherLevelDescription" /> */}
      {/* <TextField source="damageFormula" /> */}
    </Datagrid>
  </List>
);

interface ILongerActionState {
  showLongerAction: boolean;
  defaultStateIsSet: boolean;
}

function TabbedEditForm() {
  const [longerActionState, setLongerActionState] = useState<
    ILongerActionState
  >();
  const record = useRecordContext();
  if (!longerActionState?.defaultStateIsSet) {
    setLongerActionState({
      showLongerAction: record?.action == 3,
      defaultStateIsSet: true,
    });
  }
  return (
    <TabbedForm>
      <TabbedForm.Tab label="Summery">
        <TextInput source="name" validate={required()} />
        <NumberInput source="level" min={0} max={9} validate={required()} />
        <TextInput source="book" />
        <AutocompleteArrayInput
          source="spellLists"
          validate={required()}
          choices={[
            { id: 0, name: "Arcane" },
            { id: 1, name: "Divine" },
            { id: 2, name: "Primal" },
          ]}
        />
        <ReferenceInput
          source="schoolId"
          reference="schools"
          validate={required()}
        >
          <AutocompleteInput optionText="name" />
        </ReferenceInput>
        <ReferenceArrayInput source="restrictedClassIds" reference="Classes">
          <AutocompleteArrayInput optionText="name" optionValue="id" />
        </ReferenceArrayInput>
        <SelectInput
          source="action"
          validate={required()}
          onChange={(e) =>
            setLongerActionState({
              showLongerAction: e.target.value == "3",
              defaultStateIsSet:
                longerActionState?.defaultStateIsSet == undefined
                  ? false
                  : longerActionState?.defaultStateIsSet,
            })
          }
          onLoadedData={(e) => console.log(e.target)}
          choices={[
            { id: 0, name: "Action" },
            { id: 1, name: "BonusAction" },
            { id: 2, name: "Reaction" },
            { id: 3, name: "Longer" },
          ]}
        />
        <TextInput
          source="longerAction"
          disabled={!longerActionState?.showLongerAction}
          defaultValue=" "
        />
        <TextInput source="range" />
        <TextInput source="duration" />
        <BooleanInput source="isConcentration" />
        <BooleanInput source="isRitual" />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Components">
        <BooleanInput source="hasVerbalComponent" />
        <BooleanInput source="hasSomaticComponent" />
        <TextInput source="materials" />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Description">
        <RichTextInput source="description" validate={required()} />
        <RichTextInput source="higherLevelDescription" />
        <ReferenceArrayInput
          source="relatedConditionIds"
          reference="Conditions"
        >
          <AutocompleteArrayInput optionText="name" optionValue="id" />
        </ReferenceArrayInput>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Filter">
        <SelectInput
          source="savingThrow"
          choices={[
            { id: 0, name: "Strength" },
            { id: 1, name: "Constitution" },
            { id: 2, name: "Dexterity" },
            { id: 3, name: "Intelligence" },
            { id: 4, name: "Wisdom" },
            { id: 5, name: "Charisma" },
          ]}
        />
        <AutocompleteArrayInput
          source="damageTypes"
          choices={[
            { id: 0, name: "Acid" },
            { id: 1, name: "Bludgeoning" },
            { id: 2, name: "Cold" },
            { id: 3, name: "Fire" },
            { id: 4, name: "Force" },
            { id: 5, name: "Lightning" },
            { id: 6, name: "Necrotic" },
            { id: 7, name: "Piercing" },
            { id: 8, name: "Poison" },
            { id: 9, name: "Psychic" },
            { id: 10, name: "Radiant" },
            { id: 11, name: "Slashing" },
            { id: 12, name: "Thunder" },
          ]}
        />
        <ReferenceArrayInput source="spellTagIds" reference="SpellTags">
          <AutocompleteArrayInput optionText="name" optionValue="id" />
        </ReferenceArrayInput>
      </TabbedForm.Tab>
    </TabbedForm>
  );
}

export const SpellEdit = () => (
  <Edit actions={<EditActions />}>
    <TabbedEditForm />
  </Edit>
);

export const SpellCreate = () => (
  <Create actions={<EditActions />}>
    <TabbedEditForm />
  </Create>
);
