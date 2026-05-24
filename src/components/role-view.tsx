'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';
import { useLanguage } from '@/contexts/language-context';
import { ReportsTable } from '@/features/reports/components/reports-table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Icons } from '@/components/icons';

type Role = 'admin' | 'manager';

interface RoleViewProps {
  adminView: React.ReactNode;
  managerView?: React.ReactNode;
}

export function RoleView({ adminView, managerView }: RoleViewProps) {
  const { user, isLoaded } = useUser();
  const { t } = useLanguage();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <Icons.spinner className="size-6 animate-spin" />
      </div>
    );
  }

  const role = (user?.publicMetadata?.role as Role) || 'admin';

  if (role === 'manager') {
    return managerView ? <>{managerView}</> : <ReportsTable />;
  }

  return <>{adminView}</>;
}

export function RoleBadge() {
  const { user, isLoaded } = useUser();
  const { t } = useLanguage();

  if (!isLoaded) return null;

  const role = (user?.publicMetadata?.role as string) || 'admin';
  const label = role === 'manager' ? 'Manager' : role === 'admin' ? 'Admin' : role;

  return (
    <Alert className="mb-4">
      <Icons.info className="size-4" />
      <AlertTitle>Viewing as: {label}</AlertTitle>
      <AlertDescription>
        {role === 'admin'
          ? t('overview.adminViewDesc') || 'You see summary KPI cards and charts.'
          : t('overview.managerViewDesc') || 'You see detailed transaction data.'}
      </AlertDescription>
    </Alert>
  );
}
