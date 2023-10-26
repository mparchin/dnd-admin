import simpleRestProvider from "ra-data-simple-rest";
import odataProvider, { OdataDataProvider } from "ra-data-odata-server";


export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL
);
