import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, BarChart, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/images/real-estate-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10 text-white"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter max-w-4xl mb-6">
            Transform Real Estate Decisions with
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent block mt-2">
              AI-Powered Insights
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8">
            Make data-driven investment choices with our advanced neighborhood analysis and property value prediction platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://v0-safety-score-algorithm.vercel.app/" target="_blank" rel="noopener noreferrer">
                Try Demo Now
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/20 bg-white/10 hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose HouseFly?"
            subtitle="Our intelligent platform combines safety analytics with property value forecasting to give you the complete picture"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="pt-8">
                <Shield className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-3">Safety Scoring</h3>
                <p className="text-muted-foreground text-lg">
                  Get comprehensive safety scores powered by crime data and community feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="pt-8">
                <TrendingUp className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-3">Smart Predictions</h3>
                <p className="text-muted-foreground text-lg">
                  AI-powered forecasts for both safety trends and property values.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="pt-8">
                <Chrome className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-3">Seamless Integration</h3>
                <p className="text-muted-foreground text-lg">
                  View safety scores directly on your favorite real estate platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Experience HouseFly Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our Investor Dashboard with a free demo—access real-time, comprehensive insights into San Francisco real estate, updated to keep you ahead!
            </p>
            <Button 
              size="lg"
              className="text-lg px-12 py-6"
              asChild
            >
              <a href="https://v0-safety-score-algorithm.vercel.app/" target="_blank" rel="noopener noreferrer">
                Try Demo Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}