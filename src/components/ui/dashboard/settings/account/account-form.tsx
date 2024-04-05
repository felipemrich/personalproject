"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const states = [
  { label: "Acre", value: "AC" },
  { label: "Alagoas", value: "AL" },
  { label: "Amapá", value: "AP" },
  { label: "Amazonas", value: "AM" },
  { label: "Bahia", value: "BA" },
  { label: "Ceará", value: "CE" },
  { label: "Distrito Federal", value: "DF" },
  { label: "Espírito Santo", value: "ES" },
  { label: "Goiás", value: "GO" },
  { label: "Maranhão", value: "MA" },
  { label: "Mato Grosso", value: "MT" },
  { label: "Mato Grosso do Sul", value: "MS" },
  { label: "Minas Gerais", value: "MG" },
  { label: "Pará", value: "PA" },
  { label: "Paraíba", value: "PB" },
  { label: "Paraná", value: "PR" },
  { label: "Pernambuco", value: "PE" },
  { label: "Piauí", value: "PI" },
  { label: "Rio de Janeiro", value: "RJ" },
  { label: "Rio Grande do Norte", value: "RN" },
  { label: "Rio Grande do Sul", value: "RS" },
  { label: "Rondônia", value: "RO" },
  { label: "Roraima", value: "RR" },
  { label: "Santa Catarina", value: "SC" },
  { label: "São Paulo", value: "SP" },
  { label: "Sergipe", value: "SE" },
  { label: "Tocantins", value: "TO" },
] as const;

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "O nome deve ter 2 caracteres no mínimo.",
    })
    .max(30, {
      message: "O nome não pode ter mais de 30 caracteres.",
    }),
  dob: z.date({
    required_error: "A data de nascimento é necessária.",
  }),
  id: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: "O CPF deve estar errado, o CPF possui 11 dígitos.",
  }),
  address: z.string().min(5, {
    message: "O seu endereço deve ter pelo menos 5 caracteres",
  }),
  state: z.string({
    required_error: "Por favor selecione um estado",
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  const { register, handleSubmit, setValue, watch } = form;

  const cpf = watch("id"); // 'id' é o nome do campo do CPF no seu esquema

  React.useEffect(() => {
    const handleCPFChange = (valuecpf: string) => {
      if (valuecpf) {
        valuecpf = valuecpf.replace(/\D/g, "");
        valuecpf = valuecpf.replace(/(\d{3})(\d)/, "$1.$2");
        valuecpf = valuecpf.replace(/(\d{3})(\d)/, "$1.$2");
        valuecpf = valuecpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      }
      return valuecpf;
    };

    // Atualize o valor formatado do CPF no formulário
    setValue("id", handleCPFChange(cpf));
  }, [cpf, setValue]);

  function onSubmit(data: AccountFormValues) {
    <Toast>
      <ToastTitle>Você enviou os seguintes valores:</ToastTitle>
      <ToastDescription>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </ToastDescription>
    </Toast>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormDescription>
                Este é o nome que será exibido no seu perfil e nos emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu CPF"
                  {...register("id")}
                  onChange={(e) => {
                    // Use a função onChange padrão do React Hook Form para capturar e tratar a entrada do CPF
                    field.onChange(e);
                  }}
                  maxLength={14}
                />
              </FormControl>
              <FormDescription>
                Este CPF estará linkida ao seu nome, mas indisponível para os
                outros usuários.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data de nascimento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Sua data de nascimento é usada para calcular sua idade.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input placeholder="Seu endereço" {...field} />
              </FormControl>
              <FormDescription>
                Os seus dados não serão mostrados para mais ninguém .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Estado</FormLabel>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {field.value
                      ? states.find((state) => state.value === field.value)
                          ?.label
                      : "Selecione um estado"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Estados</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {states.map((state) => (
                    <DropdownMenuItem
                      key={state.value}
                      onSelect={() => form.setValue("state", state.value)}
                    >
                      {state.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <FormDescription>
                Alocaremos um especialista que esteja mais proximo
                geograficamente de você.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Atualizar conta</Button>
      </form>
    </Form>
  );
}
