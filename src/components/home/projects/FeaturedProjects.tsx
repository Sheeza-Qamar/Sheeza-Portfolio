"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const FramerLink = motion(Link);
const FramerImage = motion(Image);
const FeaturedProjects = ({ title, summary, img, link, github, tech, index }: any) => {
    return (
        <article className="relative flex flex-col lg:flex-row items-center justify-between w-full border border-solid shadow-2xl 
        sm:rounded-br-2xl sm:rounded-3xl bg-light dark:bg-dark dark:border-dark rounded-2xl rounded-br-3xl p-4 sm:p-6 lg:p-8">
            <div className="overflow-hidden rounded-lg w-full lg:w-1/2">
                <FramerImage
                    src={img}
                    alt={title}
                    width={1200}
                    height={700}
                    className="w-full h-52 md:h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
                />
            </div>

            <div className="flex flex-col items-start justify-between w-full lg:w-1/2 pt-5 lg:pt-0 lg:pl-6">
                <h2 className="w-full my-2 text-2xl sm:text-3xl font-bold text-left dark:text-light">
                    {title}
                </h2>
                <p className="py-2 font-medium text-dark dark:text-light text-sm text-justify sm:text-base">
                    {summary}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {tech.map(
                        (techItem: string, i: number) => (
                            <div key={i} className="p-2 sm:px-4 font-medium rounded-lg shadow-xl dark:bg-light 
                            text-dark px-2 text-sm sm:text-base">
                                {techItem}
                            </div>
                        )
                    )}
                </div>
                <div className="flex items-center mt-2 gap-x-4">
                    <FramerLink
                        href={github}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="flex gap-x-2 group items-center">
                            <p className="py-2 font-medium text-dark dark:text-light text-sm sm:text-base group-hover:text-[#1B9CFC]">
                                Code
                            </p>
                            <FaGithub size={15} className="group-hover:text-[#1B9CFC]" />
                        </div>
                    </FramerLink>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProjects;
