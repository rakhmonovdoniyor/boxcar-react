import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import {
  BrandCard,
  BrandFallback,
  BrandGrid,
  BrandHint,
  BrandLogoWrap,
  BrandName,
  SectionAction,
  SectionCopy,
  SectionHeader,
  SectionKicker,
  SectionTitle,
  SectionTitleGroup,
} from "../../style/homepagestyle/homestyle";

const BrandsSection = ({ brands, onSelectBrand, selectedMake }) => {
  return (
    <section>
      <SectionHeader>
        <SectionTitleGroup>
          <SectionKicker>Premium Brands</SectionKicker>
          <SectionTitle>Explore Our Premium Brands</SectionTitle>
          <SectionCopy>
            Click any brand card to instantly narrow the featured inventory
            below.
          </SectionCopy>
        </SectionTitleGroup>

        <SectionAction onClick={() => onSelectBrand("Any Make")} type="button">
          Show All Brands
          <ArrowForwardRoundedIcon fontSize="small" />
        </SectionAction>
      </SectionHeader>

      <BrandGrid>
        {brands.map((brand) => (
          <BrandCard
            key={brand.name}
            $active={selectedMake === brand.name}
            onClick={() => onSelectBrand(brand.name)}
            type="button"
          >
            <BrandLogoWrap>
              {brand.logo ? (
                <img alt={`${brand.name} logo`} src={brand.logo} />
              ) : (
                <BrandFallback>{brand.monogram}</BrandFallback>
              )}
            </BrandLogoWrap>
            <BrandName>{brand.name}</BrandName>
            <BrandHint>{brand.inventory}</BrandHint>
            <BrandHint>{brand.highlight}</BrandHint>
          </BrandCard>
        ))}
      </BrandGrid>
    </section>
  );
};

export default BrandsSection;
