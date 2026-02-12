// src/components/HamburgerMenuDrawer.tsx
/**
 * Mobile Menu Drawer Template
 *
 * Manages open/close state for mobile menu with checkbox-based hamburger button.
 */

import { useState } from "react";
import Modal from "@/components/Modal";
import MobileMenuItem from "@/components/LoopComponents/Menu/MobileMenuItem";
import HamburgerButton from "./HamburgerButton";
import Button from "@/components/Button/Button";
import { ctaData, siteData } from "@/content/siteData";

interface MobileMenuDrawerProps {
  items: any[];
  className?: string;
  hamburgerTransform?: boolean;
  closeButton?: boolean;
}

export default function MobileMenuDrawer({
  items,
  className = "",
  hamburgerTransform = true,
  closeButton = true,
}: MobileMenuDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Checkbox-based Hamburger Button */}
      <HamburgerButton
        isOpen={isOpen}
        onChange={setIsOpen}
        hamburgerTransform={hamburgerTransform}
        ariaLabel={isOpen ? "Close menu" : "Open menu"}
        id="mobile-menu-toggle"
      />

      {/* Mobile Menu Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="center"
        className="w-full max-w-full h-full bg-bg p-0 rounded-none"
        overlayClass="bg-black/50"
        closeButton={closeButton}
        ariaLabel="Mobile navigation menu"
        ssr={false}
      >
        <nav
          className={`${className} h-full overflow-y-auto p-6 pt-12`}
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {items.map((item) => (
              <MobileMenuItem
                key={item.slug || item.id}
                {...item}
                onNavigate={handleNavigate}
              />
            ))}
          </ul>

          {/* Login Button */}
          <div className="mt-8">
            <Button
              href={siteData.whopLoginLink}
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={handleNavigate}
            >
              Login
            </Button>
            <Button
              href={ctaData.link}
              variant="primary"
              size="lg"
              className="w-full mt-3"
              onClick={handleNavigate}
            >
              {ctaData.text}
            </Button>
          </div>
        </nav>
      </Modal>
    </>
  );
}
