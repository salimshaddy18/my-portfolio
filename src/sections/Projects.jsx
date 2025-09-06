import React from "react";
import { projects } from "../data/projects";
import { Safari } from "@/components/magicui/safari";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FolderOpen } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black px-2 sm:px-4 py-20 flex flex-col justify-center font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="flex justify-center items-center text-3xl md:text-4xl font-bold mb-4 text-white">
            <FolderOpen className="mr-3 w-8 h-8 text-white" />
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work, built with modern tech and a passion for
            great user experience.
          </p>
        </div>
        <TooltipProvider>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-[#18181b]/80 border-none shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-[1.025] hover:shadow-blue-700/30 backdrop-blur-md w-full max-w-md font-sans"
                >
                  <CardHeader className="pb-2 flex flex-row items-center justify-between gap-2 font-sans">
                    <CardTitle className="text-2xl font-semibold font-sans text-white">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-3 items-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="text-gray-400 hover:text-blue-400 transition text-xl"
                          >
                            <FaGithub />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>GitHub</span>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Site"
                            className="text-gray-400 hover:text-pink-400 transition text-lg"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Live Site</span>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 font-sans">
                    <div className="w-full rounded-xl overflow-hidden shadow-lg mb-4">
                      <Safari
                        url={project.live.replace(/^https?:\/\//, "")}
                        className="w-full h-[220px] md:h-[250px] bg-[#18181b]"
                        imageSrc={
                          project.image ||
                          "https://via.placeholder.com/1200x750"
                        }
                      />
                    </div>
                    <CardDescription className="text-gray-300 text-base mb-4 font-normal font-sans">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <span>
                              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full shadow hover:from-blue-700 hover:to-purple-700 transition-colors cursor-pointer font-sans">
                                {tech}
                              </Badge>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>{tech}</span>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Projects;
