import { Admin, Resource } from "react-admin";
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
} from "@mui/icons-material";
import { NamedCreate, NamedEdit, NamedList } from "./Named";
import { DescriptiveCreate, DescriptiveEdit } from "./Descriptive";
import { FeatureCreate, FeatureEdit, FeatureList } from "./Feature";
import { FeatCreate, FeatEdit, FeatList } from "./Feat";
import { RuleCreate, RuleEdit, RuleList } from "./rule";
import { authProvider } from "./authProvider";

const apiAddress = import.meta.env.VITE_ODATA_ADDRESS
  ? import.meta.env.VITE_ODATA_ADDRESS
  : "https://eldoriantales.com/odata";

function getAccessToken(): Promise<string | null> {
  return authProvider.checkAuth("").then(() => {
    var auth = localStorage.getItem("auth");
    console.warn("used auth: " + auth);
    return auth;
  });
}

export default function App() {
  const [dataProvider, setDataProvider] = useState<OdataDataProvider>();
  const [accessToken, setAccessToken] = useState<string>();
  getAccessToken().then((token) =>
    token ? setAccessToken(token) : setAccessToken("")
  );

  useEffect(() => {
    odataProvider(apiAddress, () => {
      return getAccessToken().then((token) => ({
        commonHeaders: {
          Authorization: "Bearer " + token,
        },
      }));
    }).then((p) => setDataProvider(p));
    return () => {};
  }, [accessToken]);

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        key="Classes"
        name="Classes"
        recordRepresentation={(record) => record.name}
        list={NamedList}
        hasShow={false}
        edit={NamedEdit}
        hasCreate={true}
        create={NamedCreate}
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
    </Admin>
  );
}
