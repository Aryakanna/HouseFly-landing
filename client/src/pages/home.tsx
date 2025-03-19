import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, HomeIcon, TrendingUp, BarChart, Chrome, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import React from 'react';
import { BugTrail } from "@/components/ui/bug-trail";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const logoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '1rem',
  fontSize: '1.5rem',
};

export default function Home() {
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
      <div style={logoStyle} className="text-primary">
        HouseFly
      </div>
      <BugTrail />
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
              Predict Its Future
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make smarter real estate decisions with our AI-powered platform that predicts neighborhood safety and property values using your firm's localized data.
          </p>
          <div className="max-w-md mx-auto">
            <Button 
              variant="secondary"
              className="w-full"
              asChild
            >
              <a href="https://v0-safety-score-algorithm.vercel.app/" target="_blank" rel="noopener noreferrer">
                Try a Demo
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Housefly?"
            subtitle="Our intelligent platform combines safety analytics with property value forecasting to give you the complete picture of your investment potential"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safety Scoring</h3>
                <p className="text-muted-foreground">
                  Get comprehensive safety scores powered by crime data, community feedback, and local development plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Predictions</h3>
                <p className="text-muted-foreground">
                  Our AI forecasts both safety trends and property values using regulatory changes and development plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Chrome className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Use our Chrome extension to see safety scores and price predictions directly on real estate platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Insights</h3>
                <p className="text-muted-foreground">
                  Access detailed reports with safety metrics, value predictions, and future development impact analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What HouseFly Does Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <SectionHeading
            title="What HouseFly Does"
            subtitle="Our comprehensive analysis combines multiple data sources to give you the most accurate picture of neighborhood safety and development. Get insights into how future developments will impact your investment before anyone else."
            className="mb-12"
          />

          <div className="flex justify-between items-start space-x-8 mb-16">
            <div className="flex-1">
              <img src="/images/safety-analysis.png" alt="Safety Analysis" className="w-full h-48 object-cover rounded-lg mb-6" />
              <div className="flex items-center mb-4">
                <Shield className="h-12 w-12 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Safety News Analysis</h3>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Analysis of local news within 10-mile radius</li>
                <li>Categorization into positive, neutral, or negative impacts</li>
                <li>Comprehensive safety insights</li>
              </ul>
            </div>

            <div className="w-px h-48 bg-border"></div>

            <div className="flex-1">
              <img src="/images/crime-data.png" alt="Crime Data" className="w-full h-48 object-cover rounded-lg mb-6" />
              <div className="flex items-center mb-4">
                <BarChart className="h-12 w-12 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Real-Time Crime Data</h3>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Direct FBI UCR system integration</li>
                <li>Up-to-the-minute crime statistics</li>
                <li>Detailed safety metrics</li>
              </ul>
            </div>

            <div className="w-px h-48 bg-border"></div>

            <div className="flex-1">
              <img src="/images/infrastructure.png" alt="Infrastructure" className="w-full h-48 object-cover rounded-lg mb-6" />
              <div className="flex items-center mb-4">
                <TrendingUp className="h-12 w-12 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Infrastructure Projects</h3>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Local development tracking</li>
                <li>Construction project monitoring</li>
                <li>Property value impact analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="hidden md:block h-full">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&auto=format&fit=crop"
                  alt="Jacob Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">
                    "Hello, my name is Jacob..."
                  </h3>
                  <p className="text-lg text-muted-foreground italic">
                    "As a first-time homebuyer, I wanted both safety and investment potential. Housefly showed me that the area was getting a new transit station and several mixed-use developments. Not only did their safety score predictions give me peace of mind, but they also accurately forecasted a 15% property value increase due to these improvements. Thanks to Housefly, I found a safe neighborhood with great investment returns!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-semibold">Jacob Thompson</p>
                      <p className="text-sm text-muted-foreground">Homeowner in Austin, TX</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading
            title="See Your Neighborhood Score"
            subtitle="Get instant access to safety metrics and value predictions"
            className="mb-12"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-card shadow-lg rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233"
                alt="1234 Elm Street Property"
                className="w-full h-[300px] object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = "https://images.unsplash.com/photo-1518780664697-55e3ad937233";
                }}
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

            <div className="max-w-md mx-auto mt-12">
              <Button 
                variant="secondary"
                className="w-full"
                asChild
              >
                <a href="https://v0-safety-score-algorithm.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Try a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}