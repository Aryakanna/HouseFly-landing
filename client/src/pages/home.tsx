import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, HomeIcon, TrendingUp, BarChart } from "lucide-react";
import { BugTrail } from "@/components/ui/bug-trail";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <BugTrail />
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
            Make informed decisions about where you live with our comprehensive neighborhood safety scoring platform.
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
            subtitle="Our intelligent platform helps you understand neighborhood safety through data-driven insights"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safety Scoring</h3>
                <p className="text-muted-foreground">
                  Get detailed safety scores based on real crime data and community feedback.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
                <p className="text-muted-foreground">
                  Track neighborhood safety trends over time to make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Insights</h3>
                <p className="text-muted-foreground">
                  Access comprehensive reports with detailed safety metrics and analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="See Your Neighborhood Score"
            subtitle="Get instant access to safety metrics that matter"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1615015456178-ae6bb600b7ef"
                alt="Modern neighborhood"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Make Data-Driven Decisions
              </h3>
              <p className="text-lg text-muted-foreground">
                Whether you're buying a home, renting an apartment, or just want to stay informed, Housefly provides the insights you need to make confident decisions about where you live.
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