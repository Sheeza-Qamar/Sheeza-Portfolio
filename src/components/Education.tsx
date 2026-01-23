"use client";
import { EDUCATION_DATA } from "@/config/constants";
import { AnimatedText } from "@/components";

export const Education = () => {
    return (
        <div id="education" className="mt-28">
            <AnimatedText
                text="Education"
                className="lg:!text-8xl md:!text-7xl !text-6xl mb-16"
            />
            <div className="flex flex-col items-center justify-center">
                {EDUCATION_DATA.map((education, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center mb-8">
                        <h3 className="font-bold text-2xl md:text-3xl mb-2 dark:text-light text-dark">
                            {education.title}
                        </h3>
                        <div className="flex items-center gap-4 mb-2">
                            <p className="text-base md:text-lg dark:text-light/75 text-dark/75">
                                {education.location}
                            </p>
                            <p className="text-base md:text-lg dark:text-light/75 text-dark/75">
                                {education.date}
                            </p>
                        </div>
                        <p className="text-base md:text-lg dark:text-light/75 text-dark/75">
                            {education.info}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
