import DetailCountry from "@/components/page/countries/detail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <DetailCountry id={id} />;
}
