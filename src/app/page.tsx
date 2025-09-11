import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import { LoginPrompt } from "@/app/_components/LoginPrompt";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <HydrateClient>
      <div className="bg-background text-foreground flex min-h-screen flex-col items-center gap-20 p-6">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold">Zeno</h1>
          <p className="text-muted-foreground mt-1">
            Capture ideas, turn them into action.
          </p>
        </header>

        {/* Login Prompt with Providers */}
        <LoginPrompt />

        {/* Footer */}
        <footer className="text-muted-foreground absolute bottom-6 text-xs">
          <p>© {new Date().getFullYear()} Zeno</p>
        </footer>
      </div>
    </HydrateClient>
  );
}
