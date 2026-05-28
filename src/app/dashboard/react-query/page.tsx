'use client';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query-client';
import { pokemonOptions } from '@/features/react-query-demo/api/queries';
import { PokemonInfo } from '@/features/react-query-demo/components/pokemon-info';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import { PokemonSkeleton } from '@/features/react-query-demo/components/pokemon-skeleton';
import { reactQueryInfoContent } from '@/features/react-query-demo/info-content';
import { useLanguage } from '@/contexts/language-context';

export default function ReactQueryPage() {
  const { t } = useLanguage();
  const queryClient = getQueryClient();

  // Prefetch on the client — data is ready before hydration
  void queryClient.prefetchQuery(pokemonOptions(25));

  return (
    <PageContainer
      pageTitle={t('page.reactQuery.title')}
      pageDescription={t('page.reactQuery.desc')}
      infoContent={reactQueryInfoContent}
    >
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<PokemonSkeleton />}>
          <PokemonInfo />
        </Suspense>
      </HydrationBoundary>
    </PageContainer>
  );
}
