import { CardWithForm } from "@/components/CardwithForm";
import { DarkModeToggler } from "@/components/DarkmodeToggler";
import { NavigationMenuDemo } from "@/components/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DarkModeToggler/>
      <NavigationMenuDemo/>
     <Button>Sign Up</Button>
     <CardWithForm/>
     
     
    </main>
  );
}
