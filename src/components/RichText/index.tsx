import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { TwoColumnTextImage } from '@/blocks/TwoColumnTextImage/Component'
import { IconGridBlock } from '@/blocks/IconGrid/Component'
import { TechStackBlock } from '@/blocks/TechStack/Component'
import { ImageContentBlock } from '@/blocks/ImageContent/Component'
import { TextSectionBlock } from '@/blocks/TextSection/Component'
import { EmbedCodeBlock } from '@/blocks/EmbedCode/Component'
import { ImageGalleryBlock } from '@/blocks/ImageGallery/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { cn } from '@/utilities/ui'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const baseBlockConverters = {
  banner: ({ node }: { node: SerializedBlockNode<any> }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
  mediaBlock: ({ node }: { node: SerializedBlockNode<any> }) => (
    <MediaBlock
      className="col-start-1 col-span-3"
      imgClassName="m-0"
      {...node.fields}
      captionClassName="mx-auto max-w-[48rem]"
      enableGutter={false}
      disableInnerContainer={true}
    />
  ),
  code: ({ node }: { node: SerializedBlockNode<any> }) => <CodeBlock className="col-start-2" {...node.fields} />,
  cta: ({ node }: { node: SerializedBlockNode<any> }) => <CallToActionBlock {...node.fields} />,
  twoColumnTextImage: ({ node }: { node: SerializedBlockNode<any> }) => <TwoColumnTextImage {...node.fields} />,
  iconGrid: ({ node }: { node: SerializedBlockNode<any> }) => <IconGridBlock {...node.fields} />,
  techStack: ({ node }: { node: SerializedBlockNode<any> }) => <TechStackBlock {...node.fields} />,
  imageContent: ({ node }: { node: SerializedBlockNode<any> }) => <ImageContentBlock {...node.fields} />,
  textSection: ({ node }: { node: SerializedBlockNode<any> }) => <TextSectionBlock {...node.fields} />,
  embedCode: ({ node }: { node: SerializedBlockNode<any> }) => <EmbedCodeBlock {...node.fields} />,
  imageGallery: ({ node }: { node: SerializedBlockNode<any> }) => <ImageGalleryBlock {...node.fields} />,
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: baseBlockConverters,
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
  extraBlockConverters?: Record<string, (props: { node: SerializedBlockNode<any> }) => React.ReactNode>
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, extraBlockConverters, ...rest } = props

  const converters: JSXConvertersFunction<NodeTypes> = extraBlockConverters
    ? ({ defaultConverters }) => ({
      ...defaultConverters,
      ...LinkJSXConverter({ internalDocToHref }),
      blocks: { ...baseBlockConverters, ...extraBlockConverters },
    })
    : jsxConverters

  return (
    <ConvertRichText
      converters={converters}
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
