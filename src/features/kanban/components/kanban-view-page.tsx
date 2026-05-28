'use client';

import PageContainer from '@/components/layout/page-container';
import { KanbanBoard } from './kanban-board';
import NewTaskDialog from './new-task-dialog';
import { useLanguage } from '@/contexts/language-context';

export default function KanbanViewPage() {
  const { t } = useLanguage();
  return (
    <PageContainer
      pageTitle={t('page.kanban.title')}
      pageDescription={t('page.kanban.desc')}
      pageHeaderAction={<NewTaskDialog />}
    >
      <KanbanBoard />
    </PageContainer>
  );
}
