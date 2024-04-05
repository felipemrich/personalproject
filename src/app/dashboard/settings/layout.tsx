import { Metadata } from "next";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/ui/dashboard/settings/sidebar-nav";
import { ArrowLeftIcon, IdCardIcon, PersonIcon } from "@radix-ui/react-icons";
import { DollarSignIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Configurações",
  description: "Configure as informações do seu perfil aqui.",
};

const sidebarNavItems = [
  {
    title: "Perfil",
    href: "/dashboard/settings",
    icon: <PersonIcon className="h-5 w-5" />,
  },
  {
    title: "Conta",
    href: "/dashboard/settings/account",
    icon: <IdCardIcon className="h-5 w-5" />,
  },
  {
    title: "Pagamento",
    href: "/dashboard/settings/billing",
    icon: <DollarSignIcon className="h-5 w-5" />,
  },
];

const sidebarExitItem = [
  {
    title: "Voltar",
    href: "/dashboard",
    icon: <ArrowLeftIcon className="h-5 w-5" />,
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden md:flex md:flex-col md:space-y-6 p-10 pb-16">
        <div className="flex-1 space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
          <p className="text-muted-foreground">
            Gerencie as configurações da sua conta e defina as preferências de
            e-mail.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="flex flex-col lg:w-1/5 -mx-4 space-y-13">
            <SidebarNav items={sidebarNavItems} />

            <div className="mt-auto sticky bottom-0 pb-1 bg-white">
              <SidebarNav items={sidebarExitItem} />
            </div>
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
