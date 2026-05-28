'use client';

import { useLanguage } from '@/contexts/language-context';

export default function TermsOfServicePage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl space-y-8'>
        {/* Main Heading */}
        <div className='text-center'>
          <h1 className='text-foreground text-3xl font-bold'>{t('terms.title')}</h1>
          <p className='text-muted-foreground mt-2 text-sm'>
            {t('terms.lastUpdated')}{' '}
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>

        {/* Introduction */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>{t('terms.intro.title')}</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>{t('terms.intro.desc')}</p>
        </section>

        {/* Demo Purpose */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            {t('terms.demoPurpose.title')}
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('terms.demoPurpose.desc')}
          </p>
        </section>

        {/* Open Source */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            {t('terms.openSource.title')}
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('terms.openSource.desc')}
          </p>
        </section>

        {/* No Warranty */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            {t('terms.noWarranty.title')}
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('terms.noWarranty.desc')}
          </p>
        </section>

        {/* Data Usage */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            {t('terms.dataUsage.title')}
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('terms.dataUsage.desc')}
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>{t('terms.changes.title')}</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('terms.changes.desc')}
          </p>
        </section>

        {/* Contact */}
        <section className='border-border border-t pt-4'>
          <p className='text-muted-foreground text-center text-sm'>{t('terms.contact')}</p>
        </section>
      </div>
    </div>
  );
}
