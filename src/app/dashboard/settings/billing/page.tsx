import { Separator } from "@/components/ui/separator";
import { DemoPaymentMethod } from "@/components/ui/dashboard/settings/billing/payment-method";

export default function SettingsBillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Pagamentos</h3>
        <p className="text-sm text-muted-foreground">
          Atualize as configurações de pagamento .
        </p>
      </div>
      <Separator />
      <DemoPaymentMethod />
    </div>
  );
}
