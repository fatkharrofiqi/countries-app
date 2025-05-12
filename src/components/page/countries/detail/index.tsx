"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Tag from "./tag";
import Text from "./text";

interface DetailCountryPage {
  id: string;
}

export default function DetailCountry({ id }: DetailCountryPage) {
  const router = useRouter();

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
          <img src={"https://flagcdn.com/af.svg"} alt="cdn" />
        </div>

        <div className="flex flex-col gap-10">
          <p className="font-bold text-xl tracking-wider">Belgium</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Text label="Native Name" subLabel="Belgie" />
              <Text label="Population" subLabel="11,319,511" />
              <Text label="Region" subLabel="Europe" />
              <Text label="Sub Region" subLabel="Western Europe" />
              <Text label="Capital" subLabel="Brussels" />
            </div>
            <div>
              <Text label="Top Level Domain" subLabel=".be" />
              <Text label="Currencies" subLabel="Euro" />
              <Text label="Langguages" subLabel="Dutch, French, German" />
            </div>
          </div>
          <div className="font-semibold grid grid-cols-1 gap-5">
            <p className="text-[1rem]">Border Countries:</p>

            <div className="flex flex-row gap-2.5">
              <Tag label="France" />
              <Tag label="German" />
              <Tag label="Netherlands" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
