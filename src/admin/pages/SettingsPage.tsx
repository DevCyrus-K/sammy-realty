import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AtSign, Camera, Check, Globe, Link2, Mail, Phone } from "lucide-react";
import { AdminLayout } from "../components/layout/AdminLayout";
import { Avatar } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";
import { Card, CardHeader, CardTitle } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { PageHeader } from "../components/ui/PageHeader";
import { Switch } from "../components/ui/Switch";

const tabs = [
  { id: "account", label: "Account" },
  { id: "app-settings", label: "App Settings" },
  { id: "notifications", label: "Notifications" },
  { id: "appearance", label: "Appearance" },
] as const;

const accountSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().min(7, "Phone is required"),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => !data.newPassword || data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const appSchema = z.object({
  siteName: z.string().min(2, "Site name is required"),
  contactEmail: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
  website: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  facebook: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  instagram: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  linkedin: z.string().url("Enter a valid URL").optional().or(z.literal("")),
});

type AccountForm = z.infer<typeof accountSchema>;
type AppForm = z.infer<typeof appSchema>;
type TabId = (typeof tabs)[number]["id"];

export default function SettingsPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabId>("account");
  const [primaryColor, setPrimaryColor] = useState("#0B5D3B");
  const [features, setFeatures] = useState({
    search: true,
    testimonials: true,
    maintenance: false,
  });
  const [notifications, setNotifications] = useState({
    message: true,
    request: true,
    testimonial: true,
    listingStatus: true,
    weekly: false,
  });

  const accountForm = useForm<AccountForm>({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "Sammy Admin",
      email: "demo@sammy-realty.com",
      phone: "+2348148414913",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const appForm = useForm<AppForm>({
    resolver: zodResolver(appSchema),
    mode: "onChange",
    defaultValues: {
      siteName: "Sammy Realty",
      contactEmail: "hello@sammyrealty.com",
      phone: "+2348148414913",
      website: "https://sammyrealty.com",
      facebook: "https://facebook.com/sammyrealty",
      instagram: "https://instagram.com/sammyrealty",
      linkedin: "https://linkedin.com/company/sammyrealty",
    },
  });

  const saveAccount = accountForm.handleSubmit(() => toast.success("Changes saved successfully"));
  const saveApp = appForm.handleSubmit(() => toast.success("Changes saved successfully"));

  useEffect(() => {
    const routeTab = typeof router.query.tab === "string" ? router.query.tab : "";
    if (tabs.some((tab) => tab.id === routeTab)) {
      setActiveTab(routeTab as TabId);
    }
  }, [router.query.tab]);

  const changeTab = (tab: TabId) => {
    setActiveTab(tab);
    router.push(`/admin/settings?tab=${tab}`, undefined, { shallow: true });
  };

  return (
    <AdminLayout title="Settings">
      <PageHeader title="Settings" description="Manage your account and application preferences" />

      <div className="grid gap-6 lg:grid-cols-[192px_1fr]">
        <nav className="h-fit rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-card)] p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => changeTab(tab.id)}
              className={`mb-1 flex w-full rounded-[var(--brand-radius)] px-3 py-2 text-left text-sm transition last:mb-0 ${
                activeTab === tab.id
                  ? "bg-[var(--brand-primary)]/10 font-medium text-[var(--brand-primary)]"
                  : "text-[var(--brand-muted)] hover:bg-[var(--brand-surface)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="min-w-0 space-y-5">
          {activeTab === "account" ? (
            <form className="space-y-5" onSubmit={saveAccount}>
              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>Account</CardTitle>
                    <p className="mt-1 text-sm text-[var(--brand-muted)]">Update your profile and contact details.</p>
                  </div>
                </CardHeader>
                <div className="mb-5 flex items-center gap-4">
                  <div className="relative inline-flex">
                    <Avatar name="Sammy Admin" className="size-20 bg-[var(--brand-primary)] text-xl text-white" />
                    <Button className="absolute bottom-0 right-0 size-9 px-0" aria-label="Change photo">
                      <Camera size={16} />
                    </Button>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--brand-primary)]">Sammy Admin</p>
                    <p className="text-sm text-[var(--brand-muted)]">Lead manager</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full Name" error={accountForm.formState.errors.fullName?.message}>
                    <Input {...accountForm.register("fullName")} />
                  </Field>
                  <Field label="Email" error={accountForm.formState.errors.email?.message}>
                    <Input type="email" {...accountForm.register("email")} />
                  </Field>
                  <Field label="Phone" error={accountForm.formState.errors.phone?.message}>
                    <Input {...accountForm.register("phone")} />
                  </Field>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>Password</CardTitle>
                    <p className="mt-1 text-sm text-[var(--brand-muted)]">Change your password only when needed.</p>
                  </div>
                </CardHeader>
                <div className="grid gap-4 md:grid-cols-3">
                  <Field label="Current Password" error={accountForm.formState.errors.currentPassword?.message}>
                    <Input type="password" {...accountForm.register("currentPassword")} />
                  </Field>
                  <Field label="New Password" error={accountForm.formState.errors.newPassword?.message}>
                    <Input type="password" {...accountForm.register("newPassword")} />
                  </Field>
                  <Field label="Confirm Password" error={accountForm.formState.errors.confirmPassword?.message}>
                    <Input type="password" {...accountForm.register("confirmPassword")} />
                  </Field>
                </div>
                <div className="mt-5 flex justify-end">
                  <Button type="submit" disabled={!accountForm.formState.isValid}>
                    Save
                  </Button>
                </div>
              </Card>
            </form>
          ) : null}

          {activeTab === "app-settings" ? (
            <form className="space-y-5" onSubmit={saveApp}>
              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>Site Info</CardTitle>
                    <p className="mt-1 text-sm text-[var(--brand-muted)]">Keep public contact details current.</p>
                  </div>
                </CardHeader>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Site Name" error={appForm.formState.errors.siteName?.message}>
                    <Input {...appForm.register("siteName")} />
                  </Field>
                  <Field label="Contact Email" error={appForm.formState.errors.contactEmail?.message}>
                    <Input type="email" {...appForm.register("contactEmail")} />
                  </Field>
                  <Field label="Phone" error={appForm.formState.errors.phone?.message}>
                    <IconInput icon={<Phone size={16} />}>
                      <Input className="pl-9" {...appForm.register("phone")} />
                    </IconInput>
                  </Field>
                  <Field label="Website" error={appForm.formState.errors.website?.message}>
                    <IconInput icon={<Globe size={16} />}>
                      <Input className="pl-9" {...appForm.register("website")} />
                    </IconInput>
                  </Field>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>Social Links</CardTitle>
                    <p className="mt-1 text-sm text-[var(--brand-muted)]">Support trust signals and follow-up channels.</p>
                  </div>
                </CardHeader>
                <div className="grid gap-4 md:grid-cols-3">
                  <Field label="Facebook" error={appForm.formState.errors.facebook?.message}>
                    <IconInput icon={<Link2 size={16} />}>
                      <Input className="pl-9" {...appForm.register("facebook")} />
                    </IconInput>
                  </Field>
                  <Field label="Instagram" error={appForm.formState.errors.instagram?.message}>
                    <IconInput icon={<AtSign size={16} />}>
                      <Input className="pl-9" {...appForm.register("instagram")} />
                    </IconInput>
                  </Field>
                  <Field label="LinkedIn" error={appForm.formState.errors.linkedin?.message}>
                    <IconInput icon={<Link2 size={16} />}>
                      <Input className="pl-9" {...appForm.register("linkedin")} />
                    </IconInput>
                  </Field>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>Features</CardTitle>
                    <p className="mt-1 text-sm text-[var(--brand-muted)]">Control conversion-critical public features.</p>
                  </div>
                </CardHeader>
                <div className="space-y-1">
                  <SwitchRow label="Property search" description="Let visitors filter listings instantly." checked={features.search} onChange={(checked) => setFeatures((state) => ({ ...state, search: checked }))} />
                  <SwitchRow label="Show testimonials" description="Display trust-building reviews." checked={features.testimonials} onChange={(checked) => setFeatures((state) => ({ ...state, testimonials: checked }))} />
                  <SwitchRow label="Maintenance mode" description="Temporarily pause public updates." checked={features.maintenance} onChange={(checked) => setFeatures((state) => ({ ...state, maintenance: checked }))} />
                </div>
                <div className="mt-5 flex justify-end">
                  <Button type="submit" disabled={!appForm.formState.isValid}>
                    Save
                  </Button>
                </div>
              </Card>
            </form>
          ) : null}

          {activeTab === "notifications" ? (
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Notifications</CardTitle>
                  <p className="mt-1 text-sm text-[var(--brand-muted)]">Choose alerts that help the team respond faster.</p>
                </div>
              </CardHeader>
              <div>
                <SwitchRow label="New message" description="Alert admins when a lead asks for help." checked={notifications.message} onChange={(checked) => setNotifications((state) => ({ ...state, message: checked }))} />
                <SwitchRow label="Listing request" description="Review seller submissions quickly." checked={notifications.request} onChange={(checked) => setNotifications((state) => ({ ...state, request: checked }))} />
                <SwitchRow label="New testimonial" description="Publish fresh trust signals." checked={notifications.testimonial} onChange={(checked) => setNotifications((state) => ({ ...state, testimonial: checked }))} />
                <SwitchRow label="Listing status change" description="Know when listing status changes." checked={notifications.listingStatus} onChange={(checked) => setNotifications((state) => ({ ...state, listingStatus: checked }))} />
                <SwitchRow label="Weekly summary" description="Receive a digest of lead activity." checked={notifications.weekly} onChange={(checked) => setNotifications((state) => ({ ...state, weekly: checked }))} />
              </div>
              <Button className="mt-5" onClick={() => toast.success("Changes saved successfully")}>
                <Mail size={16} />
                Save preferences
              </Button>
            </Card>
          ) : null}

          {activeTab === "appearance" ? (
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Appearance</CardTitle>
                  <p className="mt-1 text-sm text-[var(--brand-muted)]">Tune the admin workspace without changing the public site.</p>
                </div>
              </CardHeader>
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-sm font-medium text-[var(--brand-primary)]">Theme</p>
                  <div className="inline-flex rounded-[var(--brand-radius)] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-1">
                    {["light", "dark", "system"].map((item) => (
                      <Button key={item} variant={theme === item ? "primary" : "ghost"} className="min-h-9 capitalize" onClick={() => setTheme(item)}>
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-[var(--brand-primary)]">Primary color</p>
                  <div className="flex flex-wrap gap-3">
                    {["#0B5D3B", "#0d7044", "#ff5a3c", "#3167a8", "#7C3AED", "#0D9488"].map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => {
                          setPrimaryColor(color);
                          toast.success("Changes saved successfully");
                        }}
                        className="grid size-9 place-items-center rounded-full border border-[var(--brand-border)]"
                        style={{ backgroundColor: color }}
                        aria-label={`Use ${color} as primary color`}
                      >
                        {primaryColor === color ? <Check size={16} className="text-white" /> : null}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ) : null}
        </div>
      </div>
    </AdminLayout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium">
      <span className="mb-1 block text-[var(--brand-primary)]">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-[var(--brand-danger)]">{error}</span> : null}
    </label>
  );
}

function IconInput({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="relative block">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--brand-muted)]">{icon}</span>
      {children}
    </span>
  );
}

function SwitchRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[var(--brand-border)] py-4 last:border-0">
      <div>
        <p className="font-medium text-[var(--brand-primary)]">{label}</p>
        <p className="mt-0.5 text-sm text-[var(--brand-muted)]">{description}</p>
      </div>
      <Switch checked={checked} onChange={onChange} label={label} />
    </div>
  );
}
