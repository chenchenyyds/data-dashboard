export function getCategoryOptions(t: (key: string) => string) {
  return [
    { value: 'Electronics', label: t('category.electronics') },
    { value: 'Furniture', label: t('category.furniture') },
    { value: 'Clothing', label: t('category.clothing') },
    { value: 'Toys', label: t('category.toys') },
    { value: 'Groceries', label: t('category.groceries') },
    { value: 'Books', label: t('category.books') },
    { value: 'Jewelry', label: t('category.jewelry') },
    { value: 'Beauty Products', label: t('category.beauty') }
  ];
}
