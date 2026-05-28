import type { InfobarContent } from '@/components/ui/infobar';

export const workspacesInfoContent: InfobarContent = {
  title: 'Workspaces Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Workspaces page allows you to manage your workspaces and switch between them. This feature is powered by Clerk Organizations, which enables multi-tenant workspace management. You can view all available workspaces, create new ones, and switch your active workspace.',
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    },
    {
      title: 'Creating Workspaces',
      description:
        'To create a new workspace, click the "Create Organization" button. You will be prompted to enter a workspace name and configure initial settings. Once created, you can switch to the new workspace and start managing it.',
      links: [
        {
          title: 'Multi-tenant Authentication Guide',
          url: 'https://clerk.com/blog/how-to-build-multitenant-authentication-with-clerk'
        }
      ]
    },
    {
      title: 'Switching Workspaces',
      description:
        'You can switch between workspaces by clicking on a workspace in the list. The selected workspace becomes your active organization context, and all organization-specific features will use this workspace.',
      links: []
    },
    {
      title: 'Workspace Features',
      description:
        'Each workspace operates independently with its own team members, roles, permissions, and billing. This allows you to manage multiple projects or teams within a single account while keeping their data and settings separate.',
      links: []
    },
    {
      title: 'Server-Side Permission Checks',
      description:
        "This application follows Clerk's recommended patterns for multi-tenant authentication. Server-side permission checks ensure that users can only access resources for their active organization.",
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    }
  ]
};

export const teamInfoContent: InfobarContent = {
  title: 'Team Management',
  sections: [
    {
      title: 'Overview',
      description:
        "The Team Management page allows you to manage your workspace team, including members, roles, security settings, and more. This page provides comprehensive organization management through Clerk's OrganizationProfile component.",
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    },
    {
      title: 'Managing Team Members',
      description:
        'You can add, remove, and manage team members from this page. Invite new members by email, assign roles, and control their access levels. Each member can have different permissions based on their role.',
      links: []
    },
    {
      title: 'Roles and Permissions',
      description:
        'Configure default roles and permissions in the Clerk Dashboard under Organizations settings. Roles define what actions team members can perform within the workspace. Common roles include admin, member, and custom roles you define.',
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    },
    {
      title: 'Security Settings',
      description:
        "Manage security settings for your workspace, including authentication requirements, session management, and access controls. These settings help protect your organization's data and resources.",
      links: []
    },
    {
      title: 'Organization Settings',
      description:
        'Configure general organization settings such as name, logo, and other workspace preferences. These settings apply to the entire workspace and affect all team members.',
      links: []
    },
    {
      title: 'Navigation RBAC System',
      description:
        'The application includes a fully client-side navigation filtering system using the `useNav` hook. It supports `requireOrg`, `permission`, and `role` checks for instant access control. Navigation items are configured in `src/config/nav-config.ts` with `access` properties.',
      links: []
    }
  ]
};

export const billingInfoContent: InfobarContent = {
  title: 'Billing & Plans',
  sections: [
    {
      title: 'Overview',
      description:
        "The Billing page allows you to manage your organization's subscription and usage limits. Plans and subscriptions are managed through Clerk Billing for B2B, which provides organization-level subscription management with integrated Stripe payment processing.",
      links: [
        {
          title: 'Clerk Billing Documentation',
          url: 'https://clerk.com/docs/billing/overview'
        }
      ]
    },
    {
      title: 'Available Plans',
      description:
        'View and subscribe to available plans through the pricing table. Plans are created and managed in the Clerk Dashboard. Toggle "Publicly available" on plans to show them in the pricing table. Common plans include free, pro, and team tiers.',
      links: [
        {
          title: 'Clerk Dashboard - Plans',
          url: 'https://dashboard.clerk.com/~/billing/plans'
        }
      ]
    },
    {
      title: 'Plan Features',
      description:
        'Each plan can include specific features that unlock functionality in the application. Features are added to plans in the Clerk Dashboard and can be checked in code using the `has()` function with `feature` checks.',
      links: []
    },
    {
      title: 'Access Control',
      description:
        'Plans and features are used for access control throughout the application. Server-side checks use the `has()` function to verify plan or feature access. Client-side protection uses the `<Show>` component to conditionally render content based on subscription status.',
      links: []
    },
    {
      title: 'Billing Cost Structure',
      description:
        "Clerk Billing costs 0.7% per transaction, plus transaction fees paid directly to Stripe. Clerk Billing is not the same as Stripe Billing - plans and pricing are managed through the Clerk Dashboard and won't sync with existing Stripe products. Clerk uses Stripe only for payment processing.",
      links: []
    },
    {
      title: 'Setup Requirements',
      description:
        "To enable billing, navigate to Billing Settings in the Clerk Dashboard and enable billing for your application. Choose between Clerk's development gateway (for testing) or your own Stripe account (for production). Note: A Stripe account created for development cannot be used for production.",
      links: [
        {
          title: 'Billing Settings',
          url: 'https://dashboard.clerk.com/~/billing/settings'
        }
      ]
    },
    {
      title: 'Beta Status',
      description:
        'Billing is currently in Beta and its APIs are experimental and may undergo breaking changes. To mitigate potential disruptions, we recommend pinning your SDK and `clerk-js` package versions.',
      links: []
    }
  ]
};

