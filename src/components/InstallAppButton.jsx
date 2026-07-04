import { useEffect, useState } from "react";
import { onInstallAvailabilityChange, promptInstall } from "@/lib/pwa";

export default function InstallAppButton({ className = "" }) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const off = onInstallAvailabilityChange(setAvailable);
    return () => off();
  }, []);

  if (!available) return null;

  return (
    <button
      type="button"
      className={`install-app-btn ${className}`}
      onClick={async () => {
        await promptInstall();
      }}
      aria-label="Instalar app"
    >
      📲 Instalar app
    </button>
  );
}
