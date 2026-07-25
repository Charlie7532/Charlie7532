// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Clients } from './collections/Clients'
import { Institutes } from './collections/Institutes'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'
import { Technologies } from './collections/Technologies'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { SiteSettings } from './globals/SiteSettings'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import brevoAdapter from './utilities/brevoAdapter'
import { UserAvatar } from './collections/Users/avatar'
import { dashboard } from './widgets'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    dashboard,
    avatar: { Component: '@/components/Admin/PayloadAdminAvatar', },
    components: {
      providers: ['@/components/Admin/AdminHeroUIProvider'],
      beforeNavLinks: ['@/components/SidebarHomeButton'],
      // beforeLogin: ['@/components/BeforeLogin',],
      // beforeDashboard: ['@/components/BeforeDashboard',],
      logout: { Button: '@/components/Admin/EmptyLogoutButton', },
      graphics: {
        Logo: '@/components/Logo/AppLogoExpanded',
        Icon: '@/components/Logo/AppLogoCompact ',
      },
    },
    meta: {
      titleSuffix: '- Main 12 Admin Panel',
      icons: [{ rel: 'icon', url: '/admin-favicon.ico' }],
    },
    importMap: { baseDir: path.resolve(dirname), },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  email: brevoAdapter(),
  editor: defaultLexical,
  db: vercelPostgresAdapter({ pool: { connectionString: process.env.DATABASE_URL || '', }, }),
  collections: [Pages, Posts, Projects, Media, Categories, Clients, Institutes, Technologies, Users, UserAvatar],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, SiteSettings],
  plugins,
  sharp,
  secret: process.env.PAYLOAD_SECRET,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts'), },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})