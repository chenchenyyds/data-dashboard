'use client';

import PageContainer from '@/components/layout/page-container';
import DemoForm from '@/components/forms/demo-form';
import { useLanguage } from '@/contexts/language-context';

export default function Page() {
  const { t } = useLanguage();

  return (
    <PageContainer
      pageTitle={t('page.forms.basic.title')}
      pageDescription={t('page.forms.basic.desc')}
    >
      <DemoForm />
    </PageContainer>
  );
}
