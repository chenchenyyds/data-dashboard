export function getRoleOptions(t: (key: string) => string) {
  return [
    { value: 'Developer', label: t('role.developer') },
    { value: 'Designer', label: t('role.designer') },
    { value: 'Manager', label: t('role.manager') },
    { value: 'QA', label: t('role.qa') },
    { value: 'DevOps', label: t('role.devops') },
    { value: 'Product Owner', label: t('role.productOwner') }
  ];
}