export const productInfoContent: InfobarContent = {
  title: 'Product Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Products page allows you to manage your product catalog. You can view all products in a table format with server-side functionality including sorting, filtering, pagination, and search capabilities. Use the "Add New" button to create new products.',
      links: [
        {
          title: 'Product Management Guide',
          url: '#'
        }
      ]
    },
    {
      title: 'Adding Products',
      description:
        'To add a new product, click the "Add New" button in the page header. You will be taken to a form where you can enter product details including name, description, price, category, and upload product images.',
      links: [
        {
          title: 'Adding Products Documentation',
          url: '#'
        }
      ]
    },
    {
      title: 'Editing Products',
      description:
        'You can edit existing products by clicking on a product row in the table. This will open the product edit form where you can modify any product information. Changes are saved automatically when you submit the form.',
      links: [
        {
          title: 'Editing Products Guide',
          url: '#'
        }
      ]
    },
    {
      title: 'Deleting Products',
      description:
        'Products can be deleted from the product listing table. Click the delete action for the product you want to remove. You will be asked to confirm the deletion before the product is permanently removed from your catalog.',
      links: [
        {
          title: 'Product Deletion Policy',
          url: '#'
        }
      ]
    },
    {
      title: 'Table Features',
      description:
        'The product table includes several powerful features to help you manage large product catalogs efficiently. You can sort columns by clicking on column headers, filter products using the filter controls, navigate through pages using pagination, and quickly find products using the search functionality.',
      links: [
        {
          title: 'Table Features Documentation',
          url: '#'
        },
        {
          title: 'Sorting and Filtering Guide',
          url: '#'
        }
      ]
    },
    {
      title: 'Product Fields',
      description:
        'Each product can have the following fields: Name (required), Description (optional text), Price (numeric value), Category (for organizing products), and Image Upload (for product photos). All fields can be edited when creating or updating a product.',
      links: [
        {
          title: 'Product Fields Specification',
          url: '#'
        }
      ]
    }
  ]
};

export const workspacesInfoContentZh: InfobarContent = {
  title: '工作区管理',
  sections: [
    {
      title: '概览',
      description:
        '工作区页面支持管理工作区并切换。基于 Clerk Organizations 实现多租户工作区管理。可查看、创建工作区及切换当前工作区。',
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    },
    {
      title: '创建工作区',
      description: '点击"创建组织"按钮输入名称和配置即可创建新工作区。创建后可立即切换管理。',
      links: [
        {
          title: 'Multi-tenant Authentication Guide',
          url: 'https://clerk.com/blog/how-to-build-multitenant-authentication-with-clerk'
        }
      ]
    },
    {
      title: '切换工作区',
      description:
        '点击列表中的工作区即可切换。选中的工作区将作为当前组织上下文，所有组织相关功能将使用此工作区。',
      links: []
    },
    {
      title: '工作区功能',
      description:
        '每个工作区独立运作，拥有独立的团队成员、角色、权限和计费。可在同一账户内管理多个项目或团队，数据和设置相互隔离。',
      links: []
    },
    {
      title: '服务端权限检查',
      description:
        '应用遵循 Clerk 推荐的多租户认证模式。服务端权限检查确保用户只能访问当前组织的资源。',
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    }
  ]
};

export const teamInfoContentZh: InfobarContent = {
  title: '团队管理',
  sections: [
    {
      title: '概览',
      description:
        '团队管理页面支持管理工作区团队，包括成员、角色、安全设置等。通过 Clerk OrganizationProfile 组件提供全面的组织管理功能。',
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    },
    {
      title: '管理团队成员',
      description:
        '可添加、移除和管理团队成员。通过邮件邀请新成员，分配角色和控制访问权限。成员角色不同，权限也不同。',
      links: []
    },
    {
      title: '角色与权限',
      description:
        '在 Clerk Dashboard 的组织设置中配置默认角色和权限。角色决定成员在工作区中的操作权限，常见角色包括管理员、成员和自定义角色。',
      links: [
        {
          title: 'Clerk Organizations Documentation',
          url: 'https://clerk.com/docs/organizations/overview'
        }
      ]
    },
    {
      title: '安全设置',
      description:
        '管理工作区的安全设置，包括认证要求、会话管理和访问控制。这些设置有助于保护组织数据和资源。',
      links: []
    },
    {
      title: '组织设置',
      description:
        '配置组织名称、Logo 和其他工作区偏好设置。这些设置适用于整个工作区并影响所有团队成员。',
      links: []
    },
    {
      title: '导航 RBAC 系统',
      description:
        '应用包含全客户端的导航过滤系统，使用 useNav 钩子实现。支持 requireOrg、permission 和 role 检查。导航项在 src/config/nav-config.ts 中配置。',
      links: []
    }
  ]
};

