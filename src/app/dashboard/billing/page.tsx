'use client';

import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useOrganization } from '@clerk/nextjs';
import { PricingTable } from '@clerk/nextjs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Icons } from '@/components/icons';
import { billingInfoContent, billingInfoContentZh } from '@/config/infoconfig';
import { useLanguage } from '@/contexts/language-context';

export default function BillingPage() {
  const { t, language } = useLanguage();
  const { organization, isLoaded } = useOrganization();

  return (
    <PageContainer
      isLoading={!isLoaded}
      access={!!organization}
      accessFallback={
        <div className='flex min-h-[400px] items-center justify-center'>
          <div className='space-y-2 text-center'>
            <h2 className='text-2xl font-semibold'>{t('billing.noOrg')}</h2>
            <p className='text-muted-foreground'>{t('billing.noOrgDesc')}</p>
          </div>
        </div>
      }
      infoContent={language === 'zh' ? billingInfoContentZh : billingInfoContent}
      pageTitle={t('page.billing.title')}
      pageDescription={t('page.billing.desc', { name: organization?.name || '' })}
    >
      <div className='space-y-6'>
        {/* Info Alert */}
        <Alert>
          <Icons.info className='h-4 w-4' />
          <AlertDescription>{t('billing.alert')}</AlertDescription>
        </Alert>

        {/* Clerk Pricing Table */}
        <Card>
          <CardHeader>
            <CardTitle>{t('billing.availablePlans')}</CardTitle>
            <CardDescription>{t('billing.choosePlan')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='mx-auto max-w-4xl'>
              <PricingTable for='organization' />
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
