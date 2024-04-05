"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";

const profileFormSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: "O usuário deve ter 6 caracteres no mínimo",
    })
    .max(30, {
      message: "O usuário não pode ter mais de 30 caracteres.",
    }),
  email: z
    .string({
      required_error: "Por favor, selecione um email para exibir.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Por favor, insira uma URL válida" }),
      })
    )
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "Eu gosto de tecnologia.",
  urls: [{ value: "https://www.linkedin.com/in/" }],
};

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    <Toast>
      <ToastTitle>Você enviou os seguintes valores:</ToastTitle>
      <ToastDescription>
        {" "}
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuário</FormLabel>
              <FormControl>
                <Input placeholder="Nórdica" {...field} />
              </FormControl>
              <FormDescription>
                Este é o seu nome de exibição público. Pode ser seu nome real ou
                um pseudônimo. Você só pode alterar isso uma vez a cada 30 dias.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um e-mail verificado para exibir." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Você pode gerenciar endereços de e-mail verificados em seu{" "}
                <Link href="/dashboard/settings">configurações do email</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biografia</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Nos conte um pouco mais sobre você"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Você poderá <span>@mencionar</span> outros usuários e empresas
                para conectar com eles.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Adicione links para o seu site, blog ou perfis de mídia
                    social.
                  </FormDescription>

                  <div className="relative flex items-center border border-gray-300 rounded-md">
                    <Input
                      {...field}
                      className="border-none rounded-none rounded-l-md"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => remove(index)}
                    >
                      &#10005;
                    </Button>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}
          >
            Adicione uma URL
          </Button>
        </div>
        <Button type="submit">Atualizar perfil</Button>
      </form>
    </Form>
  );
}
