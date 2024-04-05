import NavigationMenuDemo from "@/components/ui/homepage/navbar-homepage";
import * as React from "react";

export default function ServicesForLawyerOffice() {
  return (
    <div>
      <div className="flex justify-center">
        <NavigationMenuDemo />
      </div>
      <h1 className="flex justify-center mt-4 mb-4">Serviços para advogados</h1>
      <p>
        Aqui devo descrever todas as funções de como os serviços fornecidos
        podem ajudar a vida do advogado tanto na parte operacional,
        organizacional e na busca de clientes
      </p>
    </div>
  );
}
