import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";
import { columns } from "@/components/ui/dashboard/customers/columns";
import { DataTable } from "@/components/ui/dashboard/customers/data-table";
// import { UserNav } from "@/components/ui/dashboard/customers/user-nav";
import { UserNav } from "@/components/ui/dashboard/user-nav";
import { taskSchema } from "@/schemas/customers";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Gerencie seus clientes com esse planner de tarefas.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/src/lib/customers.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Bem vindo de volta!
            </h2>
            <p className="text-muted-foreground">
              Lista de tarefas para acompanhamento de seus clientes
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
