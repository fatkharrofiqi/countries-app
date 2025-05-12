"use client";

import type { Country } from "@/dto/country";
import { useEffect, useState } from "react";
import FilterByRegion from "../../filter";
import SearchInput from "../../search";
import CountryItem from "./country-item";

export default function CountriesPage() {
  const [data, setData] = useState<Country[] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const result: Country[] = await res.json();
      setData(result);
    };

    if (data === null) {
      loadData();
    }
  }, [data]);

  return (
    <div className="grid gap-6 md:gap-12">
      <div className="flex flex-col items-start md:items-center md:flex-row md:justify-between gap-6 md:gap-0">
        <SearchInput />
        <FilterByRegion />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-9 md:mx-0 gap-6 md:gap-[5rem]">
        {data?.map((value, index) => (
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
