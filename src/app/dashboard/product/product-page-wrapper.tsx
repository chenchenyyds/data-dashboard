'use client';

import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import { productInfoContent, productInfoContentZh } from '@/config/infoconfig';
import { useLanguage } from '@/contexts/language-context';

export default function ProductPageWrapper({ children }: { children: React.ReactNode }) {
  const { t, language } = useLanguage();

  return (
    <PageContainer
      pageTitle={t('page.products.title')}
      pageDescription={t('page.products.desc')}
      infoContent={language === 'zh' ? productInfoContentZh : productInfoContent}
      pageHeaderAction={
        <Link href='/dashboard/product/new' className={cn(buttonVariants(), 'text-xs md:text-sm')}>
          <Icons.add className='mr-2 h-4 w-4' /> {t('product.add')}
        </Link>
      }
    >
      {children}
    </PageContainer>
  );
}
