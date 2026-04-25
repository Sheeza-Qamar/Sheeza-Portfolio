"use client";
import { EXPERIENCE_DATA } from "@/config/constants";
import { AnimatedText } from "./AnimatedText";
import ExperienceDetails from "./ExperienceDetails";

export const Experience = () => {
    return (
        <section id="experience" className="mt-28 max-w-[768px] mx-auto px-4">
            <AnimatedText
                text="Experience"
                className="lg:!text-8xl md:!text-7xl !text-6xl mb-16"
            />
            <div className="w-full mt-10 flex flex-col gap-10">
                {EXPERIENCE_DATA.map((work) => (
                    <div
                        key={work.id}
                        className="relative border-l-2 dark:border-[#3d3d3d] border-gray-300 pl-6 md:pl-8 pb-2"
                    >
                        <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full dark:bg-white bg-black" />
                        <ExperienceDetails {...work} />
                    </div>
                ))}
            </div>
        </section>
    );
};
