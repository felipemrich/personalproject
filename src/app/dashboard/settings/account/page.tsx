import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/components/ui/dashboard/settings/account/account-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Conta</h3>
        <p className="text-sm text-muted-foreground">
          Atualize as configurações da sua conta. Defina seu idioma preferido e
          fuso horário.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
