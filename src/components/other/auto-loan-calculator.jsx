import React, { useMemo, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import { inventoryListings } from "../../data/inventoryData";
import {
  loanCalculatorPage,
  loanCalculatorPresets,
} from "../../data/otherData";
import {
  ContactField,
  OtherActionRow,
  OtherBreadcrumbCurrent,
  OtherBreadcrumbLink,
  OtherBreadcrumbs,
  OtherHeroCopy,
  OtherHeroShell,
  OtherHeroTitle,
  OtherMain,
  OtherPageShell,
  OtherPrimaryAction,
  OtherSecondaryAction,
  OtherSection,
  OtherSectionCopy,
  OtherSectionKicker,
  OtherSurface,
  UtilityCard,
  UtilityCardTitle,
  UtilityForm,
  UtilityFormGrid,
  UtilityGrid,
  UtilityResultCard,
  UtilityResultGrid,
  UtilityResultLabel,
  UtilityResultValue,
} from "../../style/other/otherStyle";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const calculateMonthlyPayment = (principal, annualRate, termMonths) => {
  if (!principal || !termMonths) {
    return 0;
  }

  const monthlyRate = annualRate / 100 / 12;

  if (monthlyRate === 0) {
    return principal / termMonths;
  }

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)
  );
};

const AutoLoanCalculatorPage = () => {
  const defaultVehicle = inventoryListings[0];
  const [vehicleId, setVehicleId] = useState(defaultVehicle.id);
  const [downPayment, setDownPayment] = useState(
    Math.round(defaultVehicle.price * loanCalculatorPresets.downPaymentRate)
  );
  const [interestRate, setInterestRate] = useState(loanCalculatorPresets.interestRate);
  const [termMonths, setTermMonths] = useState(loanCalculatorPresets.termMonths);

  const selectedVehicle =
    inventoryListings.find((vehicle) => vehicle.id === vehicleId) ?? defaultVehicle;
  const financedAmount = Math.max(selectedVehicle.price - Number(downPayment), 0);
  const monthlyPayment = useMemo(
    () =>
      calculateMonthlyPayment(
        financedAmount,
        Number(interestRate),
        Number(termMonths)
      ),
    [financedAmount, interestRate, termMonths]
  );
  const totalPayment = monthlyPayment * Number(termMonths || 0);
  const totalInterest = Math.max(totalPayment - financedAmount, 0);

  return (
    <OtherPageShell>
      <OtherHeroShell>
        <SiteHeader navLinks={navLinks} />
      </OtherHeroShell>

      <OtherMain>
        <OtherSurface>
          <OtherBreadcrumbs>
            <OtherBreadcrumbLink to="/">Home</OtherBreadcrumbLink>
            <span>/</span>
            <OtherBreadcrumbCurrent>{loanCalculatorPage.breadcrumb}</OtherBreadcrumbCurrent>
            <span>/</span>
            <OtherBreadcrumbCurrent>Auto Loan Calculator</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <div style={{ display: "grid", gap: "14px", marginBottom: "24px" }}>
            <OtherSectionKicker>Planning Tool</OtherSectionKicker>
            <OtherHeroTitle>{loanCalculatorPage.title}</OtherHeroTitle>
            <OtherHeroCopy>{loanCalculatorPage.intro}</OtherHeroCopy>
          </div>

          <OtherSection>
            <UtilityGrid>
              <UtilityCard>
                <UtilityCardTitle>Estimate Your Monthly Payment</UtilityCardTitle>
                <OtherSectionCopy>
                  Change the vehicle, down payment, interest rate, or term length. The
                  output updates immediately so the user can compare affordability before
                  opening a dealer conversation.
                </OtherSectionCopy>

                <UtilityForm onSubmit={(event) => event.preventDefault()}>
                  <ContactField>
                    <span>Vehicle</span>
                    <select
                      value={vehicleId}
                      onChange={(event) => {
                        const nextVehicle =
                          inventoryListings.find(
                            (vehicle) => vehicle.id === event.target.value
                          ) ?? defaultVehicle;
                        setVehicleId(nextVehicle.id);
                        setDownPayment(
                          Math.round(
                            nextVehicle.price * loanCalculatorPresets.downPaymentRate
                          )
                        );
                      }}
                    >
                      {inventoryListings.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {vehicle.brand} {vehicle.model}
                        </option>
                      ))}
                    </select>
                  </ContactField>

                  <UtilityFormGrid>
                    <ContactField>
                      <span>Down Payment</span>
                      <input
                        min="0"
                        type="number"
                        value={downPayment}
                        onChange={(event) => setDownPayment(Number(event.target.value))}
                      />
                    </ContactField>

                    <ContactField>
                      <span>Interest Rate (%)</span>
                      <input
                        min="0"
                        step="0.1"
                        type="number"
                        value={interestRate}
                        onChange={(event) => setInterestRate(Number(event.target.value))}
                      />
                    </ContactField>
                  </UtilityFormGrid>

                  <ContactField>
                    <span>Loan Term (Months)</span>
                    <select
                      value={termMonths}
                      onChange={(event) => setTermMonths(Number(event.target.value))}
                    >
                      {[24, 36, 48, 60, 72, 84].map((term) => (
                        <option key={term} value={term}>
                          {term} months
                        </option>
                      ))}
                    </select>
                  </ContactField>
                </UtilityForm>
              </UtilityCard>

              <UtilityCard>
                <UtilityCardTitle>Estimate Summary</UtilityCardTitle>
                <OtherSectionCopy>
                  {selectedVehicle.brand} {selectedVehicle.model} currently sits at{" "}
                  {formatCurrency(selectedVehicle.price)} with an indicative monthly note of{" "}
                  {selectedVehicle.monthlyPrice} in the listing data.
                </OtherSectionCopy>

                <UtilityResultGrid>
                  <UtilityResultCard>
                    <UtilityResultLabel>Vehicle Price</UtilityResultLabel>
                    <UtilityResultValue>{formatCurrency(selectedVehicle.price)}</UtilityResultValue>
                  </UtilityResultCard>
                  <UtilityResultCard>
                    <UtilityResultLabel>Financed Amount</UtilityResultLabel>
                    <UtilityResultValue>{formatCurrency(financedAmount)}</UtilityResultValue>
                  </UtilityResultCard>
                  <UtilityResultCard>
                    <UtilityResultLabel>Monthly Payment</UtilityResultLabel>
                    <UtilityResultValue>{formatCurrency(monthlyPayment)}</UtilityResultValue>
                  </UtilityResultCard>
                  <UtilityResultCard>
                    <UtilityResultLabel>Total Interest</UtilityResultLabel>
                    <UtilityResultValue>{formatCurrency(totalInterest)}</UtilityResultValue>
                  </UtilityResultCard>
                </UtilityResultGrid>

                <OtherActionRow>
                  <OtherPrimaryAction to={`/inventory/${selectedVehicle.id}`}>
                    Open Vehicle Page
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                  <OtherSecondaryAction to="/contact">Talk To Finance Team</OtherSecondaryAction>
                </OtherActionRow>
              </UtilityCard>
            </UtilityGrid>
          </OtherSection>

          <OtherSection>
            <UtilityCard>
              <UtilityCardTitle>Why this tool is on a public page</UtilityCardTitle>
              <OtherSectionCopy>
                Planning tools should reduce hesitation. Instead of burying finance behind a
                form wall, this page gives buyers a quick way to test assumptions and then
                continue to inventory or contact when the numbers feel right.
              </OtherSectionCopy>
              <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
                <CalculateOutlinedIcon fontSize="small" />
                <strong>{formatCurrency(monthlyPayment)} estimated monthly payment</strong>
              </div>
            </UtilityCard>
          </OtherSection>
        </OtherSurface>
      </OtherMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </OtherPageShell>
  );
};

export default AutoLoanCalculatorPage;
