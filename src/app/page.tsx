import { PageLayout } from "@/components/layout/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          How are you feeling <span className="text-primary">today</span>?
        </h1>
        <p className="mx-auto mb-8 max-w-[700px] text-lg text-muted-foreground">
          Tell us your mood and we'll suggest some awesome content to match your
          vibe!
        </p>

        {/* Mood Picker Placeholder - we'll implement this in the next phase */}
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 shadow-sm">
          <p className="mb-4 text-xl font-medium">Mood Picker Coming Soon!</p>
          <p className="text-muted-foreground">
            We're brewing up the perfect mood selection experience for you.
          </p>
        </div>
      </section>

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
