import { Admin, Resource, useAuthState } from "react-admin";
import odataProvider, { OdataDataProvider } from "ra-data-odata-server";

import { SpellCreate, SpellEdit, SpellList } from "./Spell";
import { useEffect, useState } from "react";
import {
  MenuBook,
  School,
  Accessible,
  Tag,
  Class,
  Details,
  MilitaryTech,
  Gavel,
  AutoFixHigh,
} from "@mui/icons-material";
import { NamedCreate, NamedEdit, NamedList } from "./Named";
import { DescriptiveCreate, DescriptiveEdit } from "./Descriptive";
import { FeatureCreate, FeatureEdit, FeatureList } from "./Feature";
import { FeatCreate, FeatEdit, FeatList } from "./Feat";
import { RuleCreate, RuleEdit, RuleList } from "./rule";
import { authProvider } from "./authProvider";
import { ClassCreate, ClassEdit, ClassList } from "./Class";
import { ItemCreate, ItemEdit, ItemList } from "./item";

const apiAddress = import.meta.env.VITE_ODATA_ADDRESS
  ? import.meta.env.VITE_ODATA_ADDRESS
  : "https://eldoriantales.com/odata";

function getAccessToken(): Promise<string> {
  return authProvider
    .checkAuth("")
    .then(() => localStorage.getItem("auth") ?? "")
    .catch(() => "");
}

export default function App() {
  const [dataProvider, setDataProvider] = useState<OdataDataProvider>();

  useEffect(() => {
    odataProvider(apiAddress, () => {
      return getAccessToken().then((token) => ({
        commonHeaders: {
          Authorization: "Bearer " + localStorage.getItem("auth") ?? "",
        },
      }));
    }).then((p) => setDataProvider(p));
    return () => {};
  }, []);

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        key="Classes"
        name="Classes"
        recordRepresentation={(record) => record.name}
        list={ClassList}
        hasShow={false}
        edit={ClassEdit}
        hasCreate={true}
        create={ClassCreate}
        icon={Class}
      />
      <Resource
        key="Conditions"
        name="Conditions"
        recordRepresentation={(record) => record.name}
        list={NamedList}
        hasShow={false}
        edit={DescriptiveEdit}
        hasCreate={true}
        create={DescriptiveCreate}
        icon={Accessible}
      />
      <Resource
        key="Schools"
        name="Schools"
        recordRepresentation={(record) => record.name}
        list={NamedList}
        hasShow={false}
        edit={NamedEdit}
        hasCreate={true}
        create={NamedCreate}
        icon={School}
      />

      <Resource
        key="SpellTags"
        name="SpellTags"
        recordRepresentation={(record) => record.name}
        list={NamedList}
        hasShow={false}
        edit={NamedEdit}
        hasCreate={true}
        create={NamedCreate}
        icon={Tag}
      />

      <Resource
        key="Spells"
        name="Spells"
        list={SpellList}
        edit={SpellEdit}
        hasCreate={true}
        create={SpellCreate}
        hasShow={false}
        icon={MenuBook}
      />
      <Resource
        key="Features"
        name="Features"
        list={FeatureList}
        edit={FeatureEdit}
        hasCreate={true}
        create={FeatureCreate}
        hasShow={false}
        icon={Details}
      />
      <Resource
        key="Feats"
        name="Feats"
        list={FeatList}
        edit={FeatEdit}
        hasCreate={true}
        create={FeatCreate}
        hasShow={false}
        icon={MilitaryTech}
      />

      <Resource
        key="Rules"
        name="Rules"
        list={RuleList}
        edit={RuleEdit}
        hasCreate={true}
        create={RuleCreate}
        hasShow={false}
        icon={Gavel}
      />

      <Resource
        key="Items"
        name="Items"
        list={ItemList}
        edit={ItemEdit}
        hasCreate={true}
        create={ItemCreate}
        hasShow={false}
        icon={AutoFixHigh}
      />
    </Admin>
  );
}
