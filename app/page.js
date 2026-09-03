import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import {
  CheckCheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-8 max-w-7xl mx-auto">
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          {/* Badge */}
          <Badge
            variant="outline"
            className="group rounded-full px-6 py-3 text-sm font-medium bg-white/80 backdrop-blur-sm border-[#2C9FA7]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#2C9FA7]/40 mb-6"
          >
            <CheckCheckIcon className="w-4 h-4 mr-2 text-[#2C9FA7]" />
            <span className="text-gray-700">Your Healthcare Buddy</span>
            <span className="ml-2 w-1.5 h-1.5 rounded-full bg-[#2C9FA7] animate-pulse" />
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Elevate Your{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#2C9FA7] to-[#1a7a82] bg-clip-text text-transparent">
                Clinical
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-[#2C9FA7]/30 to-[#1a7a82]/30 rounded-full blur-sm" />
            </span>{" "}
            Experience with{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#2C9FA7] to-[#1a7a82] bg-clip-text text-transparent">
                Upchar
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-[#2C9FA7]/30 to-[#1a7a82]/30 rounded-full blur-sm" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            A sophisticated, high-performance bridge connecting elite medical
            professionals with their patients. Precision software designed for
            the modern practice.
          </p>

          {/* CTA Buttons */}

          <Button
            variant="default"
            className="group px-8 py-6 text-base font-semibold bg-linear-to-r from-[#2C9FA7] to-[#1a7a82] hover:shadow-2xl hover:shadow-[#2C9FA7]/25 hover:scale-105 transition-all duration-300 rounded-full tracking-wide cursor-pointer"
          >
            Browse Now
            <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-4 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-sm bg-white/80"
          >
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Get started in few simple steps
          </p>
        </div>

        {/* Steps Grid - Add your step cards here */}
        <Card>
          <CardHeader>
              <h1>01</h1>
          </CardHeader>
          <CardContent>
            <h1>Login</h1>
            <CardDescription>
this is some gebrish
            </CardDescription>
          </CardContent>
          <CardFooter>
            <p className="mx-2">Still! Don&apos;t Have Your Account ?</p>
            <Button>Sign Up</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