export const billingInfoContentZh: InfobarContent = {
  title: '计费与套餐',
  sections: [
    {
      title: '概览',
      description:
        '计费页面支持管理组织订阅和使用限制。通过 Clerk Billing for B2B 实现组织级订阅管理，集成 Stripe 支付处理。',
      links: [
        {
          title: 'Clerk Billing Documentation',
          url: 'https://clerk.com/docs/billing/overview'
        }
      ]
    },
    {
      title: '可用套餐',
      description:
        '通过定价表查看和订阅可用套餐。套餐在 Clerk Dashboard 中创建和管理。将套餐设为"公开可用"即可在定价表中展示。',
      links: [
        {
          title: 'Clerk Dashboard - Plans',
          url: 'https://dashboard.clerk.com/~/billing/plans'
        }
      ]
    },
    {
      title: '套餐功能',
      description:
        '每个套餐可包含特定功能，在应用程序中解锁相应功能。功能在 Clerk Dashboard 中添加，代码中通过 has() 函数配合 feature 检查使用。',
      links: []
    },
    {
      title: '访问控制',
      description:
        '套餐和功能用于全应用的访问控制。服务端使用 has() 验证套餐或功能访问权限。客户端使用 <Show> 组件根据订阅状态条件渲染内容。',
      links: []
    },
    {
      title: '计费成本结构',
      description:
        'Clerk Billing 每笔交易收取 0.7% 加 Stripe 手续费。Clerk Billing 与 Stripe Billing 不同，套餐和定价通过 Clerk Dashboard 管理。',
      links: []
    },
    {
      title: '设置要求',
      description:
        '前往 Clerk Dashboard 的计费设置启用计费。可选择开发网关（测试）或自有 Stripe 账户（生产环境）。注意：开发环境创建的 Stripe 账户不能用于生产。',
      links: [
        {
          title: 'Billing Settings',
          url: 'https://dashboard.clerk.com/~/billing/settings'
        }
      ]
    },
    {
      title: 'Beta 状态',
      description:
        '计费功能目前处于 Beta 阶段，API 可能发生破坏性变更。建议固定 SDK 和 clerk-js 包版本以降低影响。',
      links: []
    }
  ]
};

export const productInfoContentZh: InfobarContent = {
  title: '产品管理',
  sections: [
    {
      title: '概览',
      description:
        '产品页面支持管理产品目录。以表格形式查看所有产品，支持排序、筛选、分页和搜索功能。点击"新增"按钮创建产品。',
      links: [
        {
          title: 'Product Management Guide',
          url: '#'
        }
      ]
    },
    {
      title: '添加产品',
      description: '点击页头"新增"按钮进入表单，填写产品名称、描述、价格、分类和上传产品图片。',
      links: [
        {
          title: 'Adding Products Documentation',
          url: '#'
        }
      ]
    },
    {
      title: '编辑产品',
      description: '点击表格中的产品行即可打开编辑表单，修改任意产品信息。提交表单后自动保存更改。',
      links: [
        {
          title: 'Editing Products Guide',
          url: '#'
        }
      ]
    },
    {
      title: '删除产品',
      description: '在表格中点击删除操作，确认后永久移除产品。删除前需要确认。',
      links: [
        {
          title: 'Product Deletion Policy',
          url: '#'
        }
      ]
    },
    {
      title: '表格功能',
      description:
        '产品表格支持：点击列头排序、使用筛选控件过滤、分页导航、搜索快速定位产品。帮助高效管理大量产品。',
      links: [
        {
          title: 'Table Features Documentation',
          url: '#'
        },
        {
          title: 'Sorting and Filtering Guide',
          url: '#'
        }
      ]
    },
    {
      title: '产品字段',
      description:
        '产品包含以下字段：名称（必填）、描述（可选）、价格（数值）、分类（组织产品）和图片上传。所有字段在创建和编辑时均可修改。',
      links: [
        {
          title: 'Product Fields Specification',
          url: '#'
        }
      ]
    }
  ]
};
