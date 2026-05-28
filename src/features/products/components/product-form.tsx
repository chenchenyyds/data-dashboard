'use client';

import { useAppForm, useFormFields } from '@/components/ui/tanstack-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createProductMutation, updateProductMutation } from '../api/mutations';
import type { Product } from '../api/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import * as z from 'zod';
import { productSchema, type ProductFormValues } from '@/features/products/schemas/product';
import { categoryOptions } from '@/features/products/constants/product-options';
import { useLanguage } from '@/contexts/language-context';

export default function ProductForm({
  initialData,
  pageTitle
}: {
  initialData: Product | null;
  pageTitle: string;
}) {
  const { t } = useLanguage();
  const router = useRouter();
  const isEdit = !!initialData;

  const createMutation = useMutation({
    ...createProductMutation,
    onSuccess: () => {
      toast.success(t('product.created'));
      router.push('/dashboard/product');
    },
    onError: () => {
      toast.error(t('product.createFailed'));
    }
  });

  const updateMutation = useMutation({
    ...updateProductMutation,
    onSuccess: () => {
      toast.success(t('product.updated'));
      router.push('/dashboard/product');
    },
    onError: () => {
      toast.error(t('product.updateFailed'));
    }
  });

  const form = useAppForm({
    defaultValues: {
      image: undefined,
      name: initialData?.name ?? '',
      category: initialData?.category ?? '',
      price: initialData?.price,
      description: initialData?.description ?? ''
    } as ProductFormValues,
    validators: {
      onSubmit: productSchema
    },
    onSubmit: ({ value }) => {
      const payload = {
        name: value.name,
        category: value.category,
        price: value.price!,
        description: value.description
      };

      if (isEdit) {
        updateMutation.mutate({ id: initialData.id, values: payload });
      } else {
        createMutation.mutate(payload);
      }
    }
  });

  const { FormTextField, FormSelectField, FormTextareaField, FormFileUploadField } =
    useFormFields<ProductFormValues>();

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>{pageTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <form.AppForm>
          <form.Form className='space-y-8'>
            <FormFileUploadField
              name='image'
              label={t('product.image')}
              description={t('product.imageDesc')}
              maxSize={5 * 1024 * 1024}
              maxFiles={4}
            />

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormTextField
                name='name'
                label={t('product.name')}
                required
                placeholder={t('product.namePlaceholder')}
                validators={{
                  onBlur: z.string().min(2, 'Product name must be at least 2 characters.')
                }}
              />

              <FormSelectField
                name='category'
                label={t('product.category')}
                required
                options={categoryOptions}
                placeholder={t('product.categoryPlaceholder')}
                validators={{
                  onBlur: z.string().min(1, 'Please select a category')
                }}
              />

              <FormTextField
                name='price'
                label={t('product.price')}
                required
                type='number'
                min={0}
                step={0.01}
                placeholder={t('product.pricePlaceholder')}
                validators={{
                  onBlur: z.number({ message: 'Price is required' })
                }}
              />
            </div>

            <FormTextareaField
              name='description'
              label={t('product.description')}
              required
              placeholder={t('product.descriptionPlaceholder')}
              maxLength={500}
              rows={4}
              validators={{
                onBlur: z.string().min(10, 'Description must be at least 10 characters.')
              }}
            />

            <div className='flex justify-end gap-2'>
              <Button type='button' variant='outline' onClick={() => router.back()}>
                {t('product.back')}
              </Button>
              <form.SubmitButton>
                {isEdit ? t('product.update') : t('product.addProduct')}
              </form.SubmitButton>
            </div>
          </form.Form>
        </form.AppForm>
      </CardContent>
    </Card>
  );
}
