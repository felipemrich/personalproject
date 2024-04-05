"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../navigation-menu";
import { LockClosedIcon } from "@radix-ui/react-icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Direito do Consumidor",
    href: "/find-lawyers/consumption",
    description:
      "Proteção e orientação em casos de propaganda enganosa, defeitos de produtos e direitos de garantia para consumidores.",
  },
  {
    title: "Direito Civil",
    href: "/find-lawyers/civil",
    description:
      "Assistência em contratos, indenizações e questões de propriedade no âmbito do Direito Civil.",
  },
  {
    title: "Direito Previdenciário",
    href: "/find-lawyers/social-security",
    description:
      "Orientação em aposentadoria, benefícios por incapacidade e pensões no âmbito do Direito Previdenciário.",
  },
  {
    title: "Direito Criminal",
    href: "/find-lawyers/criminal",
    description:
      "Defesa e consultoria em acusações criminais, processos penais e direitos do acusado no âmbito do Direito Criminal.",
  },
  {
    title: "Direito do Trânsito",
    href: "/find-lawyers/traffic",
    description:
      "Assessoria em infrações de trânsito, direitos de motoristas e passageiros de carros, motos e voos.",
  },
  {
    title: "Assessoria Jurídica",
    href: "/find-lawyers/legal-advice",
    description:
      "Orientação legal abrangente em diversas áreas do Direito, proporcionando soluções e defesa dos interesses dos clientes.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-3 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-2 text-lg font-medium">Nórdica</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Conectamos o direito a tecnologias como IA, Machine
                      Learning, APIs e CRM para inovar e simplificar a gestão de
                      processos
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services/crm-for-lawyers" title="CRM">
                Organize processos de uma maneira prática com a ajuda de nossos
                assistentes.
              </ListItem>
              <ListItem
                // href="/services/autogen-contract"
                title="Contrat.AI"
                isLocked={true}
                aria-disabled
                className="gray-"
              >
                Crie contratos personalizados utilizando nossas tecnologias
                avançadas, realize assinaturas digitais com segurança e mantenha
                controle total sobre o processo.
              </ListItem>
              <ListItem
                // href="/services/autoaudit-check"
                title="Audit.AI"
                isLocked={true}
                aria-disabled
              >
                Simplifique e automatize a auditoria de seus contratos com nosso
                assistente de checagem LAI, projetado para eficiência e
                precisão.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Encontre o seu Advogado</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              API's
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; isLocked?: boolean }
>(({ className, title, isLocked, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex flex-col space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium leading-none">{title}</div>
            {isLocked && <LockClosedIcon className="text-black-900" />}{" "}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
