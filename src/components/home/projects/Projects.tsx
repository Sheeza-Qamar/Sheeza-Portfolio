"use client";
import { AnimatedText, Layout } from "@/components";
import { FEATURED_PROJECTS } from "@/config/constants";
import { motion } from "framer-motion";
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

export const Projects = () => {
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
                <div className="grid grid-cols-1 gap-y-16 xl:px-12 lg:px-8 md:px-6 px-0">
                    {FEATURED_PROJECTS.map(
                        ({ github, img, images, link, summary, title, tech }, i) => (
                            <motion.div key={link || github + i} className="w-full"
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
            </Layout>
        </section>
    );
};
