import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import {
  PromoArtwork,
  PromoBullet,
  PromoBulletList,
  PromoCard,
  PromoContent,
  PromoDescription,
  PromoPrimaryAction,
  PromoSection,
  PromoStatsGrid,
  PromoStatCard,
  PromoStatLabel,
  PromoStatValue,
  PromoTitle,
  SectionKicker,
} from "../../style/homepagestyle/homestyle";

const SellSection = ({ offer, stats }) => {
  return (
    <PromoSection>
      <PromoCard>
        <PromoArtwork aria-hidden="true" />

        <PromoContent>
          <SectionKicker>{offer.kicker}</SectionKicker>
          <PromoTitle>
            {offer.title} <span>{offer.emphasis}</span>
          </PromoTitle>
          <PromoDescription>{offer.copy}</PromoDescription>

          <PromoBulletList>
            {offer.bullets.map((bullet) => (
              <PromoBullet key={bullet}>{bullet}</PromoBullet>
            ))}
          </PromoBulletList>

            <PromoPrimaryAction type="button">
              {offer.cta}
              <ArrowForwardRoundedIcon fontSize="small" />
            </PromoPrimaryAction>
          </PromoContent>
      </PromoCard>

      <PromoStatsGrid>
        {stats.map((stat) => (
          <PromoStatCard key={stat.label}>
            <PromoStatValue>{stat.value}</PromoStatValue>
            <PromoStatLabel>{stat.label}</PromoStatLabel>
          </PromoStatCard>
        ))}
      </PromoStatsGrid>
    </PromoSection>
  );
};

export default SellSection;
