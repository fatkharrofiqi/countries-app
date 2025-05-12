"use client";
import type { Country } from "@/dto/country";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Tag from "./tag";
import Text from "./text";

interface DetailCountryPage {
  id: string;
}

export default function DetailCountry({ id }: DetailCountryPage) {
  const router = useRouter();
  const [data, setData] = useState<Country | undefined>();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const result: Country[] = await res.json();
      const filtered = result.find((value) => value.alpha3Code === id);
      setData(filtered);
    };

    if (data === undefined) {
      loadData();
    }
  }, [id, data]);

  return (
    <div className="grid gap-6">
      <div>
        <button
          onClick={() => {
            router.back();
          }}
          type="button"
          className="flex items-center gap-[0.9375rem] tracking-tighter py-2 px-6 md:px-8 rounded-sm bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:cursor-pointer shadow-sm"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-24 py-7">
        <div className="flex">
          <img src={data?.flags.svg} alt="cdn" />
        </div>

        <div className="flex flex-col gap-10">
          <p className="font-bold text-xl tracking-wider">{data?.name}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Text label="Native Name" subLabel={data?.nativeName} />
              <Text
                label="Population"
                subLabel={new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 0,
                }).format(data?.population || 0)}
              />
              <Text label="Region" subLabel={data?.region} />
              <Text label="Sub Region" subLabel={data?.subregion} />
              <Text label="Capital" subLabel={data?.capital} />
            </div>
            <div>
              <Text
                label="Top Level Domain"
                subLabel={data?.topLevelDomain.join(", ")}
              />
              <Text
                label="Currencies"
                subLabel={data?.currencies.map((v) => v.name).join(", ")}
              />
              <Text
                label="Langguages"
                subLabel={data?.languages.map((v) => v.name).join(", ")}
              />
            </div>
          </div>
          <div className="font-semibold grid grid-cols-1 gap-5">
            <p className="text-[1rem]">Border Countries:</p>

            <div className="flex flex-row gap-2.5">
              {data?.borders?.map((value) => (
                <Tag label={value} key={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
