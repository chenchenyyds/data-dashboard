'use client';

import { useLanguage } from '@/contexts/language-context';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h1 className='text-foreground text-3xl font-bold tracking-tight sm:text-4xl'>
            {t('about.title')}
          </h1>
          <p className='text-muted-foreground mt-4 text-lg'>{t('about.desc')}</p>
        </div>

        {/* Content Sections */}
        <div className='space-y-8'>
          {/* Open Source Section */}
          <section className='bg-card rounded-2xl border p-8 shadow-sm'>
            <h2 className='text-foreground mb-4 text-xl font-semibold'>{t('about.openSource')}</h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              {t('about.openSourceDesc')}
            </p>
          </section>

          {/* Demo Purpose Section */}
          <section className='bg-card rounded-2xl border p-8 shadow-sm'>
            <h2 className='text-foreground mb-4 text-xl font-semibold'>{t('about.demoPurpose')}</h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              {t('about.demoPurposeDesc')}
            </p>
          </section>

          {/* Auth Section */}
          <section className='bg-card rounded-2xl border p-8 shadow-sm'>
            <h2 className='text-foreground mb-4 text-xl font-semibold'>{t('about.authByClerk')}</h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              {t('about.authByClerkDesc1')}{' '}
              <a
                href='https://clerk.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary font-medium hover:underline'
              >
                Clerk
              </a>
              {t('about.authByClerkDesc2')}
            </p>
          </section>

          {/* Data Privacy Section */}
          <section className='bg-card rounded-2xl border p-8 shadow-sm'>
            <h2 className='text-foreground mb-4 text-xl font-semibold'>{t('about.dataPrivacy')}</h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              {t('about.dataPrivacyDesc')}
            </p>
          </section>
        </div>

        {/* Footer Note */}
        <div className='mt-12 text-center'>
          <p className='text-muted-foreground text-sm'>{t('about.builtWith')}</p>
        </div>
      </div>
    </div>
  );
}
