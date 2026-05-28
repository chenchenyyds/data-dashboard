'use client';

import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useOrganization, Show } from '@clerk/nextjs';
import { Icons } from '@/components/icons';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';

export default function ExclusivePage() {
  const { t } = useLanguage();
  const { organization, isLoaded } = useOrganization();

  return (
    <PageContainer
      isLoading={!isLoaded}
      pageTitle={t('page.exclusive.title')}
      pageDescription={t('page.exclusive.desc')}
    >
      <Show
        when={{ plan: 'pro' }}
        fallback={
          <div className='flex h-full items-center justify-center'>
            <Alert>
              <Icons.lock className='h-5 w-5 text-yellow-600' />
              <AlertDescription>
                <div className='mb-1 text-lg font-semibold'>{t('exclusive.proRequired')}</div>
                <div className='text-muted-foreground'>
                  {t('exclusive.proRequiredDesc')}
                  <br />
                  {t('exclusive.upgrade')}&nbsp;
                  <Link className='underline' href='/dashboard/billing'>
                    {t('nav.billing')} &amp; {t('user.settings')}
                  </Link>
                  .
                </div>
              </AlertDescription>
            </Alert>
          </div>
        }
      >
        <div className='space-y-6'>
          <div>
            <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
              <Icons.badgeCheck className='h-7 w-7 text-green-600' />
              {t('page.exclusive.title')}
            </h1>
            <p className='text-muted-foreground'>
              {t('exclusive.welcome')} <span className='font-semibold'>{organization?.name}</span>!
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{t('exclusive.thankYou')}</CardTitle>
              <CardDescription>{t('page.exclusive.desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='text-lg'>Have a wonderful day!</div>
            </CardContent>
          </Card>
        </div>
      </Show>
    </PageContainer>
  );
}
