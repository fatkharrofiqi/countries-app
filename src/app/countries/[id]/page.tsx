import DetailCountry from "@/components/page/countries/detail";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { id } = params;
  return <DetailCountry id={id} />;
}
