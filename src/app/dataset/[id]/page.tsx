import Dataset from "@/components/Dataset";

export default async function DatasetPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <Dataset id={id} />
  );
}
