import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";

import {
  CtaCard,
  CtaCopy,
  CtaGrid,
  CtaIconWrap,
  CtaPrimaryAction,
  CtaTitle,
} from "../../style/homepagestyle/homestyle";

const iconMap = {
  car: <DirectionsCarFilledRoundedIcon fontSize="small" />,
  sell: <SellRoundedIcon fontSize="small" />,
};

const CtaGridSection = ({ panels }) => {
  return (
    <section>
      <CtaGrid>
        {panels.map((panel) => (
          <CtaCard $tone={panel.tone} key={panel.title}>
            <div>
              <CtaTitle>{panel.title}</CtaTitle>
              <CtaCopy>{panel.copy}</CtaCopy>
              <CtaPrimaryAction type="button">
                {panel.cta}
                <ArrowForwardRoundedIcon fontSize="small" />
              </CtaPrimaryAction>
            </div>
            <CtaIconWrap $tone={panel.tone}>{iconMap[panel.icon]}</CtaIconWrap>
          </CtaCard>
        ))}
      </CtaGrid>
    </section>
  );
};

export default CtaGridSection;
