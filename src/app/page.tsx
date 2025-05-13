import { PageLayout } from "@/components/layout/page-layout";
import { MoodSelection } from "@/components/mood/mood-selection";

export default function Home() {
  return (
    <PageLayout>
      {/* Mood Selection Component */}
      <MoodSelection />

      {/* Category Selection Placeholder */}
      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Choose your content category
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {["Film", "Music", "Video", "Memes", "WTF?"].map((category) => (
            <div
              key={category}
              className="flex aspect-square items-center justify-center rounded-lg bg-muted p-4 text-center text-xl font-semibold shadow-sm transition-transform hover:scale-105 hover:bg-accent cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Content Suggestions Placeholder */}
      <section>
        <h2 className="mb-6 text-center text-3xl font-bold">
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
