import FilterByRegion from "../../filter";
import SearchInput from "../../search";
import CardItem from "./card-item";

export default function CountriesPage() {
  return (
    <div className="grid gap-6 md:gap-12">
      <div className="flex flex-col items-start md:items-center md:flex-row md:justify-between gap-6 md:gap-0">
        <SearchInput />
        <FilterByRegion />
      </div>
      <div className="grid md:grid-cols-4 mx-9 md:mx-0 gap-6 md:gap-[4.5rem]">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}
