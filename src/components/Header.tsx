import { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

function Header() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <header className='border-b border-border bg-card/50 backdrop-blur-sm'>
      <div className='mx-auto max-w-3xl px-4 py-4 sm:px-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-foreground'>Tasks</h1>
          <Button
            variant='ghost'
            size='icon'
            onClick={toggleTheme}
            className='rounded-full'
            aria-label='Toggle theme'>
            {isDark ? (
              <Sun className='h-5 w-5' />
            ) : (
              <Moon className='h-5 w-5' />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
