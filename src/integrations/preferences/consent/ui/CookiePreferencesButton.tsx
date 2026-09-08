// src/integrations/preferences/consent/ui/CookiePreferencesButton.tsx
import { memo } from "react";
import Button from "@/components/Button/Button";

function CookiePreferencesButton() {
  return (
    <Button
      variant="link"
      size="md"
      onClick={() => (window as any).Zest?.showSettings?.()}
      aria-label="Manage cookie preferences"
      rightIcon="lucide:settings"
    >
      Your Privacy Choices
    </Button>
  );
}

export default memo(CookiePreferencesButton);
