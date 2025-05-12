"use client";

import type { Country } from "@/dto/country";
import { useCallback, useEffect, useState } from "react";
import FilterByRegion from "../../filter";
import SearchInput from "../../search";
import CountryItem from "./country-item";

export default function CountriesPage() {
  const [allData, setAllData] = useState<Country[] | null>(null);
  const [filteredData, setFilteredData] = useState<Country[] | null>(null);
  const regions = Array.from(
    new Set(allData?.map((item) => item.region).sort()),
  );

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const result: Country[] = await res.json();
      setAllData(result);
      setFilteredData(result);
    };

    loadData();
  }, []);

  const filter = useCallback(
    (keyword: string) => {
      if (!allData) return;

      const newData = allData.filter((value) =>
        value?.region.toLowerCase().includes(keyword.toLowerCase()),
      );

      setFilteredData(newData);
    },
    [allData],
  );

  const search = useCallback(
    (keyword: string) => {
      if (!allData) return;

      const newData = allData.filter((value) =>
        value?.name.toLowerCase().includes(keyword.toLowerCase()),
      );

      setFilteredData(newData);
    },
    [allData],
  );

  return (
    <div className="grid gap-6 md:gap-12">
      <div className="flex flex-col items-start md:items-center md:flex-row md:justify-between gap-6 md:gap-0">
        <SearchInput search={search} />
        <FilterByRegion filter={filter} regions={regions} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-9 md:mx-0 gap-6 md:gap-[5rem]">
        {filteredData?.map((value) => (
          <CountryItem
            key={value.alpha3Code}
            name={value.name}
            capital={value.capital}
            flag={value.flags.svg}
            population={new Intl.NumberFormat("en-US", {
              maximumFractionDigits: 0,
            }).format(value.population)}
            region={value.region}
            alpha3code={value.alpha3Code}
          />
        ))}
      </div>
    </div>
  );
}
