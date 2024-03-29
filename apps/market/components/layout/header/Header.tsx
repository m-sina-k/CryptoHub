import {Input, Button} from "@ui/components";
import {SunIcon} from "lucide-react";

function Header() {
  return (
    <header className="bg-twc_foreground border-b-1 border-b-twc_border">
      <div className="container py-3 flex items-center justify-between">
        <section>
          <p className="text-black text-xl text-twc_primary font-bold">CryptoHub</p>
        </section>
        <section className="flex items-center gap-2">
          <Input placeholder="Search coins..." className="h-8"/>
          <Button variant="ghost" className="w-8 h-8 flex p-1.5">
            <SunIcon/>
          </Button>
        </section>
      </div>
    </header>
  );
};

export default Header;
