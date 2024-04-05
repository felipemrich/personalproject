import NavigationMenuDemo from "@/components/ui/homepage/navbar-homepage";
import * as React from "react";

export default function FindLawyerInConsumption() {
  return (
    <div>
      <div className="flex justify-center">
        <NavigationMenuDemo />
      </div>
      <h1 className="flex justify-center mt-4 mb-4">
        Ache um advogado da área do Direito do Consumidor
      </h1>
      <p>
        Aqui devo mostrar todas as informações que um 'contratante', ou melhor
        cliente que está em busca de um advogado consegue achar. Aqui deve
        conter informações como uma lista de advogados credenciados pela nossa
        empresa. O numero de clientes atendidos, suas especializações, projetos
        que já atuou, faturamento realizado
      </p>
    </div>
  );
}
