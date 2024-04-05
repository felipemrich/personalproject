// import { Metadata } from "next";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// // import { UserAuthForm } from "@/components/ui/login/RegisterForm";
// import { DemoCreateAccount } from "@/components/ui/login/RegisterForm";

// export const metadata: Metadata = {
//   title: "Register",
//   description: "Criar conta",
// };

// export default function AuthenticationPage() {
//   return (
//     <>
//       <div className="container relative h-[1000px] flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
//         <Link
//           href="/login"
//           className={cn(
//             buttonVariants({ variant: "ghost" }),
//             "absolute right-4 top-4 md:right-8 md:top-8"
//           )}
//         >
//           Login
//         </Link>
//         <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
//           <div className="absolute inset-0 bg-zinc-900" />
//           <div className="relative z-20 flex items-center text-lg font-medium">
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
//             <DemoCreateAccount />
//             <p className="px-8 text-center text-sm text-muted-foreground">
//               Clicando em continue, você concorda em{" "}
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
//                 Politicas de Privacidade
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// Ensure the necessary imports are at the top of your file
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DemoCreateAccount } from "@/components/ui/login/RegisterForm"; // Assuming this is correctly imported

export const metadata: Metadata = {
  title: "Register",
  description: "Criar conta",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative min-h-screen flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            {/* SVG and branding elements */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Nórdica Inc
          </div>
          <div className="relative z-20 mt-auto">
            {/* Company slogan or description */}
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Atuamos com uma plataforma gerando um ambiente robusto e
                seguro para fechar os melhores negócios do mercado.&rdquo;
              </p>
              <footer className="text-sm">Felipe Emrich</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <DemoCreateAccount /> {/* Your registration form component */}
            <p className="px-8 text-center text-sm text-muted-foreground">
              Clicando em continue, você concorda em{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Politicas de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
