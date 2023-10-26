import { Admin, Resource, Loading } from "react-admin";
import odataProvider, { OdataDataProvider } from "ra-data-odata-server";

import { SpellCreate, SpellEdit, SpellList } from "./Spell";
import { useEffect, useState } from "react";
import { MenuBook, School, Accessible, Tag, Class } from "@mui/icons-material";
import { NamedCreate, NamedEdit, NamedList } from "./Named";
import { DescriptiveCreate, DescriptiveEdit } from "./Descriptive";

export default function App() {
  const [dataProvider, setDataProvider] = useState<OdataDataProvider>();
  useEffect(() => {
    odataProvider(import.meta.env.VITE_SIMPLE_REST_URL).then((p) =>
      setDataProvider(p)
    );
    return () => {};
  }, []);

  return dataProvider ? (
    <Admin dataProvider={dataProvider}>
      {dataProvider?.getResources().map((r) => {
        if (r == "Spells")
          return (
            <Resource
              key={r}
              name={r}
              list={SpellList}
              edit={SpellEdit}
              hasCreate={true}
              create={SpellCreate}
              hasShow={false}
              icon={MenuBook}
            />
          );
        return (
          <Resource
            key={r}
            name={r}
            recordRepresentation={(record) => record.name}
            list={NamedList}
            hasShow={false}
            edit={r == "Conditions" ? DescriptiveEdit : NamedEdit}
            hasCreate={true}
            create={r == "Conditions" ? DescriptiveCreate : NamedCreate}
            icon={
              r == "Schools"
                ? School
                : r == "Conditions"
                ? Accessible
                : r == "SpellTags"
                ? Tag
                : r == "Classes"
                ? Class
                : MenuBook
            }
          />
        );
      })}
    </Admin>
  ) : (
    <Loading />
  );
}
