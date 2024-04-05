// import { Metadata } from "next";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// import { LoginForm } from "@/components/ui/login/LoginForm";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Entrar na sua conta",
// };

// export default function LoginPage() {
//   return (
//     <>
//       <div className="container relative h-[1000px] flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
//         <Link
//           href="/register" // Change this to point to your registration page
//           className={cn(
//             buttonVariants({ variant: "ghost" }),
//             "absolute right-4 top-4 md:right-8 md:top-8"
//           )}
//         >
//           Criar Conta
//         </Link>
//         <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
//           <div className="absolute inset-0 bg-zinc-900" />
//           <div className="relative z-20 flex items-center text-lg font-medium">
//             {/* SVG and company slogan can remain the same or be adjusted as necessary */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="mr-2 h-6 w-6"
//             >
//               <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
//             </svg>
//             Nórdica Inc
//           </div>
//           <div className="relative z-20 mt-auto">
//             <blockquote className="space-y-2">
//               <p className="text-lg">
//                 &ldquo;Atuamos com uma plataforma gerando um ambiente robusto e
//                 seguro para fechar os melhores negócios do mercado.&rdquo;
//               </p>
//               <footer className="text-sm">Felipe Emrich</footer>
//             </blockquote>
//           </div>
//         </div>
//         <div className="lg:p-8">
//           <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//             <div className="flex flex-col space-y-2 text-center">
//               <h1 className="text-2xl font-semibold tracking-tight">Entrar</h1>
//               <p className="text-sm text-muted-foreground">
//                 Use seu email para entrar
//               </p>
//             </div>
//             <LoginForm /> {/* Make sure this component is properly imported */}
//             <p className="px-8 text-center text-sm text-muted-foreground">
//               Ao continuar, você concorda com nossos{" "}
//               <Link
//                 href="/terms"
//                 className="underline underline-offset-4 hover:text-primary"
//               >
//                 Termos de Serviço
//               </Link>{" "}
//               e{" "}
//               <Link
//                 href="/privacy"
//                 className="underline underline-offset-4 hover:text-primary"
//               >
//                 Política de Privacidade
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Insira seu e-mail abaixo para entrar em sua conta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="joao@examplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm  text-gray-500"
                >
                  Esqueceu sua senha?
                </Link>
              </div>{" "}
              <div className="flex items-center">
                <Input id="password" type="password" required />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Logar
            </Button>
            <Button variant="outline" className="w-full">
              Logue com Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta ?{" "}
            <Link href="/register" className="underline">
              Criar conta
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden  lg:block bg-black">
        {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  );
}
