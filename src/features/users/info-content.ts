import type { InfobarContent } from '@/components/ui/infobar';

export const usersInfoContent: InfobarContent = {
  title: 'Users — React Query + nuqs Pattern',
  sections: [
    {
      title: 'Overview',
      description:
        'This page demonstrates client-side data fetching with React Query combined with nuqs URL search params — as an alternative to the Products page which uses server-side RSC fetching. Both patterns use the same DataTable, useDataTable hook, and nuqs URL state.',
      links: [
        {
          title: 'TanStack Query SSR Docs',
          url: 'https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr'
        }
      ]
    },
    {
      title: 'Server Prefetch + Client Hydration',
      description:
        'The server component reads search params via searchParamsCache, builds filters, and calls queryClient.prefetchQuery(). The dehydrated state is passed to HydrationBoundary so the client starts with cached data. The client component reads the same search params via useQueryState and calls useSuspenseQuery with matching filters.',
      links: []
    },
    {
      title: 'URL State with nuqs',
      description:
        'Pagination, search, and role filters are synced to the URL via nuqs. The useDataTable hook manages the TanStack Table state and debounces filter changes before updating the URL. When the URL changes, React Query automatically refetches because the query key includes the filters.',
      links: [
        {
          title: 'nuqs Documentation',
          url: 'https://nuqs.47ng.com'
        }
      ]
    },
    {
      title: 'Products vs Users Pattern',
      description:
        'Products: searchParams → RSC fetch → pass data as props to client table. Users: searchParams → server prefetch → HydrationBoundary → client useSuspenseQuery. The Users pattern enables background refetching, cache sharing across components, and optimistic mutations.',
      links: []
    }
  ]
};

export const usersInfoContentZh: InfobarContent = {
  title: '用户管理 — React Query + nuqs 模式',
  sections: [
    {
      title: '概览',
      description:
        '此页面展示 React Query 客户端数据获取与 nuqs URL 搜索参数结合的模式。与服务端 RSC 获取的 Products 页面形成对比。两种模式均使用相同的 DataTable、useDataTable 和 nuqs 状态管理。',
      links: [
        {
          title: 'TanStack Query SSR Docs',
          url: 'https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr'
        }
      ]
    },
    {
      title: '服务端预取 + 客户端水合',
      description:
        '服务端组件通过 searchParamsCache 读取搜索参数，构建过滤器并调用 queryClient.prefetchQuery()。脱水状态传递给 HydrationBoundary。客户端通过 useQueryState 读取参数并调用 useSuspenseQuery。',
      links: []
    },
    {
      title: 'URL 状态管理（nuqs）',
      description:
        '分页、搜索和角色筛选通过 nuqs 同步到 URL。useDataTable 管理表格状态并在筛选变更后更新 URL。URL 变化时 React Query 自动重新获取数据。',
      links: [
        {
          title: 'nuqs Documentation',
          url: 'https://nuqs.47ng.com'
        }
      ]
    },
    {
      title: '产品页 vs 用户页模式对比',
      description:
        '产品页：searchParams → RSC 获取 → 数据作为 props 传给客户端表格。用户页：searchParams → 服务端预取 → HydrationBoundary → 客户端 useSuspenseQuery。用户页模式支持后台重新获取、跨组件缓存共享和乐观更新。',
      links: []
    }
  ]
};
