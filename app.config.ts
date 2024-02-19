export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Aipify Docs',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/chihebnabil/docs.aipify.co',
      target: '_blank',
      'aria-label': 'Docs on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-jsonwebtokens',
      to: 'https://remoteskills.io/',
      target: '_blank',
      'aria-label': 'Website'
    }, {
      icon: 'i-simple-icons-linkedin',
      to: 'https://www.linkedin.com/company/80942171/admin/feed/posts/',
      target: '_blank',
      'aria-label': 'The Company on LinkedIn'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/chihebnabil/docs.aipify.co',
      target: '_blank',
      'aria-label': 'Docs on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank',
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank',
      }]
    }
  }
})
