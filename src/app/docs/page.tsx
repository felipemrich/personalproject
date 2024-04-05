import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavigationMenuDemo from "@/components/ui/homepage/navbar-homepage";
import * as React from "react";

export default function DocOfAPIs() {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <NavigationMenuDemo />
        </div>
        <h1 className="flex justify-center mt-4 mb-4">API's</h1>
      </div>
      <div className="m-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>DataJud</CardTitle>
              <CardDescription>
                O Data Judi é um conjunto de api's para buscar processos
                públicos
              </CardDescription>{" "}
            </CardHeader>
            <CardContent>
              <ul>
                <li>- Consulta pelo número do processo </li>
                <li>- Consulta por Classe Processual e Órgão Julgador </li>
                <li>- Consulta com Paginação</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-1 gap-4 gap-y-2 lg:grid-cols-3 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Consulta pelo número do processo</CardTitle>
              <CardDescription>
                Neste caso a pessoa busca pelo processo atraves do número do
                processo. O Primeiro passo é a escolha de qual Tribuanal isso
                será feito e logo depois o número do processo
              </CardDescription>
              <CardContent>
                <CardTitle className="mt-2 mb-3">Request/Query:</CardTitle>
                <CardDescription>
                  <u>"tribunal"</u>:{" "}
                  <strong>Tribunal Superior Eleitoral</strong> <br />
                  <u>"numeroProcesso"</u>:
                  <strong> "00008323520184013202"</strong>
                </CardDescription>
              </CardContent>
              <CardContent>
                <CardTitle className="mt-2 mb-3">Response:</CardTitle>
                <CardDescription></CardDescription>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
