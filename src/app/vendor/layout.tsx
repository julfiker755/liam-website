import VendorNav from "@/components/shared/vendor-nav";
import { childrenProps } from "@/types";

export default function VendorLayout({ children }: childrenProps) {
  return (
    <>
      <VendorNav />
      {children}
    </>
  );
}
