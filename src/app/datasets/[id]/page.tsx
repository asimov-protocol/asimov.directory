import Dataset from "@/components/Dataset";

type Props = {
  params: {
    id: string;
  };
};

export default async function DatasetPage({ params }: Props) {
  const { id } = await params;
  return (
    <Dataset id={id} />
  );
}
