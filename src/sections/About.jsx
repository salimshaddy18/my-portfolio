import React from "react";
import { Code, Database, Globe, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../components/ui/badge";
import { IconCloud } from "@/components/magicui/icon-cloud";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      icon: Globe,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB"],
      icon: Database,
    },
    {
      category: "Languages",
      items: ["C++", "Java", "JavaScript"],
      icon: Code,
    },
  ];

  const techSlugs = [
    "c++",
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "tailwindcss",
    "nodedotjs",
    "express",
    "mongodb",
    "firebase",
    "vercel",
    "render",
    "git",
    "github",
    "visualstudiocode",
    "postman",
    "canva",
  ];

  const techImages = techSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section
      id="about"
      className="relative bg-black text-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="flex justify-center items-center text-3xl md:text-4xl font-bold mb-4 text-white">
            <User className="mr-3 w-8 h-8 text-white" />
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {/* Text Block */}
            <div className="text-white text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I'm someone who enjoys building things on the web and solving
                problems. I'm working on full-stack web development, learning
                and applying it through hands-on projects, working with both
                frontend and backend technologies to turn ideas into functional
                projects. I also have a strong interest in data structures and
                algorithms and spend time solving problems on coding platforms.
                I'm always curious about new and upcoming technologies and enjoy
                diving into tools that help me grow as a developer.
              </p>
            </div>

            {/* IconCloud*/}
            <div className="flex justify-start -mt-2">
              <div className="relative h-[12rem] sm:h-[14rem] md:h-[16rem] w-full max-w-sm hidden sm:block">
                <IconCloud images={techImages} />
              </div>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="space-y-6 w-full max-w-md mx-auto">
            {skills.map((skill) => (
              <Card
                key={skill.category}
                className="bg-[#121212] border-none rounded-2xl shadow-md w-full"
              >
                <CardContent className="px-5 py-6">
                  <div className="flex items-center mb-4 gap-x-3">
                    <div className="p-3 rounded-xl bg-[#1e1e1e] shadow-inner">
                      <skill.icon className="text-blue-400 w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-white text-lg">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, index) => (
                      <Badge
                        key={index}
                        className="bg-[#2a2a2a] text-white rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
