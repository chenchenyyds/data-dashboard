import type { InfobarContent } from '@/components/ui/infobar';

export const reactQueryInfoContent: InfobarContent = {
  title: 'React Query Pattern',
  sections: [
    {
      title: 'Server Prefetch',
      description:
        'Data is prefetched on the server using getQueryClient().prefetchQuery(). The dehydrated state is passed to HydrationBoundary so the client starts with cached data — no loading spinners on first load.',
      links: [
        {
          title: 'TanStack Query SSR Docs',
          url: 'https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr'
        }
      ]
    },
    {
      title: 'Query Options',
      description:
        'Query keys and fetch functions are defined in a shared queryOptions() object. This is reused across server prefetch and client hooks, keeping them in sync.',
      links: [
        {
          title: 'queryOptions API',
          url: 'https://tanstack.com/query/latest/docs/framework/react/reference/queryOptions'
        }
      ]
    },
    {
      title: 'Suspense Query',
      description:
        'The client uses useSuspenseQuery() which integrates with React Suspense. Combined with server prefetch, data is available immediately — Suspense only shows the fallback on subsequent navigations if the cache is stale.',
      links: []
    },
    {
      title: 'Optimistic Mutations',
      description:
        'Mutations use onMutate to optimistically update the cache before the request completes. On error, the previous state is rolled back. On settle, the query is invalidated to refetch fresh data.',
      links: [
        {
          title: 'Optimistic Updates Guide',
          url: 'https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates'
        }
      ]
    }
  ]
};

export const reactQueryInfoContentZh: InfobarContent = {
  title: 'React Query 模式',
  sections: [
    {
      title: '服务端预取',
      description:
        '数据在服务端通过 getQueryClient().prefetchQuery() 预取。脱水状态传递给 HydrationBoundary，客户端使用缓存数据启动，无需加载中状态。',
      links: [
        {
          title: 'TanStack Query SSR Docs',
          url: 'https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr'
        }
      ]
    },
    {
      title: '查询选项',
      description:
        '查询键和获取函数定义在共享的 queryOptions() 对象中。服务端预取和客户端钩子复用同一对象，保持同步。',
      links: [
        {
          title: 'queryOptions API',
          url: 'https://tanstack.com/query/latest/docs/framework/react/reference/queryOptions'
        }
      ]
    },
    {
      title: 'Suspense 查询',
      description:
        '客户端使用 useSuspenseQuery() 与 React Suspense 集成。结合服务端预取，数据立即可用。Suspense 仅在后续导航时缓存过期时才显示 fallback。',
      links: []
    },
    {
      title: '乐观更新',
      description:
        'Mutations 使用 onMutate 在请求完成前乐观更新缓存。出错时回滚之前状态。完成后失效查询以重新获取最新数据。',
      links: [
        {
          title: 'Optimistic Updates Guide',
          url: 'https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates'
        }
      ]
    }
  ]
};
