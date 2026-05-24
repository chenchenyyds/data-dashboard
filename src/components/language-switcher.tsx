'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/language-context';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='h-8 gap-1 px-2 text-xs font-medium'>
          {language === 'zh' ? '中文' : 'EN'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(v) => setLanguage(v as 'en' | 'zh')}
        >
          <DropdownMenuRadioItem value='en'>{t('lang.en')}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='zh'>{t('lang.zh')}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
