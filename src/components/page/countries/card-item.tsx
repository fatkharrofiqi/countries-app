import Link from "next/link";

export default function CardItem() {
  return (
    <Link
      href={"/countries/123"}
      className="rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-sm"
    >
      <img
        src={"https://flagcdn.com/af.svg"}
        alt="cdn"
        className="rounded-t-lg"
      />
      <div className="pt-7 pb-9 px-6">
        <p className="font-bold tracking-wider pb-4">Germany</p>
        <div className="space-y-2   ">
          <p>
            Population: <span className="font-thin">81,770,900</span>
          </p>
          <p>
            Region: <span className="font-thin">Europe</span>
          </p>
          <p>
            Capital: <span className="font-thin">Berlin</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
