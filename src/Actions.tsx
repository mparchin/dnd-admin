import { FilterLiveSearch, ListButton, TopToolbar } from "react-admin";

export const EditActions = () => (
  <TopToolbar>
    <ListButton />
  </TopToolbar>
);

export const SearchFilter = [
  <FilterLiveSearch label="Search" source="name" alwaysOn />,
];
