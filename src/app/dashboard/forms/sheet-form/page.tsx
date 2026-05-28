'use client';

import PageContainer from '@/components/layout/page-container';
import SheetFormDemo from '@/features/forms/components/sheet-form-demo';
import { useLanguage } from '@/contexts/language-context';

export default function Page() {
  const { t } = useLanguage();

  return (
    <PageContainer
      pageTitle={t('page.forms.sheet.title')}
      pageDescription={t('page.forms.sheet.desc')}
    >
      <SheetFormDemo />
    </PageContainer>
  );
}
