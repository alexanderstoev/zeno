"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

type ProviderList = Awaited<ReturnType<typeof getProviders>>;

export const LoginPrompt = () => {
  const [providers, setProviders] = useState<ProviderList | null>(null);

  useEffect(() => {
    async function fetchProviders() {
      const resp = await getProviders();
      setProviders(resp);
    }
    fetchProviders().catch(console.error);
  }, []);

  return (
    <div>
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-xl">Welcome to Zeno</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            Log in using one of the available providers.
          </p>
          <div className="flex flex-col gap-2">
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  key={provider.name}
                  size="lg"
                  onClick={() => signIn(provider.id)}
                  className="cursor-pointer"
                >
                  Log in with {provider.name}
                </Button>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
