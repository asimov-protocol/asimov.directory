import { PageProps } from '.next/types/app/page';
import Dataset from '@/components/Dataset';

type Props = PageProps & {
  params: {
    id: string;
  };
};

export default async function DatasetPage({ params }: Props) {
  const { id } = await params;
  return <Dataset id={id} />;
}
