import { generatePreviewPath } from './generatePreviewPath'
import type { GeneratePreviewURL, LivePreviewConfig } from 'payload'

type PreviewCollection = Parameters<typeof generatePreviewPath>[0]['collection']

export function createLivePreview(collection: PreviewCollection): LivePreviewConfig {
  return {
    url: ({ data, req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection,
        req,
      }),
  }
}

export function createPreviewURL(collection: PreviewCollection): GeneratePreviewURL {
  return (data: any, { req }) =>
    generatePreviewPath({
      slug: typeof data?.slug === 'string' ? data.slug : '',
      collection,
      req,
    })
}
