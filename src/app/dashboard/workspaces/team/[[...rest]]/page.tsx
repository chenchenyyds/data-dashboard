'use client';

import PageContainer from '@/components/layout/page-container';
import { OrganizationProfile } from '@clerk/nextjs';
import { teamInfoContent, teamInfoContentZh } from '@/config/infoconfig';
import { useLanguage } from '@/contexts/language-context';

export default function TeamPage() {
  const { t, language } = useLanguage();
  return (
    <PageContainer
      pageTitle={t('page.team.title')}
      pageDescription={t('page.team.desc')}
      infoContent={language === 'zh' ? teamInfoContentZh : teamInfoContent}
    >
      <OrganizationProfile />
    </PageContainer>
  );
}
