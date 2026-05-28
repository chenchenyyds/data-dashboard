import { searchParamsCache } from '@/lib/searchparams';
import type { SearchParams } from 'nuqs/server';
import UsersPageWrapper from './users-page-wrapper';

export const metadata = {
  title: 'Dashboard: Users'
};

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function UsersPage(props: PageProps) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);

  return <UsersPageWrapper />;
}
