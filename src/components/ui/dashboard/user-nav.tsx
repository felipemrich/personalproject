import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GearIcon, GroupIcon, PersonIcon } from "@radix-ui/react-icons";
import { DollarSignIcon, Users, Users2 } from "lucide-react";
import Link from "next/link";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard/settings">
            <DropdownMenuItem>
              <PersonIcon className="h-5 w-5 mr-1" />
              Perfil
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <DollarSignIcon className="h-5 w-5 mr-1" />
            Pagamento
          </DropdownMenuItem>
          <Link href="/dashboard/settings/account">
            <DropdownMenuItem>
              <GearIcon className="h-5 w-5 mr-1" />
              Configurações
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Users2 className="h-5 w-5 mr-1" /> Novo Time
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Deslogar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
