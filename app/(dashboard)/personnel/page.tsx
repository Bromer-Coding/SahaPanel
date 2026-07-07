import { redirect } from "next/navigation";
import { updateProfileActive } from "@/app/actions";
import { getCurrentProfile } from "@/lib/auth";
import { canManageAdmin, roleLabels } from "@/lib/types";
import { Badge, PageHeader, Panel, buttonClass } from "@/components/ui";

export default async function PersonnelPage() {
  const { supabase, profile } = await getCurrentProfile();
  if (!canManageAdmin(profile?.role)) redirect("/dashboard");

  const { data: personnel } = await supabase
    .from("profiles")
    .select("*, departments(name)")
    .order("full_name", { ascending: true });

  return (
    <div className="grid gap-6">
      <PageHeader title="Personeller" description="Personel rolu, departmani ve aktiflik durumunu yonetin." />
      <div className="grid gap-4">
        {personnel?.map((person: any) => (
          <Panel key={person.id}>
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-ink">{person.full_name}</h2>
                  <Badge tone={person.is_active ? "green" : "red"}>{person.is_active ? "Aktif" : "Pasif"}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {roleLabels[person.role as keyof typeof roleLabels]} - {person.departments?.name ?? "Departman yok"}
                </p>
              </div>
              <form action={updateProfileActive}>
                <input type="hidden" name="profile_id" value={person.id} />
                <input type="hidden" name="is_active" value={person.is_active ? "false" : "true"} />
                <button className={buttonClass}>{person.is_active ? "Pasif yap" : "Aktif yap"}</button>
              </form>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
