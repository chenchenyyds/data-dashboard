'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.overview': 'Overview',
    'nav.products': 'Products',
    'nav.users': 'Users',
    'nav.kanban': 'Kanban',
    'nav.chat': 'Chat',
    'nav.notifications': 'Notifications',
    'nav.settings': 'Settings',
    'nav.workspaces': 'Workspaces',
    'nav.billing': 'Billing',
    'nav.exclusive': 'Exclusive',
    'nav.profile': 'Profile',
    'overview.title': 'Overview',
    'overview.welcome': 'Hi, Welcome back 👋',
    'overview.totalRevenue': 'Total Revenue',
    'overview.newCustomers': 'New Customers',
    'overview.activeAccounts': 'Active Accounts',
    'overview.growthRate': 'Growth Rate',
    'overview.subscriptions': 'Subscriptions',
    'overview.sales': 'Sales',
    'overview.activeNow': 'Active Now',
    'overview.recentSales': 'Recent Sales',
    'overview.salesThisMonth': 'You made 265 sales this month.',
    'overview.download': 'Download',
    'overview.trendingUp': 'Trending up this month',
    'overview.visitors6m': 'Visitors for the last 6 months',
    'overview.down20': 'Down 20% this period',
    'overview.acquisitionNeeds': 'Acquisition needs attention',
    'overview.strongRetention': 'Strong user retention',
    'overview.engagementExceed': 'Engagement exceed targets',
    'overview.steadyPerformance': 'Steady performance increase',
    'overview.meetsProjections': 'Meets growth projections',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.export': 'Export',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.create': 'Create',
    'common.loading': 'Loading...',
    'common.noResults': 'No results found',
    'common.actions': 'Actions',
    'common.noAccess': 'You do not have access to this page.',
    'user.profile': 'Profile',
    'user.billing': 'Billing',
    'user.settings': 'Settings',
    'user.newTeam': 'New Team',
    'user.signOut': 'Sign Out',
    'user.notifications': 'Notifications',
    'nav.reports': 'Reports',
    'lang.switch': 'Switch Language',
    'lang.en': 'English',
    'lang.zh': '中文',
    'overview.barChartTitle': 'Bar Chart - Multiple',
    'overview.barChartDesc': 'Monthly desktop vs mobile',
    'overview.areaChartTitle': 'Dotted Area Chart',
    'overview.areaChartDesc': 'Showing total visitors for the period',
    'overview.pieChartTitle': 'Pie Chart',
    'overview.pieChartDesc': 'Browser distribution',
    'date.7d': 'Last 7 days',
    'date.30d': 'Last 30 days',
    'date.90d': 'Last 90 days',
    'date.1y': 'This year',
    'date.all': 'All time',
    'overview.vsLastMonth': 'vs last month',
    'overview.vsLastYear': 'vs last year',
    'services.price': 'Price',
    'orders.orderId': 'Order ID',
    'orders.date': 'Date',
    'overview.adminViewDesc': 'You see summary KPI cards and charts.',
    'overview.managerViewDesc': 'You see detailed transaction data.'
  },
  zh: {
    'nav.dashboard': '仪表板',
    'nav.overview': '概览',
    'nav.products': '产品',
    'nav.users': '用户',
    'nav.kanban': '看板',
    'nav.chat': '聊天',
    'nav.notifications': '通知',
    'nav.settings': '设置',
    'nav.workspaces': '工作区',
    'nav.billing': '计费',
    'nav.exclusive': '专属',
    'nav.profile': '个人资料',
    'overview.title': '概览',
    'overview.welcome': '你好，欢迎回来 👋',
    'overview.totalRevenue': '总收入',
    'overview.newCustomers': '新增客户',
    'overview.activeAccounts': '活跃账户',
    'overview.growthRate': '增长率',
    'overview.subscriptions': '订阅数',
    'overview.sales': '销售额',
    'overview.activeNow': '当前在线',
    'overview.recentSales': '近期销售',
    'overview.salesThisMonth': '您本月完成了 265 笔销售。',
    'overview.download': '下载',
    'overview.trendingUp': '本月呈上升趋势',
    'overview.visitors6m': '过去 6 个月的访客',
    'overview.down20': '本期下降 20%',
    'overview.acquisitionNeeds': '客户获取需要关注',
    'overview.strongRetention': '用户留存强劲',
    'overview.engagementExceed': '参与度超出预期',
    'overview.steadyPerformance': '性能稳步提升',
    'overview.meetsProjections': '符合增长预期',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.export': '导出',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.create': '创建',
    'common.loading': '加载中...',
    'common.noResults': '暂无结果',
    'common.actions': '操作',
    'common.noAccess': '您没有访问此页面的权限。',
    'user.profile': '个人资料',
    'user.billing': '计费',
    'user.settings': '设置',
    'user.newTeam': '新建团队',
    'user.signOut': '退出登录',
    'user.notifications': '通知',
    'nav.reports': '报表',
    'lang.switch': '切换语言',
    'lang.en': 'English',
    'lang.zh': '中文',
    'overview.barChartTitle': '柱状图 - 多组数据',
    'overview.barChartDesc': '桌面端 vs 移动端月度对比',
    'overview.areaChartTitle': '面积图',
    'overview.areaChartDesc': '显示该时段的总访问量',
    'overview.pieChartTitle': '饼图',
    'overview.pieChartDesc': '浏览器分布',
    'date.7d': '近7天',
    'date.30d': '近30天',
    'date.90d': '近90天',
    'date.1y': '今年',
    'date.all': '全部',
    'overview.vsLastMonth': '环比上月',
    'overview.vsLastYear': '同比去年',
    'services.price': '价格',
    'orders.orderId': '订单编号',
    'orders.date': '日期',
    'overview.adminViewDesc': '您看到的是汇总KPI卡片和图表。',
    'overview.managerViewDesc': '您看到的是详细交易数据。'
  }
};

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'en' || saved === 'zh') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[language]?.[key] || translations.en[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export { LanguageContext };
