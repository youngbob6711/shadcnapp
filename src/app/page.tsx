import { CardWithForm } from "@/components/CardwithForm";
import { NavigationMenuDemo } from "@/components/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavigationMenuDemo/>
     <Button>Sign Up</Button>
     <CardWithForm/>
     
    </main>
  );
}
