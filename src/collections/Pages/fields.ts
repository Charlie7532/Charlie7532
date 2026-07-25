import { Field, slugField } from 'payload'

import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { CTACard } from '../../blocks/CTACard/config'
import { CtaSection } from '../../blocks/CtaSection/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { SignupCTABlock } from '../../blocks/SignupCTA/config'
import { TwoColumnTextImageBlock } from '../../blocks/TwoColumnTextImage/config'
import { hero } from '@/heros/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { ProfileWithImage } from '@/blocks/ProfileWithImage/config'
import { VideoEmbedWithHeading } from '@/blocks/VideoEmbedWithHeading/config'
import { PricingPlansGrid } from '@/blocks/PricingPlansGrid/config'
import { SectionHeroWithBadge } from '@/blocks/SectionHeroWithBadge/config'
import { ServiceCardGridBlock } from '@/blocks/ServiceCardGridBlock/config'
import { EmbedCode } from '@/blocks/EmbedCode/config'
import { FeatureCardsBlock } from '@/blocks/FeatureCards/config'
import { FeatureHighlightsBlock } from '@/blocks/FeatureHighlights/config'
import { TextSection } from '@/blocks/TextSection/config'
import { ImageContentBlock } from '@/blocks/ImageContent/config'
import { FAQ } from '@/blocks/FAQ/config'
import { FAQGrid } from '@/blocks/FAQGrid/config'
import { Testimonial1 } from '@/blocks/Testimonial1/config'
import { Testimonial3 } from '@/blocks/Testimonial3/config'
import { Testimonial4 } from '@/blocks/Testimonial4/config'
import { TestimonialGrid } from '@/blocks/TestimonialGrid/config'
import { Pricing1 } from '@/blocks/Pricing1/config'
import { Stats1 } from '@/blocks/Stats1/config'
import { LogoCarousel } from '@/blocks/LogoCarousel/config'

export const pagesFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
    localized: true,
  },
  {
    type: 'tabs',
    tabs: [
      {
        fields: [hero],
        label: 'Hero',
        localized: true,
      },
      {
        fields: [
          {
            name: 'layout',
            type: 'blocks',
            blocks: [
              CallToAction,
              Content,
              CTACard,
              CtaSection,
              MediaBlock,
              Archive,
              FormBlock,
              SignupCTABlock,
              TwoColumnTextImageBlock,
              ProfileWithImage,
              VideoEmbedWithHeading,
              PricingPlansGrid,
              SectionHeroWithBadge,
              ServiceCardGridBlock,
              EmbedCode,
              FeatureCardsBlock,
              FeatureHighlightsBlock,
              TextSection,
              ImageContentBlock,
              FAQ,
              FAQGrid,
              Testimonial1,
              Testimonial3,
              Testimonial4,
              TestimonialGrid,
              Pricing1,
              Stats1,
              LogoCarousel,
            ],
            required: true,
            admin: {
              initCollapsed: true,
            },
          },
        ],
        label: 'Content',
        localized: true,
      },
      {
        name: 'meta',
        label: 'SEO',
        localized: true,
        fields: [
          OverviewField({
            titlePath: 'meta.title',
            descriptionPath: 'meta.description',
            imagePath: 'meta.image',
          }),
          MetaTitleField({
            hasGenerateFn: true,
          }),
          MetaImageField({
            relationTo: 'media',
          }),
          MetaDescriptionField({}),
          PreviewField({
            hasGenerateFn: true,
            titlePath: 'meta.title',
            descriptionPath: 'meta.description',
          }),
        ],
      },
    ],
  },
  {
    name: 'publishedAt',
    type: 'date',
    admin: {
      position: 'sidebar',
    },
  },
  slugField(),
]
