import React from "react";
import { HomeIcon, MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

const Icons = {
  email: (props) => <MailIcon {...props} />,
  linkedin: (props) => <FaLinkedin {...props} />,
  github: (props) => <FaGithub {...props} />,
};

const DATA = {
  navbar: [{ href: "#home", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/salimshaddy18",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tusharbaskheti12/",
        icon: Icons.linkedin,
      },
      email: {
        name: "Send Email",
        url: "mailto:baskhetitushar18@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Tushar Baskheti. All rights
            reserved.
          </p>
        </div>

        {/* Dock */}
        <div className="flex justify-center">
          <TooltipProvider>
            <Dock direction="middle">
              {DATA.navbar.map((item) => (
                <DockIcon key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full text-white hover:text-blue-400 hover:bg-gray-800"
                        )}
                      >
                        <item.icon className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator
                orientation="vertical"
                className="h-full bg-gray-700"
              />
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full text-white hover:text-blue-400 hover:bg-gray-800"
                        )}
                      >
                        <social.icon className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            </Dock>
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
