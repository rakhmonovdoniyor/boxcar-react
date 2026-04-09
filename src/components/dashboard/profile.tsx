import React, { useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import { dashboardProfile } from "../../data/dashboardData";
import {
  DashboardActionRow,
  DashboardCompactUpload,
  DashboardCompactUploadRow,
  DashboardField,
  DashboardFormGrid,
  DashboardMapPlaceholder,
  DashboardPageCopy,
  DashboardPageIntro,
  DashboardPageTitle,
  DashboardPrimaryButton,
  DashboardProfileShell,
  DashboardSectionCopy,
  DashboardSectionTitle,
  DashboardSurface,
  DashboardThreeColumnGrid,
  DashboardUploadMeta,
  DashboardWideField,
} from "../../style/dashboard/dashboardStyle";

const DashboardProfilePage = () => {
  const [saved, setSaved] = useState(false);

  return (
    <DashboardSurface>
      <DashboardPageIntro>
        <DashboardPageTitle>Profile</DashboardPageTitle>
        <DashboardPageCopy>Lorem ipsum dolor sit amet, consectetur.</DashboardPageCopy>
      </DashboardPageIntro>

      <DashboardProfileShell>
        <div style={{ display: "grid", gap: "12px" }}>
          <DashboardSectionTitle>Avatar</DashboardSectionTitle>
          <DashboardCompactUploadRow>
            <DashboardCompactUpload>
              <DashboardUploadMeta>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(64, 95, 242, 0.12)",
                    color: "#405ff2",
                    fontSize: "18px",
                    fontWeight: 800,
                  }}
                >
                  AT
                </div>
                <div>Current Avatar</div>
              </DashboardUploadMeta>
            </DashboardCompactUpload>
            <DashboardCompactUpload $dashed>
              <DashboardUploadMeta>
                <CloudUploadOutlinedIcon fontSize="small" />
                <div>Upload</div>
              </DashboardUploadMeta>
            </DashboardCompactUpload>
          </DashboardCompactUploadRow>
          <DashboardSectionCopy>
            Max file size is 1MB. Minimum dimension: 330 x 300. Suitable files are
            .jpg and .png.
          </DashboardSectionCopy>
        </div>

        <DashboardThreeColumnGrid>
          <DashboardField>
            <span>First Name</span>
            <input defaultValue={dashboardProfile.firstName} type="text" />
          </DashboardField>
          <DashboardField>
            <span>Last Name</span>
            <input defaultValue={dashboardProfile.lastName} type="text" />
          </DashboardField>
          <DashboardField>
            <span>Email</span>
            <input defaultValue={dashboardProfile.email} type="email" />
          </DashboardField>
        </DashboardThreeColumnGrid>

        <DashboardThreeColumnGrid>
          <DashboardField>
            <span>Phone</span>
            <input defaultValue={dashboardProfile.phone} type="tel" />
          </DashboardField>
          <DashboardField>
            <span>Whatsapp</span>
            <input defaultValue={dashboardProfile.whatsapp} type="tel" />
          </DashboardField>
          <DashboardField>
            <span>Website</span>
            <input defaultValue={dashboardProfile.website} type="url" />
          </DashboardField>
        </DashboardThreeColumnGrid>

        <div style={{ display: "grid", gap: "12px" }}>
          <DashboardSectionTitle>Photos</DashboardSectionTitle>
          <DashboardCompactUploadRow>
            <DashboardCompactUpload>
              <DashboardUploadMeta>
                <div>Gallery 01</div>
              </DashboardUploadMeta>
            </DashboardCompactUpload>
            <DashboardCompactUpload>
              <DashboardUploadMeta>
                <div>Gallery 02</div>
              </DashboardUploadMeta>
            </DashboardCompactUpload>
            <DashboardCompactUpload>
              <DashboardUploadMeta>
                <div>Gallery 03</div>
              </DashboardUploadMeta>
            </DashboardCompactUpload>
            <DashboardCompactUpload $dashed>
              <DashboardUploadMeta>
                <CloudUploadOutlinedIcon fontSize="small" />
                <div>Upload</div>
              </DashboardUploadMeta>
            </DashboardCompactUpload>
          </DashboardCompactUploadRow>
          <DashboardSectionCopy>
            Max file size is 1MB. Minimum dimension: 330 x 300. Suitable files are
            .jpg and .png.
          </DashboardSectionCopy>
        </div>

        <DashboardFormGrid>
          <DashboardWideField>
            <span>Friendly Address</span>
            <input defaultValue={dashboardProfile.address} type="text" />
          </DashboardWideField>
          <DashboardWideField>
            <span>Map Location</span>
            <input defaultValue={dashboardProfile.mapLocation} type="text" />
          </DashboardWideField>
        </DashboardFormGrid>

        <DashboardMapPlaceholder />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          <DashboardField>
            <span>Latitude</span>
            <input defaultValue={dashboardProfile.latitude} type="text" />
          </DashboardField>
          <DashboardField>
            <span>Longitude</span>
            <input defaultValue={dashboardProfile.longitude} type="text" />
          </DashboardField>
        </div>

        <DashboardField>
          <span>Description</span>
          <textarea defaultValue={dashboardProfile.description} />
        </DashboardField>

        <DashboardActionRow>
          {saved ? (
            <DashboardSectionCopy style={{ marginRight: "auto" }}>
              Profile settings have been saved locally for this demo.
            </DashboardSectionCopy>
          ) : null}
          <DashboardPrimaryButton type="button" onClick={() => setSaved(true)}>
            <SaveRoundedIcon fontSize="small" />
            Save Profile
          </DashboardPrimaryButton>
        </DashboardActionRow>
      </DashboardProfileShell>
    </DashboardSurface>
  );
};

export default DashboardProfilePage;
