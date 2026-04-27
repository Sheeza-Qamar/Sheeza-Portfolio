"use client";
import { AnimatedText, Layout } from "@/components";
import { FEATURED_PROJECTS } from "@/config/constants";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import FeaturedProjects from "./FeaturedProjects";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            delay: 0.05 * i,
        }
    }),
}

const PROJECT_FILTERS = [
    { id: "all", label: "All Projects" },
    { id: "development", label: "Development" },
    { id: "automation", label: "AI Agents & Automation" },
];

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return FEATURED_PROJECTS;
        return FEATURED_PROJECTS.filter((project: any) => {
            const normalizedCategory = project.category ?? "development";
            return normalizedCategory === activeFilter;
        });
    }, [activeFilter]);

    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center w-full mb-16 dark:text-light"
        >
            <Layout className="xl:-mt-32 mt-0">
                <AnimatedText
                    text="My Work"
                    className="mb-16 lg:!text-8xl md:!text-7xl !text-6xl"
                />
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {PROJECT_FILTERS.map((filter) => (
                        <button
                            key={filter.id}
                            type="button"
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-200
                            ${activeFilter === filter.id
                                    ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
                                    : "bg-transparent text-black dark:text-white border-gray-500 hover:border-black dark:hover:border-white"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-12 dark:text-[#c9c9c9] text-gray-700">
                        No projects found in this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-y-16 xl:px-12 lg:px-8 md:px-6 px-0">
                        {filteredProjects.map(
                            ({ github, img, images, link, summary, title, tech }, i) => (
                                <motion.div key={`${link ?? github ?? title}-${i}`} className="w-full"
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={i}
                                >
                                    <FeaturedProjects
                                        title={title}
                                        img={img}
                                        images={images}
                                        summary={summary}
                                        link={link}
                                        github={github}
                                        tech={tech}
                                        index={i}
                                    />
                                </motion.div>
                            )
                        )}
                    </div>
                )}
            </Layout>
        </section>
    );
};
