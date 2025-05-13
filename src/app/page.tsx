import { PageLayout } from "@/components/layout/page-layout";
import { MoodSelection } from "@/components/mood/mood-selection";
import { CategorySelection } from "@/components/mood/category-selection";

export default function Home() {
  return (
    <PageLayout>
      {/* Mood Selection - Now in vertical layout */}
      <div className="space-y-5 mb-12">
        {/* Mood Selection */}
        <div className="bg-background/50 p-6 rounded-lg">
          <MoodSelection />
        </div>

        {/* Category Selection */}
        <div className="bg-background/50 p-6 rounded-lg">
          <CategorySelection />
        </div>
      </div>

      {/* Content Suggestions Placeholder */}
      <section>
        <h2 className="mb-6 text-center text-2xl font-bold">
          Your Personalized Suggestions
        </h2>
        <div className="rounded-lg border border-border bg-card p-8 shadow-sm text-center">
          <p className="text-muted-foreground">
            Select your mood to see suggestions
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
