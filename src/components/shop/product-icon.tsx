import React from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import TireRepairOutlinedIcon from "@mui/icons-material/TireRepairOutlined";

import type { ShopProductIcon } from "../../data/shopData";

interface ShopProductIconGraphicProps {
  icon: ShopProductIcon;
  size?: number;
}

const ShopProductIconGraphic = ({
  icon,
  size = 68,
}: ShopProductIconGraphicProps) => {
  const sx = { fontSize: size };

  if (icon === "battery") {
    return <BatteryChargingFullOutlinedIcon sx={sx} />;
  }

  if (icon === "brake") {
    return <BuildCircleOutlinedIcon sx={sx} />;
  }

  if (icon === "engine") {
    return <PrecisionManufacturingOutlinedIcon sx={sx} />;
  }

  if (icon === "interior") {
    return <AutoFixHighOutlinedIcon sx={sx} />;
  }

  if (icon === "cooling") {
    return <AcUnitOutlinedIcon sx={sx} />;
  }

  return <TireRepairOutlinedIcon sx={sx} />;
};

export default ShopProductIconGraphic;
