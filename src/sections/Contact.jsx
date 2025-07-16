import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_2ceblmg",
        "template_jbk34jq",
        form.current,
        "bHtkx9k667X7HbMR0"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="flex justify-center items-center text-3xl md:text-4xl font-bold mb-4 text-white">
            <Mail className="mr-3 w-8 h-8 text-white" />
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's work together. I'm always open to discussing new opportunities
            and collaborations.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Card className="bg-[#121212] border-none rounded-2xl shadow-md">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-white">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-[#1e1e1e] border-gray-700 text-white placeholder-gray-400 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="reply_to"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-[#1e1e1e] border-gray-700 text-white placeholder-gray-400 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="..."
                        required
                        className="flex w-full rounded-md border border-gray-700 bg-[#1e1e1e] px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-3 pb-6">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  onClick={sendEmail}
                >
                  Send Message
                </Button>
                {status && (
                  <p className="text-sm text-center text-blue-400 font-medium">
                    {status}
                  </p>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
