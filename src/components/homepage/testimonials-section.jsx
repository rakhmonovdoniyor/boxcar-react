import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import {
  RatingMeta,
  SectionCopy,
  SectionHeader,
  SectionTitle,
  SectionTitleGroup,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialContent,
  TestimonialQuote,
  TestimonialRole,
  TestimonialWrap,
  TestimonialName,
} from "../../style/homepagestyle/homestyle";

const TestimonialsSection = ({ testimonial }) => {
  return (
    <section>
      <SectionHeader>
        <SectionTitleGroup>
          <SectionTitle>What our customers say</SectionTitle>
          <SectionCopy>
            A single highlighted testimonial, following the lower content block
            from page 1.
          </SectionCopy>
        </SectionTitleGroup>

        <RatingMeta>
          Rated {testimonial.rating} / 5 based on {testimonial.reviewCount}
        </RatingMeta>
      </SectionHeader>

      <TestimonialWrap>
        <TestimonialCard>
          <TestimonialAvatar
            alt={testimonial.name}
            src={testimonial.avatar}
          />

          <TestimonialContent>
            <RatingMeta>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarRoundedIcon fontSize="small" key={index} />
              ))}
            </RatingMeta>
            <TestimonialName>{testimonial.name}</TestimonialName>
            <TestimonialRole>{testimonial.role}</TestimonialRole>
            <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
          </TestimonialContent>
        </TestimonialCard>
      </TestimonialWrap>
    </section>
  );
};

export default TestimonialsSection;
