import React, { useEffect, useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { useNavigate, useParams } from "react-router-dom";

import { useAppSession, type DashboardListingDraft } from "../auth/app-session";
import {
  dashboardAddListingSteps,
  dashboardFeatureGroups,
  dashboardListingFormDefaults,
  type DashboardListingRecord,
  dashboardSelectOptions,
} from "../../data/dashboardData";
import {
  DashboardActionRow,
  DashboardCheckboxLabel,
  DashboardChecklist,
  DashboardFeatureGrid,
  DashboardFeatureGroup,
  DashboardField,
  DashboardFormCard,
  DashboardFormGrid,
  DashboardFormHint,
  DashboardMapPlaceholder,
  DashboardPageCopy,
  DashboardPageIntro,
  DashboardPageTitle,
  DashboardPrimaryButton,
  DashboardSecondaryButton,
  DashboardSectionCopy,
  DashboardSectionTitle,
  DashboardStepPill,
  DashboardStepRow,
  DashboardSurface,
  DashboardThreeColumnGrid,
  DashboardUploadGrid,
  DashboardUploadTile,
  DashboardWideField,
} from "../../style/dashboard/dashboardStyle";

const initialFormState: DashboardListingDraft = {
  listingTitle: dashboardListingFormDefaults.listingTitle,
  condition: dashboardListingFormDefaults.condition,
  model: dashboardSelectOptions.model[1],
  category: dashboardListingFormDefaults.category,
  type: dashboardListingFormDefaults.type,
  year: dashboardSelectOptions.year[1],
  label: dashboardSelectOptions.label[1],
  make: dashboardSelectOptions.make[1],
  offerType: dashboardSelectOptions.offerType[1],
  driveType: dashboardSelectOptions.driveType[1],
  transmission: dashboardSelectOptions.transmission[1],
  fuelType: dashboardSelectOptions.fuelType[1],
  mileage: dashboardListingFormDefaults.mileage,
  cylinder: dashboardSelectOptions.cylinder[1],
  color: dashboardSelectOptions.color[1],
  door: dashboardSelectOptions.door[2],
  vin: dashboardListingFormDefaults.vin,
  description: dashboardListingFormDefaults.description,
  price: dashboardListingFormDefaults.price,
  pricePrefix: dashboardListingFormDefaults.pricePrefix,
  priceSuffix: dashboardListingFormDefaults.priceSuffix,
  priceCustom: dashboardListingFormDefaults.priceCustom,
  mapAddress: dashboardListingFormDefaults.mapAddress,
  latitude: dashboardListingFormDefaults.latitude,
  longitude: dashboardListingFormDefaults.longitude,
};

const createDraftFromListing = (listing: DashboardListingRecord): DashboardListingDraft => ({
  ...initialFormState,
  ...(listing.draft as Partial<DashboardListingDraft>),
  listingTitle: listing.title,
  model: listing.model,
  make: listing.make,
  year: listing.year,
  transmission: listing.transmission,
  fuelType: listing.fuel,
  description: listing.summary,
  price: listing.price.replace(/[^0-9.]/g, ""),
});

const DashboardAddListingPage = () => {
  const navigate = useNavigate();
  const { listingId } = useParams();
  const { addListing, getListingById, updateListing } = useAppSession();
  const isEditMode = Boolean(listingId);
  const [activeStep, setActiveStep] = useState<(typeof dashboardAddListingSteps)[number]>(
    "Car Details"
  );
  const [formState, setFormState] = useState<DashboardListingDraft>(initialFormState);
  const [feedback, setFeedback] = useState<{ message: string; tone: "error" | "info" } | null>(
    null
  );

  useEffect(() => {
    if (!listingId) {
      setFormState(initialFormState);
      return;
    }

    const matchedListing = getListingById(listingId);

    if (!matchedListing) {
      setFeedback({
        tone: "error",
        message: "Listing not found. You can create a new one instead.",
      });
      setFormState(initialFormState);
      return;
    }

    setFeedback(null);
    setFormState(createDraftFromListing(matchedListing));
  }, [getListingById, listingId]);

  const handleFieldChange = (field: keyof DashboardListingDraft, value: string) => {
    setFormState((currentValue) => ({
      ...currentValue,
      [field]: value,
    }));
  };

  const handleSaveListing = (mode: "save" | "preview") => {
    if (
      !formState.listingTitle.trim() ||
      !formState.make ||
      !formState.model ||
      !formState.price.trim()
    ) {
      setFeedback({
        tone: "error",
        message: "Listing title, make, model, and price are required before saving.",
      });
      return;
    }

    const savedListing =
      isEditMode && listingId
        ? updateListing(listingId, formState)
        : addListing(formState);
    const notice =
      mode === "preview"
        ? `${savedListing.title} was saved. Review the highlighted row in My Listings.`
        : `${savedListing.title} ${isEditMode ? "was updated." : "was added to My Listings."}`;

    navigate("/dashboard/listings", {
      state: {
        createdId: savedListing.id,
        notice,
      },
    });
  };

  return (
    <DashboardSurface>
      <DashboardPageIntro>
        <DashboardPageTitle>{isEditMode ? "Edit Listing" : "Add Listings"}</DashboardPageTitle>
        <DashboardPageCopy>Lorem ipsum dolor sit amet, consectetur.</DashboardPageCopy>
        {feedback ? (
          <DashboardSectionCopy
            style={{
              padding: "12px 14px",
              borderRadius: "14px",
              background:
                feedback.tone === "error"
                  ? "rgba(239, 68, 68, 0.08)"
                  : "rgba(64, 95, 242, 0.08)",
              color: feedback.tone === "error" ? "#b42318" : "#405ff2",
            }}
          >
            {feedback.message}
          </DashboardSectionCopy>
        ) : null}
      </DashboardPageIntro>

      <DashboardStepRow>
        {dashboardAddListingSteps.map((step) => (
          <DashboardStepPill
            key={step}
            $active={activeStep === step}
            type="button"
            onClick={() => setActiveStep(step)}
          >
            {step}
          </DashboardStepPill>
        ))}
      </DashboardStepRow>

      <DashboardFormCard>
        <DashboardSectionTitle>Car Details</DashboardSectionTitle>
        <DashboardThreeColumnGrid>
          <DashboardField>
            <span>Listing Title</span>
            <input
              type="text"
              value={formState.listingTitle}
              onChange={(event) => handleFieldChange("listingTitle", event.target.value)}
            />
          </DashboardField>
          <DashboardField>
            <span>Condition</span>
            <select
              value={formState.condition}
              onChange={(event) => handleFieldChange("condition", event.target.value)}
            >
              <option>New</option>
              <option>Used</option>
            </select>
          </DashboardField>
          <DashboardField>
            <span>Model</span>
            <select
              value={formState.model}
              onChange={(event) => handleFieldChange("model", event.target.value)}
            >
              {dashboardSelectOptions.model.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>

          <DashboardField>
            <span>Category</span>
            <input
              type="text"
              value={formState.category}
              onChange={(event) => handleFieldChange("category", event.target.value)}
            />
          </DashboardField>
          <DashboardField>
            <span>Type</span>
            <input
              type="text"
              value={formState.type}
              onChange={(event) => handleFieldChange("type", event.target.value)}
            />
          </DashboardField>
          <DashboardField>
            <span>Year</span>
            <select
              value={formState.year}
              onChange={(event) => handleFieldChange("year", event.target.value)}
            >
              {dashboardSelectOptions.year.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>

          <DashboardField>
            <span>Label</span>
            <select
              value={formState.label}
              onChange={(event) => handleFieldChange("label", event.target.value)}
            >
              {dashboardSelectOptions.label.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>
          <DashboardField>
            <span>Make</span>
            <select
              value={formState.make}
              onChange={(event) => handleFieldChange("make", event.target.value)}
            >
              {dashboardSelectOptions.make.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>
          <DashboardField>
            <span>Offer Type</span>
            <select
              value={formState.offerType}
              onChange={(event) => handleFieldChange("offerType", event.target.value)}
            >
              {dashboardSelectOptions.offerType.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>

          <DashboardField>
            <span>Drive Type</span>
            <select
              value={formState.driveType}
              onChange={(event) => handleFieldChange("driveType", event.target.value)}
            >
              {dashboardSelectOptions.driveType.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>
          <DashboardField>
            <span>Transmission</span>
            <select
              value={formState.transmission}
              onChange={(event) => handleFieldChange("transmission", event.target.value)}
            >
              {dashboardSelectOptions.transmission.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>
          <DashboardField>
            <span>Fuel Type</span>
            <select
              value={formState.fuelType}
              onChange={(event) => handleFieldChange("fuelType", event.target.value)}
            >
              {dashboardSelectOptions.fuelType.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>

          <DashboardField>
            <span>Mileage</span>
            <input
              type="text"
              value={formState.mileage}
              onChange={(event) => handleFieldChange("mileage", event.target.value)}
            />
          </DashboardField>
          <DashboardField>
            <span>Cylinder</span>
            <select
              value={formState.cylinder}
              onChange={(event) => handleFieldChange("cylinder", event.target.value)}
            >
              {dashboardSelectOptions.cylinder.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>
          <DashboardField>
            <span>Color</span>
            <select
              value={formState.color}
              onChange={(event) => handleFieldChange("color", event.target.value)}
            >
              {dashboardSelectOptions.color.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>

          <DashboardField>
            <span>Door</span>
            <select
              value={formState.door}
              onChange={(event) => handleFieldChange("door", event.target.value)}
            >
              {dashboardSelectOptions.door.slice(1).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </DashboardField>

          <DashboardWideField>
            <span>VIN</span>
            <input
              type="text"
              value={formState.vin}
              onChange={(event) => handleFieldChange("vin", event.target.value)}
            />
          </DashboardWideField>

          <DashboardWideField>
            <span>Listing Description</span>
            <textarea
              value={formState.description}
              onChange={(event) => handleFieldChange("description", event.target.value)}
            />
          </DashboardWideField>
        </DashboardThreeColumnGrid>

        <DashboardActionRow>
          <DashboardPrimaryButton type="button" onClick={() => setActiveStep("Price")}>
            Next Price
          </DashboardPrimaryButton>
        </DashboardActionRow>
      </DashboardFormCard>

      <DashboardFormCard>
        <DashboardSectionTitle>Price</DashboardSectionTitle>
        <DashboardSectionCopy>
          Price fields stay flexible so the branch can show a standard value, a prefix,
          suffix, or a custom note when needed.
        </DashboardSectionCopy>
        <DashboardFormGrid>
          <DashboardField>
            <span>Price ($)</span>
            <input
              type="text"
              value={formState.price}
              onChange={(event) => handleFieldChange("price", event.target.value)}
            />
          </DashboardField>
          <DashboardField>
            <span>Price Prefix</span>
            <input
              type="text"
              value={formState.pricePrefix}
              onChange={(event) => handleFieldChange("pricePrefix", event.target.value)}
            />
            <DashboardFormHint>Any text shown before price.</DashboardFormHint>
          </DashboardField>
          <DashboardField>
            <span>Price Suffix</span>
            <input
              type="text"
              value={formState.priceSuffix}
              onChange={(event) => handleFieldChange("priceSuffix", event.target.value)}
            />
            <DashboardFormHint>Any text shown after price.</DashboardFormHint>
          </DashboardField>
          <DashboardField>
            <span>Price Custom</span>
            <input
              type="text"
              value={formState.priceCustom}
              onChange={(event) => handleFieldChange("priceCustom", event.target.value)}
            />
            <DashboardFormHint>
              Prefix and suffix are ignored when custom text is used.
            </DashboardFormHint>
          </DashboardField>
        </DashboardFormGrid>

        <DashboardActionRow>
          <DashboardSecondaryButton
            type="button"
            onClick={() => setActiveStep("Car Details")}
          >
            Back
          </DashboardSecondaryButton>
          <DashboardPrimaryButton type="button" onClick={() => setActiveStep("Features")}>
            Next Features
          </DashboardPrimaryButton>
        </DashboardActionRow>
      </DashboardFormCard>

      <DashboardFormCard>
        <DashboardSectionTitle>Features</DashboardSectionTitle>
        <DashboardFeatureGrid>
          {dashboardFeatureGroups.map((group) => (
            <DashboardFeatureGroup key={group.title}>
              <DashboardSectionTitle>{group.title}</DashboardSectionTitle>
              <DashboardChecklist>
                {group.items.map((item) => (
                  <DashboardCheckboxLabel key={item}>
                    <input defaultChecked type="checkbox" />
                    <span>{item}</span>
                  </DashboardCheckboxLabel>
                ))}
              </DashboardChecklist>
            </DashboardFeatureGroup>
          ))}
        </DashboardFeatureGrid>

        <DashboardActionRow>
          <DashboardSecondaryButton type="button" onClick={() => setActiveStep("Price")}>
            Back
          </DashboardSecondaryButton>
          <DashboardPrimaryButton type="button" onClick={() => setActiveStep("Media")}>
            Next Media
          </DashboardPrimaryButton>
        </DashboardActionRow>
      </DashboardFormCard>

      <DashboardFormCard>
        <DashboardSectionTitle>Media</DashboardSectionTitle>
        <DashboardSectionCopy>
          Upload tiles are represented as placeholders for the current demo build. The
          layout still reflects the intended gallery and attachment density.
        </DashboardSectionCopy>
        <DashboardUploadGrid>
          <DashboardUploadTile>Image 01</DashboardUploadTile>
          <DashboardUploadTile>Image 02</DashboardUploadTile>
          <DashboardUploadTile>Image 03</DashboardUploadTile>
          <DashboardUploadTile $dashed>
            <div>
              <CloudUploadOutlinedIcon fontSize="small" />
              <div>Upload</div>
            </div>
          </DashboardUploadTile>
        </DashboardUploadGrid>
        <DashboardUploadGrid>
          <DashboardUploadTile $dashed>
            <div>
              <CloudUploadOutlinedIcon fontSize="small" />
              <div>View File 01</div>
            </div>
          </DashboardUploadTile>
          <DashboardUploadTile $dashed>
            <div>
              <CloudUploadOutlinedIcon fontSize="small" />
              <div>View File 02</div>
            </div>
          </DashboardUploadTile>
          <DashboardUploadTile $dashed>
            <div>
              <CloudUploadOutlinedIcon fontSize="small" />
              <div>View File 03</div>
            </div>
          </DashboardUploadTile>
          <DashboardUploadTile $dashed>
            <div>
              <CloudUploadOutlinedIcon fontSize="small" />
              <div>Upload Attachment</div>
            </div>
          </DashboardUploadTile>
        </DashboardUploadGrid>

        <DashboardActionRow>
          <DashboardSecondaryButton type="button" onClick={() => setActiveStep("Features")}>
            Back
          </DashboardSecondaryButton>
          <DashboardPrimaryButton type="button" onClick={() => setActiveStep("Location")}>
            Next Location
          </DashboardPrimaryButton>
        </DashboardActionRow>
      </DashboardFormCard>

      <DashboardFormCard>
        <DashboardSectionTitle>Location</DashboardSectionTitle>
        <DashboardFormGrid>
          <DashboardWideField>
            <span>Map Address</span>
            <input
              type="text"
              value={formState.mapAddress}
              onChange={(event) => handleFieldChange("mapAddress", event.target.value)}
            />
          </DashboardWideField>
          <DashboardField>
            <span>Latitude</span>
            <input
              type="text"
              value={formState.latitude}
              onChange={(event) => handleFieldChange("latitude", event.target.value)}
            />
          </DashboardField>
          <DashboardField>
            <span>Longitude</span>
            <input
              type="text"
              value={formState.longitude}
              onChange={(event) => handleFieldChange("longitude", event.target.value)}
            />
          </DashboardField>
        </DashboardFormGrid>

        <DashboardMapPlaceholder />

        <DashboardActionRow>
          <DashboardSecondaryButton type="button" onClick={() => setActiveStep("Media")}>
            Back
          </DashboardSecondaryButton>
          <DashboardPrimaryButton type="button" onClick={() => handleSaveListing("save")}>
            <MyLocationRoundedIcon fontSize="small" />
            {isEditMode ? "Update Listing" : "Save Listing"}
          </DashboardPrimaryButton>
          <DashboardPrimaryButton type="button" onClick={() => handleSaveListing("preview")}>
            <SaveRoundedIcon fontSize="small" />
            Save & Preview
          </DashboardPrimaryButton>
        </DashboardActionRow>
      </DashboardFormCard>
    </DashboardSurface>
  );
};

export default DashboardAddListingPage;
