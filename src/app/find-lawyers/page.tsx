import NavigationMenuDemo from "@/components/ui/homepage/navbar-homepage";
import * as React from "react";

export default function CRMForLawyers() {
  return (
    <div>
      <div className="flex justify-center">
        <NavigationMenuDemo />
      </div>
      <h3 className="flex justify-center mt-4 mb-4">
        Encontre o seu advogado aqui
      </h3>
      <p>
        Aqui deve ser uma forma de buscar um advogado muito mais do que uma
        explicação das áreas do direito, aqui deve ser o local de busca para
        advogados
      </p>
    </div>
  );
}
