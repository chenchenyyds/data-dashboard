'use client';

import PageContainer from '@/components/layout/page-container';
import { usersInfoContent } from '@/features/users/info-content';
import { UserFormSheetTrigger } from '@/features/users/components/user-form-sheet';
import { useLanguage } from '@/contexts/language-context';

export default function UsersPageWrapper({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <PageContainer
      pageTitle={t('page.users.title')}
      pageDescription={t('page.users.desc')}
      infoContent={usersInfoContent}
      pageHeaderAction={<UserFormSheetTrigger />}
    >
      {children}
    </PageContainer>
  );
}
