import EntryDetail from '@/src/components/pages/user-dashboard/my-submission/EntryDetail';
import myEntriesData from '@/src/constants/MyEntries';
import { notFound } from 'next/navigation';

interface SubmissionDetailPageProps {
  params: {
    id: string;
  };
}

export default function SubmissionDetailPage({ params }: SubmissionDetailPageProps) {
  const entry = myEntriesData.find(entry => entry.id === params.id);

  if (!entry) {
    notFound();
  }

  return (
    <div className='space-y-6'>
      <EntryDetail entry={entry} />
    </div>
  );
}