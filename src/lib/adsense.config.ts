/**
 * AdSense Configuration Helper
 * Reads env vars and provides runtime validation for ad integration.
 */

export interface AdsenseConfig {
  clientId: string;
  slotId: string;
  isEnabled: boolean;
  isConfigured: boolean;
}

function validateClientId(clientId: string | undefined): boolean {
  if (!clientId) return false;
  return clientId.startsWith("ca-pub-") && clientId.length > 10;
}

function validateSlotId(slotId: string | undefined): boolean {
  if (!slotId) return false;
  return /^\d+$/.test(slotId);
}

function getConfig(): AdsenseConfig {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";
  const slotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT || "";
  const adsEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED !== "false";

  const isClientValid = validateClientId(clientId);
  const isSlotValid = validateSlotId(slotId);
  const isConfigured = isClientValid && isSlotValid;

  // Dev warnings for missing config
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    if (!isClientValid && adsEnabled) {
      console.warn(
        "[AdSense] Missing or invalid NEXT_PUBLIC_ADSENSE_CLIENT. Expected format: ca-pub-XXXXXXXXXXXXXXXX"
      );
    }
    if (!isSlotValid && adsEnabled) {
      console.warn(
        "[AdSense] Missing or invalid NEXT_PUBLIC_ADSENSE_SLOT. Expected format: numeric string"
      );
    }
  }

  return {
    clientId,
    slotId,
    isEnabled: adsEnabled && isConfigured,
    isConfigured,
  };
}

// Export singleton config
export const adsenseConfig = getConfig();

