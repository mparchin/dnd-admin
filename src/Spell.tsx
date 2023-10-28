import { RichTextInput } from "ra-input-rich-text";
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
  FilterLiveSearch,
  ChipField,
  useRecordContext,
} from "react-admin";

import { Stack } from "@mui/material";

export const SpellList = () => (
  <List>
    <Stack direction="row" justifyContent="space-around">
      <FilterLiveSearch source="name" label="Search" />
    </Stack>

    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="schoolId" reference="schools">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="level" />
      <TextField source="book" />
      <BooleanField source="hasVerbalComponent" />
      <BooleanField source="hasSomaticComponent" />
      <TextField source="materials" />
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

export function SpellEdit() {
  const [showLongerAction, setShowLongerAction] = useState<boolean>();
  return (
    <Edit>
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
            onChange={(e) => setShowLongerAction(e.target.value == "Longer")}
            choices={[
              { id: 0, name: "Action" },
              { id: 1, name: "BonusAction" },
              { id: 2, name: "Reaction" },
              { id: 3, name: "Longer" },
            ]}
          />
          <TextInput
            source="longerAction"
            disabled={!showLongerAction}
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
    </Edit>
  );
}

export function SpellCreate() {
  const [showLongerAction, setShowLongerAction] = useState<boolean>();
  return (
    <Create>
      <TabbedForm>
        <TabbedForm.Tab label="Summery">
          <TextInput source="name" validate={required()} />
          <NumberInput source="level" min={0} max={9} validate={required()} />
          <TextInput source="book" />
          <SelectInput
            source="spellList"
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
            onChange={(e) => setShowLongerAction(e.target.value == "3")}
            choices={[
              { id: 0, name: "Action" },
              { id: 1, name: "BonusAction" },
              { id: 2, name: "Reaction" },
              { id: 3, name: "Longer" },
            ]}
          />
          <TextInput
            source="longerAction"
            disabled={!showLongerAction}
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
          <SelectInput
            source="damageType"
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
    </Create>
  );
}
