import EntryDetail from '@/src/components/pages/user-dashboard/my-submission/EntryDetail';
import myEntriesData from '@/src/constants/MyEntries';
import { notFound } from 'next/navigation';

export default async function SubmissionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = myEntriesData.find(entry => entry.id === id);

  if (!entry) {
    notFound();
  }

  return (
    <div className='space-y-6'>
      <EntryDetail entry={entry} />
    </div>
  );
}