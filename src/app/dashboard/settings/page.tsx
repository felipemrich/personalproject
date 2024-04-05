import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "@/components/ui/dashboard/settings/profile/profile-form";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Perfil</h3>
        <p className="text-sm text-muted-foreground">
          Assim é como os outros verão você no site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
