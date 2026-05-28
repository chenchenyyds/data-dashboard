'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.upgradeToPro': 'Upgrade to Pro',
    'nav.account': 'Account',
    'nav.logOut': 'Log out',
    'nav.projects': 'Projects',
    'nav.more': 'More',
    'nav.viewProject': 'View Project',
    'nav.shareProject': 'Share Project',
    'nav.deleteProject': 'Delete Project',
    'nav.platform': 'Platform',
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
    'nav.reports': 'Reports',
    'nav.group.overview': 'Overview',
    'nav.group.elements': 'Elements',
    'nav.item.dashboard': 'Dashboard',
    'nav.item.workspaces': 'Workspaces',
    'nav.item.teams': 'Teams',
    'nav.item.product': 'Product',
    'nav.item.users': 'Users',
    'nav.item.kanban': 'Kanban',
    'nav.item.chat': 'Chat',
    'nav.item.reports': 'Reports',
    'nav.item.forms': 'Forms',
    'nav.item.basicForm': 'Basic Form',
    'nav.item.multiStepForm': 'Multi-Step Form',
    'nav.item.sheetDialog': 'Sheet & Dialog',
    'nav.item.advancedPatterns': 'Advanced Patterns',
    'nav.item.reactQuery': 'React Query',
    'nav.item.icons': 'Icons',
    'nav.item.pro': 'Pro',
    'nav.item.exclusive': 'Exclusive',
    'nav.item.account': 'Account',
    'nav.item.profile': 'Profile',
    'nav.item.notifications': 'Notifications',
    'nav.item.billing': 'Billing',
    'nav.item.login': 'Login',

    // Overview
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
    'overview.barChartTitle': 'Bar Chart - Multiple',
    'overview.barChartDesc': 'Monthly desktop vs mobile',
    'overview.areaChartTitle': 'Dotted Area Chart',
    'overview.areaChartDesc': 'Showing total visitors for the period',
    'overview.pieChartTitle': 'Pie Chart',
    'overview.pieChartDesc': 'Browser distribution',
    'overview.vsLastMonth': 'vs last month',
    'overview.vsLastYear': 'vs last year',
    'overview.adminViewDesc': 'You see summary KPI cards and charts.',
    'overview.managerViewDesc': 'You see detailed transaction data.',
    'overview.chart.desktop': 'Desktop',
    'overview.chart.mobile': 'Mobile',
    'overview.chart.chrome': 'Chrome',
    'overview.chart.safari': 'Safari',
    'overview.chart.firefox': 'Firefox',
    'overview.chart.edge': 'Edge',
    'overview.chart.other': 'Other',

    // Common
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
    'common.submit': 'Submit',
    'common.reset': 'Reset',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.back': 'Back',
    'common.update': 'Update',
    'common.viewAll': 'View All',
    'common.from': 'From',
    'common.to': 'To',
    'common.confirm': 'Confirm',
    'common.avatar': 'Avatar',
    'common.showInfo': 'Show information',
    'common.add': 'Add',
    'common.customer': 'Customer',

    // User
    'user.profile': 'Profile',
    'user.billing': 'Billing',
    'user.settings': 'Settings',
    'user.newTeam': 'New Team',
    'user.signOut': 'Sign Out',
    'user.notifications': 'Notifications',
    'user.column.name': 'Name',
    'user.column.phone': 'PHONE',
    'user.column.role': 'Role',
    'user.column.status': 'STATUS',
    'user.column.searchPlaceholder': 'Search users...',
    'user.column.roles': 'roles',
    'user.column.nameLabel': 'Name',
    'user.firstName': 'First Name',
    'user.lastName': 'Last Name',
    'user.email': 'Email',
    'user.phone': 'Phone',
    'user.role': 'Role',
    'user.status': 'Status',
    'user.firstNamePlaceholder': 'John',
    'user.lastNamePlaceholder': 'Doe',
    'user.emailPlaceholder': 'john@example.com',
    'user.phonePlaceholder': '(555) 123-4567',
    'user.rolePlaceholder': 'Select role',
    'user.statusPlaceholder': 'Select status',
    'user.add': 'Add User',
    'user.edit': 'Edit User',
    'user.new': 'New User',
    'user.editDesc': 'Update the user details below.',
    'user.newDesc': 'Fill in the details to create a new user.',
    'user.updateUser': 'Update User',
    'user.createUser': 'Create User',
    'user.created': 'User created successfully',
    'user.createFailed': 'Failed to create user',
    'user.updated': 'User updated successfully',
    'user.updateFailed': 'Failed to update user',
    'user.deleted': 'User deleted successfully',
    'user.deleteFailed': 'Failed to delete user',

    // Organization
    'org.organizations': 'Organizations',
    'org.create': 'Create organization',
    'org.getStarted': 'Get started',
    'org.add': 'Add organization',
    'org.organization': 'Organization',

    // Not Found
    'notFound.title': "Something's missing",
    'notFound.desc': 'Sorry, the page you are looking for does not exist or has been moved.',
    'notFound.goBack': 'Go back',
    'notFound.backToHome': 'Back to Home',

    // Language
    'lang.switch': 'Switch Language',
    'lang.en': 'English',
    'lang.zh': '中文',

    // Date
    'date.7d': 'Last 7 days',
    'date.30d': 'Last 30 days',
    'date.90d': 'Last 90 days',
    'date.1y': 'This year',
    'date.all': 'All time',

    // Services & Orders
    'services.price': 'Price',
    'orders.orderId': 'Order ID',
    'orders.date': 'Date',

    // Data Table
    'table.noResults': 'No results.',
    'table.rowsSelected': '{selected} of {total} row(s) selected.',
    'table.rowsTotal': '{total} row(s) total.',
    'table.rowsPerPage': 'Rows per page',
    'table.pageOf': 'Page {page} of {total}',
    'table.asc': 'Asc',
    'table.desc': 'Desc',
    'table.reset': 'Reset',
    'table.hide': 'Hide',
    'table.selected': '{size} selected',
    'table.noResultsFound': 'No results found.',
    'table.clearFilters': 'Clear filters',
    'table.view': 'View',
    'table.searchColumns': 'Search columns...',
    'table.noColumnsFound': 'No columns found.',
    'table.selectDateRange': 'Select date range',
    'table.selectDate': 'Select date',
    'table.clear': 'Clear',
    'table.goToFirstPage': 'Go to first page',
    'table.goToPreviousPage': 'Go to previous page',
    'table.goToNextPage': 'Go to next page',
    'table.goToLastPage': 'Go to last page',
    'table.toggleColumns': 'Toggle columns',
    'table.resetFilters': 'Reset filters',

    // Data Table Operators
    'operator.contains': 'Contains',
    'operator.doesNotContain': 'Does not contain',
    'operator.is': 'Is',
    'operator.isNot': 'Is not',
    'operator.isEmpty': 'Is empty',
    'operator.isNotEmpty': 'Is not empty',
    'operator.isLessThan': 'Is less than',
    'operator.isLessThanOrEqual': 'Is less than or equal to',
    'operator.isGreaterThan': 'Is greater than',
    'operator.isGreaterThanOrEqual': 'Is greater than or equal to',
    'operator.isBetween': 'Is between',
    'operator.isBefore': 'Is before',
    'operator.isAfter': 'Is after',
    'operator.isOnOrBefore': 'Is on or before',
    'operator.isOnOrAfter': 'Is on or after',
    'operator.isRelativeToToday': 'Is relative to today',
    'operator.hasAnyOf': 'Has any of',
    'operator.hasNoneOf': 'Has none of',

    // Pages
    'page.products.title': 'Products',
    'page.products.desc': 'Manage products and inventory',
    'page.users.title': 'Users',
    'page.users.desc': 'Manage users and their roles',
    'page.kanban.title': 'Kanban',
    'page.kanban.desc': 'Manage tasks with drag and drop',
    'page.notifications.title': 'Notifications',
    'page.notifications.desc': 'View and manage your notifications',
    'page.workspaces.title': 'Workspaces',
    'page.workspaces.desc': 'Manage your workspaces and teams',
    'page.billing.title': 'Billing & Plans',
    'page.billing.desc': 'Choose a plan that works for you',
    'page.forms.basic.title': 'Basic Form',
    'page.forms.basic.desc': 'A comprehensive form demo',
    'page.forms.multiStep.title': 'Multi-Step Form',
    'page.forms.multiStep.desc': 'Multi-step wizard form with validation',
    'page.forms.sheet.title': 'Sheet & Dialog Forms',
    'page.forms.sheet.desc': 'Forms displayed in sheet and dialog overlays',
    'page.forms.advanced.title': 'Advanced Form Patterns',
    'page.forms.advanced.desc': 'Complex form patterns with dynamic fields',
    'page.reactQuery.title': 'React Query',
    'page.reactQuery.desc': 'React Query data fetching demos',
    'page.icons.title': 'Icons',
    'page.icons.desc': 'Browse Tabler Icons library',
    'page.exclusive.title': 'Exclusive Area',
    'page.exclusive.desc': 'Premium content for Pro subscribers',

    // Info Sidebar
    'info.workspaces': 'Workspaces Management',
    'info.team': 'Team Management',
    'info.billing': 'Billing & Plans',
    'info.product': 'Product Management',
    'info.users': 'Users Management',
    'info.reactQuery': 'React Query',

    // Product
    'product.add': 'Add New',
    'product.image': 'Product Image',
    'product.imageDesc': 'Upload a product image',
    'product.name': 'Product Name',
    'product.namePlaceholder': 'Enter product name',
    'product.category': 'Category',
    'product.categoryPlaceholder': 'Select category',
    'product.price': 'Price',
    'product.pricePlaceholder': 'Enter price',
    'product.description': 'Description',
    'product.descriptionPlaceholder': 'Enter product description',
    'product.update': 'Update Product',
    'product.addProduct': 'Add Product',
    'product.back': 'Back',
    'product.created': 'Product created successfully',
    'product.createFailed': 'Failed to create product',
    'product.updated': 'Product updated successfully',
    'product.updateFailed': 'Failed to update product',
    'product.deleted': 'Product deleted successfully',
    'product.deleteFailed': 'Failed to delete product',
    'product.column.image': 'IMAGE',
    'product.column.name': 'Name',
    'product.column.nameLabel': 'Name',
    'product.column.category': 'Category',
    'product.column.price': 'PRICE',
    'product.column.description': 'DESCRIPTION',
    'product.column.searchPlaceholder': 'Search products...',
    'product.column.categories': 'categories',

    // Categories
    'category.electronics': 'Electronics',
    'category.furniture': 'Furniture',
    'category.clothing': 'Clothing',
    'category.books': 'Books',
    'category.sports': 'Sports & Outdoors',
    'category.home': 'Home & Garden',
    'category.toys': 'Toys',
    'category.food': 'Food & Beverages',
    'category.beauty': 'Beauty Products',
    'category.groceries': 'Groceries',
    'category.jewelry': 'Jewelry',

    // Roles
    'role.developer': 'Developer',
    'role.designer': 'Designer',
    'role.manager': 'Manager',
    'role.admin': 'Admin',
    'role.qa': 'QA',
    'role.devops': 'DevOps',
    'role.productOwner': 'Product Owner',
    'status.active': 'Active',
    'status.inactive': 'Inactive',
    'status.invited': 'Invited',

    // Reports
    'reports.column.product': 'Product',
    'reports.column.category': 'Category',
    'reports.column.qty': 'Qty',
    'reports.column.price': 'Price',
    'reports.column.total': 'Total',
    'reports.column.status': 'Status',
    'reports.export.csv': 'CSV',
    'reports.status.completed': 'Completed',
    'reports.status.pending': 'Pending',
    'reports.status.refunded': 'Refunded',

    // Kanban
    'kanban.backlog': 'Backlog',
    'kanban.inProgress': 'In Progress',
    'kanban.review': 'Review',
    'kanban.done': 'Done',
    'kanban.addTask': 'Add New Task',
    'kanban.newTask': 'Add New Task',
    'kanban.taskQuestion': 'What do you want to get done today?',
    'kanban.taskPlaceholder': 'Task title...',
    'kanban.descPlaceholder': 'Description...',
    'kanban.add': 'Add Task',

    // Chat
    'chat.messenger': 'Messenger',
    'chat.activeConversations': '{count} active conversations',
    'chat.live': 'Live',
    'chat.searchConversations': 'Search conversations',
    'chat.noConversations': 'No conversations found',
    'chat.noMessages': 'No messages yet',
    'chat.online': 'Online',
    'chat.offline': 'Offline',
    'chat.audioCall': 'Start audio call',
    'chat.videoCall': 'Start video call',
    'chat.openMenu': 'Open conversation menu',
    'chat.writeMessage': 'Write a message',
    'chat.messageHint': 'Message {name} (Enter to send, Shift+Enter for newline)',
    'chat.sendMessage': 'Send message',
    'chat.attachFile': 'Attach a file',

    // Notifications
    'notifications.title': 'Notifications',
    'notifications.new': '{count} new',
    'notifications.markAllRead': 'Mark all as read',
    'notifications.empty': 'No notifications yet',
    'notifications.pageEmpty': 'No notifications',
    'notifications.tabAll': 'All',
    'notifications.tabUnread': 'Unread',
    'notifications.tabRead': 'Read',

    // Auth
    'auth.login': 'Login',
    'auth.signUp': 'Sign Up',
    'auth.email': 'Email',
    'auth.emailPlaceholder': 'Enter your email...',
    'auth.continueWithEmail': 'Continue With Email',
    'auth.orContinueWith': 'Or continue with',
    'auth.starOnGitHub': 'Star on GitHub',
    'auth.byClickingContinue': 'By clicking continue, you agree to our',
    'auth.termsOfService': 'Terms of Service',
    'auth.privacyPolicy': 'Privacy Policy',
    'auth.description':
      'This starter template provides a modern admin dashboard with multi-tenant support, billing, and more.',

    // Billing & Exclusive
    'billing.noOrg': 'No Organization Selected',
    'billing.noOrgDesc': 'Please select or create an organization to manage billing.',
    'billing.availablePlans': 'Available Plans',
    'billing.choosePlan': 'Choose a plan that works for you.',
    'exclusive.proRequired': 'Pro Plan Required',
    'exclusive.proRequiredDesc': 'This page is only available to Pro plan subscribers.',
    'exclusive.upgrade': 'Upgrade your subscription to access the exclusive features.',
    'exclusive.welcome': 'Welcome to the Exclusive Area!',
    'exclusive.thankYou': 'Thank you for being a Pro subscriber.',

    // Forms demo
    'form.demo.title': 'All Form Inputs Demo',
    'form.demo.textInputs': 'Text Inputs',
    'form.demo.selectCombobox': 'Select & Combobox',
    'form.demo.checkboxRadio': 'Checkbox & Radio',
    'form.demo.toggleSwitch': 'Toggle & Switch',
    'form.demo.slider': 'Slider',
    'form.demo.dateTime': 'Date & Time',
    'form.demo.specialInputs': 'Special Inputs',
    'form.demo.fileUpload': 'File Upload',
    'form.demo.formDataPreview': 'Form Data Preview',
    'form.demo.submitForm': 'Submit Form',
    'form.multiStep.basicInfo': 'Basic Info',
    'form.multiStep.details': 'Details',
    'form.multiStep.reviewSubmit': 'Review & Submit',
    'form.advanced.teamRegistration': 'Team Registration',
    'form.advanced.account': 'Account',
    'form.advanced.teamInfo': 'Team Info',
    'form.advanced.members': 'Members',
    'form.advanced.preferences': 'Preferences',
    'form.sheet.sheetForm': 'Sheet Form',
    'form.sheet.dialogForm': 'Dialog Form',
    'form.sheet.toastNotifications': 'Toast Notifications',

    // Icons page
    'icons.searchPlaceholder': 'Search icons...',
    'icons.browse': 'Browse Tabler Icons',
    'icons.noResults': 'No icons found matching "{query}".',

    // Page - Team
    'page.team.title': 'Team Management',
    'page.team.desc': 'Manage your workspace team, members, roles, security and more.',
    'page.workspaces.team.title': 'Team Management',
    'page.workspaces.team.desc': 'Manage your workspace team, members, roles, security and more.',

    // Billing
    'billing.alert':
      'Plans and subscriptions are managed through Clerk Billing. Subscribe to a plan to unlock features and higher limits.',

    // Info Sidebar
    'info.learnMore': 'Learn more',
    'info.noContent': 'No content available',
    'info.documentation': 'Documentation',
    'info.gettingStarted': 'Getting Started',
    'info.gettingStartedDesc': 'Learn how to get started with this application.',
    'info.installationGuide': 'Installation Guide',

    // KBar
    'kbar.navigation': 'Navigation',
    'kbar.goTo': 'Go to {name}',

    // Chat
    'chat.conversation': 'Conversation',
    'chat.conversationCount': '{count} active conversation(s)',

    // Exclusive
    'exclusive.haveNiceDay': 'Have a wonderful day!',

    // About
    'about.title': 'About',
    'about.desc': 'Learn more about this project',
    'about.openSource': 'Open-Source Project',
    'about.openSourceDesc':
      'This is an open-source Next.js admin dashboard starter built with modern web technologies. It provides a solid foundation for building powerful admin interfaces and dashboards. The source code is freely available for developers to use, modify, and distribute.',
    'about.demoPurpose': 'Demo Purpose',
    'about.demoPurposeDesc':
      'This application serves as a demo for demonstration purposes. It showcases the features, components, and capabilities of the admin dashboard starter. Feel free to explore the interface, test the functionality, and evaluate if it meets your project requirements.',
    'about.authByClerk': 'Authentication by Clerk',
    'about.authByClerkDesc1': 'Authentication for this application is securely handled by',
    'about.authByClerkDesc2':
      ', a modern authentication and user management platform. Clerk provides secure sign-in, session management, and user data protection out of the box.',
    'about.dataPrivacy': 'Data Privacy',
    'about.dataPrivacyDesc':
      'We take your privacy seriously. No personal data is misused, shared, or sold to third parties. Any information collected during your use of this demo application is used solely for the purpose of providing the demonstration experience and is handled in accordance with best practices for data protection.',
    'about.builtWith': 'Built with Next.js, Tailwind CSS, and shadcn/ui',

    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.lastUpdated': 'Last updated:',
    'terms.intro.title': 'Introduction',
    'terms.intro.desc':
      'Welcome to our application. These Terms of Service govern your access to and use of our platform. By accessing or using this application, you agree to be bound by these terms. Please read them carefully before proceeding to use our services.',
    'terms.demoPurpose.title': 'Demo Purpose',
    'terms.demoPurpose.desc':
      'This application is provided solely for demonstration and educational purposes. It is not intended for production use, and we make no guarantees regarding its suitability for any specific purpose. All data and functionality are provided as-is for showcasing features and capabilities only.',
    'terms.openSource.title': 'Open Source',
    'terms.openSource.desc':
      'This is an open-source project. The source code is available for review, modification, and distribution under the applicable open-source license. We encourage community contributions and feedback to help improve the project. Please refer to the project repository for licensing details and contribution guidelines.',
    'terms.noWarranty.title': 'No Warranty',
    'terms.noWarranty.desc':
      'This application is provided "as is" without any warranties of any kind, either express or implied. We expressly disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the application will be uninterrupted, timely, secure, or error-free.',
    'terms.dataUsage.title': 'Data Usage',
    'terms.dataUsage.desc':
      'Any data you provide while using this demo application may be stored temporarily for the purpose of demonstrating functionality. We do not guarantee the security or privacy of any data entered into this demo application. Please do not enter sensitive, personal, or confidential information. Data may be deleted or reset at any time without notice.',
    'terms.changes.title': 'Changes to These Terms',
    'terms.changes.desc':
      'We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. It is your responsibility to review these terms periodically for changes. Your continued use of the application following the posting of any changes constitutes acceptance of those changes.',
    'terms.contact':
      'If you have any questions about these Terms of Service, please refer to the project documentation or repository for more information.',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.intro.title': 'Introduction',
    'privacy.intro.desc':
      'This Privacy Policy explains how we handle your personal information when you use our application. We are committed to protecting your privacy and ensuring transparency about our data practices. Please read this policy carefully to understand how we collect, use, and safeguard your information.',
    'privacy.collection.title': 'Data Collection',
    'privacy.collection.desc':
      'Our application collects minimal data necessary for authentication purposes. When you sign in using our authentication provider, we receive basic profile information such as your email address and name. This data is used solely to identify you within the application and provide personalized access to features.',
    'privacy.clerk.title': 'Authentication by Clerk',
    'privacy.clerk.desc1': 'Our application uses',
    'privacy.clerk.desc2':
      'to handle user authentication securely. All authentication processes, including sign-up, sign-in, and password management, are managed by Clerk. For detailed information about how Clerk processes and protects your data, please review their',
    'privacy.clerk.desc3': '.',
    'privacy.noMisuse.title': 'No Data Misuse',
    'privacy.noMisuse.desc':
      'We take your privacy seriously. We want to assure you that your personal data is never sold, rented, or shared with third parties for marketing or commercial purposes. Your information is used exclusively for the intended functionality of this application and is never misused or exploited in any way.',
    'privacy.demo.title': 'Demo Application',
    'privacy.demo.desc':
      'Please note that this is a demo application created for demonstration and educational purposes. It showcases various features and technologies but should not be considered a production-ready service. Any data you provide may be temporary and could be removed at any time as part of regular maintenance.',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.desc':
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please feel free to contact us at',
    'privacy.lastUpdated': 'Last updated: February 2026',

    // React Query
    'reactQuery.pickPokemon': 'Pick a Pokemon',
    'reactQuery.suspenseDesc':
      'Each selection triggers useSuspenseQuery — cached results are instant, new fetches show the Suspense fallback.',
    'reactQuery.dataFrom': 'Data from PokeAPI - Prefetched on server, hydrated on client'
  },
  zh: {
    // Navigation
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
    'nav.reports': '报表',
    'nav.group.overview': '概览',
    'nav.group.elements': '元素',
    'nav.item.dashboard': '仪表板',
    'nav.item.workspaces': '工作区',
    'nav.item.teams': '团队',
    'nav.item.product': '产品',
    'nav.item.users': '用户',
    'nav.item.kanban': '看板',
    'nav.item.chat': '聊天',
    'nav.item.reports': '报表',
    'nav.item.forms': '表单',
    'nav.item.basicForm': '基础表单',
    'nav.item.multiStepForm': '多步表单',
    'nav.item.sheetDialog': '抽屉与对话框',
    'nav.item.advancedPatterns': '高级模式',
    'nav.item.reactQuery': 'React Query',
    'nav.item.icons': '图标',
    'nav.item.pro': '专业版',
    'nav.item.exclusive': '专属',
    'nav.item.account': '账户',
    'nav.item.profile': '个人资料',
    'nav.item.notifications': '通知',
    'nav.item.billing': '计费',
    'nav.item.login': '登录',
    'nav.upgradeToPro': '升级专业版',
    'nav.account': '账户',
    'nav.logOut': '退出登录',
    'nav.projects': '项目',
    'nav.more': '更多',
    'nav.viewProject': '查看项目',
    'nav.shareProject': '分享项目',
    'nav.deleteProject': '删除项目',
    'nav.platform': '平台',

    // Overview
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
    'overview.barChartTitle': '柱状图 - 多组数据',
    'overview.barChartDesc': '桌面端 vs 移动端月度对比',
    'overview.areaChartTitle': '面积图',
    'overview.areaChartDesc': '显示该时段的总访问量',
    'overview.pieChartTitle': '饼图',
    'overview.pieChartDesc': '浏览器分布',
    'overview.vsLastMonth': '环比上月',
    'overview.vsLastYear': '同比去年',
    'overview.adminViewDesc': '您看到的是汇总KPI卡片和图表。',
    'overview.managerViewDesc': '您看到的是详细交易数据。',
    'overview.chart.desktop': '桌面端',
    'overview.chart.mobile': '移动端',
    'overview.chart.chrome': 'Chrome',
    'overview.chart.safari': 'Safari',
    'overview.chart.firefox': 'Firefox',
    'overview.chart.edge': 'Edge',
    'overview.chart.other': '其他',

    // Common
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
    'common.submit': '提交',
    'common.reset': '重置',
    'common.next': '下一步',
    'common.previous': '上一步',
    'common.back': '返回',
    'common.update': '更新',
    'common.viewAll': '查看全部',
    'common.from': '从',
    'common.to': '至',
    'common.confirm': '确认',
    'common.avatar': '头像',
    'common.showInfo': '显示信息',
    'common.add': '添加',
    'common.customer': '客户',

    // User
    'user.profile': '个人资料',
    'user.billing': '计费',
    'user.settings': '设置',
    'user.newTeam': '新建团队',
    'user.signOut': '退出登录',
    'user.notifications': '通知',
    'user.column.name': '姓名',
    'user.column.phone': '电话',
    'user.column.role': '角色',
    'user.column.status': '状态',
    'user.column.searchPlaceholder': '搜索用户...',
    'user.column.roles': '角色',
    'user.column.nameLabel': '姓名',
    'user.firstName': '名',
    'user.lastName': '姓',
    'user.email': '邮箱',
    'user.phone': '电话',
    'user.role': '角色',
    'user.status': '状态',
    'user.firstNamePlaceholder': '请输入名',
    'user.lastNamePlaceholder': '请输入姓',
    'user.emailPlaceholder': 'user@example.com',
    'user.phonePlaceholder': '138-0000-0000',
    'user.rolePlaceholder': '请选择角色',
    'user.statusPlaceholder': '请选择状态',
    'user.add': '添加用户',
    'user.edit': '编辑用户',
    'user.new': '新建用户',
    'user.editDesc': '请在下方更新用户信息。',
    'user.newDesc': '请填写信息以创建新用户。',
    'user.updateUser': '更新用户',
    'user.createUser': '创建用户',
    'user.created': '用户创建成功',
    'user.createFailed': '用户创建失败',
    'user.updated': '用户更新成功',
    'user.updateFailed': '用户更新失败',
    'user.deleted': '用户删除成功',
    'user.deleteFailed': '用户删除失败',

    // Organization
    'org.organizations': '组织',
    'org.create': '创建组织',
    'org.getStarted': '开始使用',
    'org.add': '添加组织',
    'org.organization': '组织',

    // Not Found
    'notFound.title': '页面未找到',
    'notFound.desc': '抱歉，您查找的页面不存在或已被移动。',
    'notFound.goBack': '返回',
    'notFound.backToHome': '返回首页',

    // Language
    'lang.switch': '切换语言',
    'lang.en': 'English',
    'lang.zh': '中文',

    // Date
    'date.7d': '近7天',
    'date.30d': '近30天',
    'date.90d': '近90天',
    'date.1y': '今年',
    'date.all': '全部',

    // Services & Orders
    'services.price': '价格',
    'orders.orderId': '订单编号',
    'orders.date': '日期',

    // Data Table
    'table.noResults': '暂无数据。',
    'table.rowsSelected': '已选择 {selected} / {total} 行。',
    'table.rowsTotal': '共 {total} 行。',
    'table.rowsPerPage': '每页行数',
    'table.pageOf': '第 {page} 页，共 {total} 页',
    'table.asc': '升序',
    'table.desc': '降序',
    'table.reset': '重置',
    'table.hide': '隐藏',
    'table.selected': '已选 {size} 项',
    'table.noResultsFound': '未找到结果。',
    'table.clearFilters': '清除筛选',
    'table.view': '显示',
    'table.searchColumns': '搜索列...',
    'table.noColumnsFound': '未找到列。',
    'table.selectDateRange': '选择日期范围',
    'table.selectDate': '选择日期',
    'table.clear': '清除',
    'table.goToFirstPage': '首页',
    'table.goToPreviousPage': '上一页',
    'table.goToNextPage': '下一页',
    'table.goToLastPage': '末页',
    'table.toggleColumns': '切换列',
    'table.resetFilters': '重置筛选',

    // Data Table Operators
    'operator.contains': '包含',
    'operator.doesNotContain': '不包含',
    'operator.is': '等于',
    'operator.isNot': '不等于',
    'operator.isEmpty': '为空',
    'operator.isNotEmpty': '不为空',
    'operator.isLessThan': '小于',
    'operator.isLessThanOrEqual': '小于等于',
    'operator.isGreaterThan': '大于',
    'operator.isGreaterThanOrEqual': '大于等于',
    'operator.isBetween': '介于',
    'operator.isBefore': '早于',
    'operator.isAfter': '晚于',
    'operator.isOnOrBefore': '当天或早于',
    'operator.isOnOrAfter': '当天或晚于',
    'operator.isRelativeToToday': '相对今天',
    'operator.hasAnyOf': '包含任一',
    'operator.hasNoneOf': '不包含任一',

    // Pages
    'page.products.title': '产品管理',
    'page.products.desc': '管理产品和库存',
    'page.users.title': '用户管理',
    'page.users.desc': '管理用户及其角色',
    'page.kanban.title': '看板',
    'page.kanban.desc': '通过拖拽管理任务',
    'page.notifications.title': '通知',
    'page.notifications.desc': '查看和管理通知',
    'page.workspaces.title': '工作区',
    'page.workspaces.desc': '管理工作区和团队',
    'page.billing.title': '计费与套餐',
    'page.billing.desc': '选择适合您的套餐',
    'page.forms.basic.title': '基础表单',
    'page.forms.basic.desc': '综合表单演示',
    'page.forms.multiStep.title': '多步表单',
    'page.forms.multiStep.desc': '带验证的多步向导表单',
    'page.forms.sheet.title': '抽屉与对话框表单',
    'page.forms.sheet.desc': '在抽屉和对话框中展示表单',
    'page.forms.advanced.title': '高级表单模式',
    'page.forms.advanced.desc': '含动态字段的复杂表单模式',
    'page.reactQuery.title': 'React Query',
    'page.reactQuery.desc': 'React Query 数据获取演示',
    'page.icons.title': '图标',
    'page.icons.desc': '浏览 Tabler 图标库',
    'page.exclusive.title': '专属区域',
    'page.exclusive.desc': '专业版用户的专属内容',

    // Info Sidebar
    'info.workspaces': '工作区管理',
    'info.team': '团队管理',
    'info.billing': '计费与套餐',
    'info.product': '产品管理',
    'info.users': '用户管理',
    'info.reactQuery': 'React Query',

    // Product
    'product.add': '新增',
    'product.image': '产品图片',
    'product.imageDesc': '上传产品图片',
    'product.name': '产品名称',
    'product.namePlaceholder': '请输入产品名称',
    'product.category': '分类',
    'product.categoryPlaceholder': '请选择分类',
    'product.price': '价格',
    'product.pricePlaceholder': '请输入价格',
    'product.description': '产品描述',
    'product.descriptionPlaceholder': '请输入产品描述',
    'product.update': '更新产品',
    'product.addProduct': '添加产品',
    'product.back': '返回',
    'product.created': '产品创建成功',
    'product.createFailed': '产品创建失败',
    'product.updated': '产品更新成功',
    'product.updateFailed': '产品更新失败',
    'product.deleted': '产品删除成功',
    'product.deleteFailed': '产品删除失败',
    'product.column.image': '图片',
    'product.column.name': '名称',
    'product.column.nameLabel': '名称',
    'product.column.category': '分类',
    'product.column.price': '价格',
    'product.column.description': '描述',
    'product.column.searchPlaceholder': '搜索产品...',
    'product.column.categories': '分类',

    // Categories
    'category.electronics': '电子产品',
    'category.furniture': '家具',
    'category.clothing': '服装',
    'category.books': '图书',
    'category.sports': '运动户外',
    'category.home': '家居园艺',
    'category.toys': '玩具',
    'category.food': '食品饮料',
    'category.beauty': '美妆个护',
    'category.groceries': '杂货',
    'category.jewelry': '珠宝',

    // Roles
    'role.developer': '开发人员',
    'role.designer': '设计师',
    'role.manager': '经理',
    'role.admin': '管理员',
    'role.qa': '测试',
    'role.devops': '运维',
    'role.productOwner': '产品负责人',
    'status.active': '活跃',
    'status.inactive': '非活跃',
    'status.invited': '已邀请',

    // Reports
    'reports.column.product': '产品',
    'reports.column.category': '分类',
    'reports.column.qty': '数量',
    'reports.column.price': '价格',
    'reports.column.total': '合计',
    'reports.column.status': '状态',
    'reports.export.csv': 'CSV',
    'reports.status.completed': '已完成',
    'reports.status.pending': '待处理',
    'reports.status.refunded': '已退款',

    // Kanban
    'kanban.backlog': '待办',
    'kanban.inProgress': '进行中',
    'kanban.review': '审查',
    'kanban.done': '完成',
    'kanban.addTask': '添加新任务',
    'kanban.newTask': '添加新任务',
    'kanban.taskQuestion': '今天想要完成什么？',
    'kanban.taskPlaceholder': '任务标题...',
    'kanban.descPlaceholder': '描述...',
    'kanban.add': '添加任务',

    // Chat
    'chat.messenger': '消息',
    'chat.activeConversations': '{count} 个活跃会话',
    'chat.live': '在线',
    'chat.searchConversations': '搜索会话',
    'chat.noConversations': '未找到会话',
    'chat.noMessages': '暂无消息',
    'chat.online': '在线',
    'chat.offline': '离线',
    'chat.audioCall': '发起语音通话',
    'chat.videoCall': '发起视频通话',
    'chat.openMenu': '打开会话菜单',
    'chat.writeMessage': '输入消息',
    'chat.messageHint': '向 {name} 发送消息（Enter 发送，Shift+Enter 换行）',
    'chat.sendMessage': '发送消息',
    'chat.attachFile': '附加文件',

    // Notifications
    'notifications.title': '通知',
    'notifications.new': '{count} 条新通知',
    'notifications.markAllRead': '全部标为已读',
    'notifications.empty': '暂无通知',
    'notifications.pageEmpty': '暂无通知',
    'notifications.tabAll': '全部',
    'notifications.tabUnread': '未读',
    'notifications.tabRead': '已读',

    // Auth
    'auth.login': '登录',
    'auth.signUp': '注册',
    'auth.email': '邮箱',
    'auth.emailPlaceholder': '请输入邮箱...',
    'auth.continueWithEmail': '继续使用邮箱',
    'auth.orContinueWith': '或使用以下方式继续',
    'auth.starOnGitHub': '在 GitHub 上点赞',
    'auth.byClickingContinue': '点击继续即表示您同意我们的',
    'auth.termsOfService': '服务条款',
    'auth.privacyPolicy': '隐私政策',
    'auth.description': '此模板提供现代化的管理后台，支持多租户、计费等更多功能。',

    // Billing & Exclusive
    'billing.noOrg': '未选择组织',
    'billing.noOrgDesc': '请选择或创建组织以管理计费。',
    'billing.availablePlans': '可用套餐',
    'billing.choosePlan': '选择适合您的套餐。',
    'exclusive.proRequired': '需要专业版套餐',
    'exclusive.proRequiredDesc': '此页面仅对专业版用户开放。',
    'exclusive.upgrade': '升级套餐以访问专属功能。',
    'exclusive.welcome': '欢迎来到专属区域！',
    'exclusive.thankYou': '感谢您成为专业版用户。',

    // Forms demo
    'form.demo.title': '所有表单输入演示',
    'form.demo.textInputs': '文本输入',
    'form.demo.selectCombobox': '选择与组合框',
    'form.demo.checkboxRadio': '复选框与单选',
    'form.demo.toggleSwitch': '开关与切换',
    'form.demo.slider': '滑块',
    'form.demo.dateTime': '日期与时间',
    'form.demo.specialInputs': '特殊输入',
    'form.demo.fileUpload': '文件上传',
    'form.demo.formDataPreview': '表单数据预览',
    'form.demo.submitForm': '提交表单',
    'form.multiStep.basicInfo': '基本信息',
    'form.multiStep.details': '详细信息',
    'form.multiStep.reviewSubmit': '确认并提交',
    'form.advanced.teamRegistration': '团队注册',
    'form.advanced.account': '账户信息',
    'form.advanced.teamInfo': '团队信息',
    'form.advanced.members': '成员',
    'form.advanced.preferences': '偏好设置',
    'form.sheet.sheetForm': '抽屉表单',
    'form.sheet.dialogForm': '对话框表单',
    'form.sheet.toastNotifications': '消息通知',

    // Icons page
    'icons.searchPlaceholder': '搜索图标...',
    'icons.browse': '浏览 Tabler 图标',
    'icons.noResults': '未找到包含 "{query}" 的图标。',

    // Page - Team
    'page.team.title': '团队管理',
    'page.team.desc': '管理工作区团队、成员、角色、安全设置等。',
    'page.workspaces.team.title': '团队管理',
    'page.workspaces.team.desc': '管理工作区团队、成员、角色、安全设置等。',

    // Billing
    'billing.alert': '套餐和订阅通过 Clerk Billing 管理。订阅套餐以解锁功能和更高限制。',

    // Info Sidebar
    'info.learnMore': '了解更多',
    'info.noContent': '暂无内容',
    'info.documentation': '文档',
    'info.gettingStarted': '快速开始',
    'info.gettingStartedDesc': '了解如何开始使用此应用程序。',
    'info.installationGuide': '安装指南',

    // KBar
    'kbar.navigation': '导航',
    'kbar.goTo': '转到 {name}',

    // Chat
    'chat.conversation': '会话',
    'chat.conversationCount': '{count} 个活跃会话',

    // Exclusive
    'exclusive.haveNiceDay': '祝您度过愉快的一天！',

    // About
    'about.title': '关于',
    'about.desc': '了解更多关于此项目',
    'about.openSource': '开源项目',
    'about.openSourceDesc':
      '这是一个基于现代 Web 技术构建的开源 Next.js 管理后台启动模板。它为构建强大的管理界面和仪表板提供了坚实的基础。源代码完全开放，供开发者使用、修改和分发。',
    'about.demoPurpose': '演示目的',
    'about.demoPurposeDesc':
      '此应用程序作为演示用途，展示管理后台启动模板的功能、组件和能力。欢迎探索界面、测试功能，并评估它是否满足您的项目需求。',
    'about.authByClerk': 'Clerk 身份认证',
    'about.authByClerkDesc1': '此应用程序的身份认证由',
    'about.authByClerkDesc2':
      '安全处理，Clerk 是一个现代化的身份认证和用户管理平台。Clerk 提供安全的登录、会话管理和用户数据保护。',
    'about.dataPrivacy': '数据隐私',
    'about.dataPrivacyDesc':
      '我们非常重视您的隐私。任何个人数据都不会被滥用、共享或出售给第三方。在您使用此演示应用程序期间收集的任何信息仅用于提供演示体验，并按照数据保护的最佳实践进行处理。',
    'about.builtWith': '基于 Next.js、Tailwind CSS 和 shadcn/ui 构建',

    // Terms of Service
    'terms.title': '服务条款',
    'terms.lastUpdated': '最后更新：',
    'terms.intro.title': '引言',
    'terms.intro.desc':
      '欢迎使用我们的应用程序。这些服务条款管理您对我们平台的访问和使用。通过访问或使用此应用程序，您同意受这些条款的约束。请在使用我们的服务前仔细阅读。',
    'terms.demoPurpose.title': '演示目的',
    'terms.demoPurpose.desc':
      '此应用程序仅供演示和教育目的。不适用于生产环境，我们对其适用于任何特定目的不作任何保证。所有数据和功能仅按现状提供，用于展示功能。',
    'terms.openSource.title': '开源',
    'terms.openSource.desc':
      '这是一个开源项目。源代码可根据适用的开源许可证进行查看、修改和分发。我们鼓励社区贡献和反馈，以帮助改进项目。有关许可详情和贡献指南，请参阅项目仓库。',
    'terms.noWarranty.title': '免责声明',
    'terms.noWarranty.desc':
      '此应用程序按"现状"提供，不附带任何明示或暗示的保证。我们明确否认所有保证，包括但不限于适销性、特定用途适用性和非侵权性的暗示保证。我们不保证应用程序不会中断、及时、安全或无错误。',
    'terms.dataUsage.title': '数据使用',
    'terms.dataUsage.desc':
      '您在使用此演示应用程序时提供的任何数据可能会临时存储，用于演示功能。我们不保证输入到此演示应用程序中的任何数据的安全性或隐私性。请不要输入敏感、个人或机密信息。数据可能随时被删除或重置，恕不另行通知。',
    'terms.changes.title': '条款变更',
    'terms.changes.desc':
      '我们保留随时自行决定修改或替换这些服务条款的权利。您有责任定期查看这些条款的变更。在发布任何变更后继续使用应用程序即表示接受这些变更。',
    'terms.contact': '如果您对这些服务条款有任何疑问，请参阅项目文档或仓库以获取更多信息。',

    // Privacy Policy
    'privacy.title': '隐私政策',
    'privacy.intro.title': '引言',
    'privacy.intro.desc':
      '本隐私政策说明我们在您使用我们的应用程序时如何处理您的个人信息。我们致力于保护您的隐私并确保数据实践的透明度。请仔细阅读本政策，了解我们如何收集、使用和保护您的信息。',
    'privacy.collection.title': '数据收集',
    'privacy.collection.desc':
      '我们的应用程序仅收集身份验证所必需的最少数据。当您使用我们的认证提供商登录时，我们会收到基本资料信息，如您的电子邮件地址和名称。这些数据仅用于在应用程序中识别您的身份并提供个性化功能访问。',
    'privacy.clerk.title': 'Clerk 身份认证',
    'privacy.clerk.desc1': '我们的应用程序使用',
    'privacy.clerk.desc2':
      '安全地处理用户身份认证。所有认证过程，包括注册、登录和密码管理，均由 Clerk 管理。有关 Clerk 如何处理和保护您的数据的详细信息，请查看他们的',
    'privacy.clerk.desc3': '。',
    'privacy.noMisuse.title': '无数据滥用',
    'privacy.noMisuse.desc':
      '我们非常重视您的隐私。我们向您保证，您的个人数据绝不会被出售、出租或与第三方共享用于营销或商业目的。您的信息仅用于此应用程序的预期功能，绝不会以任何方式被滥用或利用。',
    'privacy.demo.title': '演示应用',
    'privacy.demo.desc':
      '请注意，这是一个为演示和教育目的而创建的演示应用程序。它展示了各种功能和技术，但不应被视为生产就绪的服务。您提供的任何数据都可能是临时的，并可能随时作为定期维护的一部分被删除。',
    'privacy.contact.title': '联系我们',
    'privacy.contact.desc':
      '如果您对本隐私政策或我们的数据实践有任何问题、疑虑或请求，请通过以下邮箱与我们联系',
    'privacy.lastUpdated': '最后更新：2026 年 2 月',

    // React Query
    'reactQuery.pickPokemon': '选择一个宝可梦',
    'reactQuery.suspenseDesc':
      '每次选择都会触发 useSuspenseQuery — 缓存结果即时返回，新获取会显示 Suspense 加载状态。',
    'reactQuery.dataFrom': '来自 PokeAPI 的数据 - 在服务端预取，客户端水合'
  }
};

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
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
    (key: string, params?: Record<string, string | number>) => {
      let text = translations[language]?.[key] || translations.en[key] || key;
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(`{${k}}`, String(v));
        }
      }
      return text;
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
