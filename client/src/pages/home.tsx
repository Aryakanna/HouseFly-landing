import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, HomeIcon, TrendingUp, BarChart, Chrome, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import React from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  const [year, setYear] = useState(2025);
  const safetyScores = {
    2023: 72,
    2024: 75,
    2025: 78,
    2026: 80,
    2027: 83,
  };
  const priceChanges = {
    2023: 700000,
    2024: 725000,
    2025: 750000,
    2026: 780000,
    2027: 810000,
  };
  const currentScore = safetyScores[year as keyof typeof safetyScores] || 78;
  const currentPrice = priceChanges[year as keyof typeof priceChanges] || 750000;
  const trendIcon = currentScore > (safetyScores[(year - 1) as keyof typeof safetyScores] || 75) ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32">
        <motion.div 
          className="container mx-auto text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
            Know Your Neighborhood,<br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Secure Your Future
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make informed decisions about where you live with our comprehensive neighborhood safety scoring and predictive analytics platform.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Housefly?"
            subtitle="Our intelligent platform helps you understand neighborhood safety and property value trends through advanced predictive analytics"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safety Scoring</h3>
                <p className="text-muted-foreground">
                  Get detailed safety scores based on real crime data, community feedback, and infrastructure development plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Predictions</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes local regulations, planned infrastructure, and real estate trends to predict future neighborhood value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Chrome className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Use our Chrome extension to see safety scores directly on Zillow and other real estate platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Insights</h3>
                <p className="text-muted-foreground">
                  Access comprehensive reports with detailed safety metrics and future value predictions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  "Hello, my name is Jacob..."
                </h3>
                <p className="text-lg text-muted-foreground italic">
                  "As a first-time homebuyer, I was worried about investing in an up-and-coming neighborhood. Housefly showed me that the area was getting a new transit station and several mixed-use developments in the next few years. Their safety score predictions helped me make a confident decision, and now my property value has increased by 15% in just one year thanks to those improvements!"
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold">Jacob Thompson</p>
                    <p className="text-sm text-muted-foreground">Homeowner in Austin, TX</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading
            title="See Your Neighborhood Score"
            subtitle="Get instant access to safety metrics and future predictions"
            className="mb-12"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615015456178-ae6bb600b7ef"
                alt="Modern neighborhood"
                className="w-full h-[300px] object-cover"
              />
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold">1234 Elm Street, Springfield</h2>
                <p className="text-muted-foreground">4 Beds | 3 Baths | 2,500 sqft</p>
                <p className="text-xl mt-2">${currentPrice.toLocaleString()}</p>

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-muted-foreground mb-2">Forecast Year:</p>
                    <Slider
                      defaultValue={[2025]}
                      min={2023}
                      max={2027}
                      step={1}
                      onValueChange={(val) => setYear(val[0])}
                      className="w-40"
                    />
                    <p className="text-sm text-muted-foreground mt-1">{year}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                    <p className="text-lg font-bold">Safety Score: {currentScore}%</p>
                    {React.createElement(trendIcon, { className: "text-green-500", size: 20 })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Make Data-Driven Decisions
              </h3>
              <p className="text-lg text-muted-foreground">
                Our advanced algorithm considers planned infrastructure projects, upcoming zoning changes, and local government initiatives to provide accurate safety scores and property value predictions.
              </p>
              <div className="pt-4">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}