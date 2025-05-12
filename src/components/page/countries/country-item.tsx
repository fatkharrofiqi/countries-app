import Link from "next/link";

interface CardItemProp {
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
  alpha3code: string;
}

export default function CountryItem(country: CardItemProp) {
  return (
    <Link
      href={`/countries/${country.alpha3code}`}
      className="rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-sm"
    >
      <img
        src={country.flag}
        alt="cdn"
        className="rounded-t-lg w-full h-[10rem] object-cover "
      />
      <div className="pt-7 pb-9 px-6">
        <p className="font-bold tracking-wider pb-4">{country.name}</p>
        <div className="space-y-2   ">
          <p>
            Population: <span className="font-thin">{country.population}</span>
          </p>
          <p>
            Region: <span className="font-thin">{country.region}</span>
          </p>
          <p>
            Capital: <span className="font-thin">{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
