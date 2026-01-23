export interface ExperienceProps {
    id: string;
    title: string;
    company: string;
    label: string;
    period: string;
    duration?: string;
    details: string[];
}
export interface SocialLinksType {
    href: string;
    Icon: any
}
export interface SkillType {
    img: string;
    imgDark?: string;
    title: string;
}