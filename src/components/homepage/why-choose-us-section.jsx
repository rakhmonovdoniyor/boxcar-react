import React from "react";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import PriceCheckRoundedIcon from "@mui/icons-material/PriceCheckRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

import {
  BenefitCard,
  BenefitCopy,
  BenefitGrid,
  BenefitIconWrap,
  BenefitTitle,
  SectionCopy,
  SectionHeader,
  SectionKicker,
  SectionTitle,
  SectionTitleGroup,
} from "../../style/homepagestyle/homestyle";

const iconMap = {
  financing: <CurrencyExchangeRoundedIcon fontSize="small" />,
  trusted: <VerifiedRoundedIcon fontSize="small" />,
  pricing: <PriceCheckRoundedIcon fontSize="small" />,
  service: <EngineeringRoundedIcon fontSize="small" />,
};

const WhyChooseUsSection = ({ items }) => {
  return (
    <section>
      <SectionHeader>
        <SectionTitleGroup>
          <SectionKicker>Why Choose Us</SectionKicker>
          <SectionTitle>Why Drivers Keep Coming Back To BoxCar</SectionTitle>
          <SectionCopy>
            This block follows the benefits section from the PDF and gives the
            homepage a fuller landing-page rhythm.
          </SectionCopy>
        </SectionTitleGroup>
      </SectionHeader>

      <BenefitGrid>
        {items.map((item) => (
          <BenefitCard key={item.title}>
            <BenefitIconWrap>{iconMap[item.icon]}</BenefitIconWrap>
            <BenefitTitle>{item.title}</BenefitTitle>
            <BenefitCopy>{item.copy}</BenefitCopy>
          </BenefitCard>
        ))}
      </BenefitGrid>
    </section>
  );
};

export default WhyChooseUsSection;
