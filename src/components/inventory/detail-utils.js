export const buildDirectionsUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const buildWhatsAppUrl = (phone, vehicleLabel) => {
  const digits = phone.replace(/\D/g, "");
  const message = `Hello, I want to know more about ${vehicleLabel}.`;

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

export const buildVinReportUrl = (vehicle) => {
  const vin =
    vehicle.overview.find((item) => item.label === "VIN")?.value ??
    `${vehicle.brand} ${vehicle.model}`;

  return `https://www.google.com/search?q=${encodeURIComponent(`${vin} VIN report`)}`;
};

export const buildBrochureUrl = (vehicle) =>
  `https://www.google.com/search?q=${encodeURIComponent(
    `${vehicle.brand} ${vehicle.model} brochure pdf`
  )}`;

export const scrollToMessageForm = () => {
  document.getElementById("message")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const copyCurrentPageUrl = async () => {
  if (typeof window === "undefined") {
    return false;
  }

  const currentUrl = window.location.href;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(currentUrl);
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};
