import { searchParamsCache } from '@/lib/searchparams';
import { SearchParams } from 'nuqs/server';
import ProductPageWrapper from './product-page-wrapper';

export const metadata = {
  title: 'Dashboard: Products'
};

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);

  return <ProductPageWrapper />;
}
