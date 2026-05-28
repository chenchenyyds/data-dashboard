'use client';

import { useLanguage } from '@/contexts/language-context';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl space-y-8'>
        {/* Main Heading */}
        <h1 className='text-foreground text-3xl font-bold'>{t('privacy.title')}</h1>

        {/* Introduction */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>{t('privacy.intro.title')}</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('privacy.intro.desc')}
          </p>
        </section>

        {/* Data Collection */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            {t('privacy.collection.title')}
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('privacy.collection.desc')}
          </p>
        </section>

        {/* Auth handled by Clerk */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>{t('privacy.clerk.title')}</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('privacy.clerk.desc1')}{' '}
            <a
              href='https://clerk.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-medium hover:underline'
            >
              Clerk
            </a>{' '}
            {t('privacy.clerk.desc2')}{' '}
            <a
              href='https://clerk.com/legal/privacy'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-medium hover:underline'
            >
              Privacy Policy
            </a>
            {t('privacy.clerk.desc3')}
          </p>
        </section>

        {/* No data misuse */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            {t('privacy.noMisuse.title')}
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('privacy.noMisuse.desc')}
          </p>
        </section>

        {/* Demo purpose */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>{t('privacy.demo.title')}</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('privacy.demo.desc')}
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            {t('privacy.contact.title')}
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            {t('privacy.contact.desc')}{' '}
            <a
              href='mailto:contact@kiranism.dev'
              className='text-primary font-medium hover:underline'
            >
              contact@kiranism.dev
            </a>
            .
          </p>
        </section>

        {/* Last Updated */}
        <div className='border-border border-t pt-4'>
          <p className='text-muted-foreground text-sm'>{t('privacy.lastUpdated')}</p>
        </div>
      </div>
    </div>
  );
}
