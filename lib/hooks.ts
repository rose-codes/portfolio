import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import type { SectionName } from "./types";

type useSectionInViewProps = {
    sectionName: SectionName;
}

export const useSectionInView = ({ sectionName, }: useSectionInViewProps) => {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection("About");
    }
    }, [inView, setActiveSection, timeOfLastClick]);
    return { ref }
}