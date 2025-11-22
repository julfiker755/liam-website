import Navbar from "@/components/shared/Navbar";
import { childrenProps } from "@/types";

export default function LandingPageLayout({ children }: childrenProps) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
