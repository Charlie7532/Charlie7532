import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { CTACardBlock } from '@/blocks/CTACard/Component'
import { CtaSectionBlock } from '@/blocks/CtaSection/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SignupCTA } from '@/blocks/SignupCTA/Component'
import { TwoColumnTextImage } from '@/blocks/TwoColumnTextImage/Component'
import { ProfileWithImageBlock } from '@/blocks/ProfileWithImage/Component'
import { VideoEmbedWithHeadingBlock } from '@/blocks/VideoEmbedWithHeading/Component'
import { PricingPlanGridBlock } from '@/blocks/PricingPlansGrid/Component'
import { SectionHeroWithBadgeBlock } from '@/blocks/SectionHeroWithBadge/Component'
import { ServiceCardGridBlock } from '@/blocks/ServiceCardGridBlock/Component'
import { EmbedCodeBlock } from '@/blocks/EmbedCode/Component'
import { FeatureCards } from '@/blocks/FeatureCards/Component'
import { FeatureHighlightsBlock } from '@/blocks/FeatureHighlights/Component'
import { TextSectionBlock } from '@/blocks/TextSection/Component'
import { ImageContentBlock } from '@/blocks/ImageContent/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { FAQGridBlock } from '@/blocks/FAQGrid/Component'
import { Testimonial1Block } from '@/blocks/Testimonial1/Component'
import { Testimonial3Block } from '@/blocks/Testimonial3/Component'
import { Testimonial4Block } from '@/blocks/Testimonial4/Component'
import { TestimonialGridBlock } from '@/blocks/TestimonialGrid/Component'
import { Pricing1Block } from '@/blocks/Pricing1/Component'
import { Stats1Block } from '@/blocks/Stats1/Component'
import { LogoCarouselBlock } from '@/blocks/LogoCarousel/Component'
import { IconGridBlock } from '@/blocks/IconGrid/Component'
import { TechStackBlock } from '@/blocks/TechStack/Component'


const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  ctaCard: CTACardBlock,
  ctaSection: CtaSectionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  signupCTA: SignupCTA,
  twoColumnTextImage: TwoColumnTextImage,
  profileWithImage: ProfileWithImageBlock,
  videoEmbedWithHeading: VideoEmbedWithHeadingBlock,
  pricingPlanGrid: PricingPlanGridBlock,
  sectionHeroWithBadge: SectionHeroWithBadgeBlock,
  serviceCardGrid: ServiceCardGridBlock,
  embedCode: EmbedCodeBlock,
  featureCards: FeatureCards,
  featureHighlights: FeatureHighlightsBlock,
  textSection: TextSectionBlock,
  imageContent: ImageContentBlock,
  faq: FAQBlock,
  faqGrid: FAQGridBlock,
  testimonial1: Testimonial1Block,
  testimonial3: Testimonial3Block,
  testimonial4: Testimonial4Block,
  testimonialGrid: TestimonialGridBlock,
  pricing1: Pricing1Block,
  stats1: Stats1Block,
  logoCarousel: LogoCarouselBlock,
  iconGrid: IconGridBlock,
  techStack: TechStackBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
