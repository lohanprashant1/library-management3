"use client";

import { useState, useEffect } from "react";
import { Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SiteSettingsProps {
  token: string;
}

export default function SiteSettings({ token }: SiteSettingsProps) {
  const [hero, setHero] = useState({ badge: "", title: "", description: "" });
  const [stats, setStats] = useState<string>("");
  const [announcements, setAnnouncements] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [success, setSuccess] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/content", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        const contentList = data.content || [];

        const heroItem = contentList.find((c: { section: string }) => c.section === "hero");
        if (heroItem) {
          const parsed = JSON.parse(heroItem.content);
          setHero({
            badge: parsed.badge || "",
            title: parsed.title || "",
            description: parsed.description || "",
          });
        }

        const statsItem = contentList.find((c: { section: string }) => c.section === "stats");
        if (statsItem) setStats(statsItem.content);

        const annItem = contentList.find((c: { section: string }) => c.section === "announcements");
        if (annItem) setAnnouncements(annItem.content);
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [token]);

  const saveSection = async (section: string, content: string) => {
    setSaving((prev) => ({ ...prev, [section]: true }));
    setSuccess((prev) => ({ ...prev, [section]: false }));

    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ section, content }),
      });

      if (res.ok) {
        setSuccess((prev) => ({ ...prev, [section]: true }));
        setTimeout(() => setSuccess((prev) => ({ ...prev, [section]: false })), 2000);
      }
    } catch {
      // ignore
    } finally {
      setSaving((prev) => ({ ...prev, [section]: false }));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 text-[#C63134] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#16191A]">Site Settings</h2>
        <p className="text-sm text-[#666]">Manage hero section, stats, and announcements</p>
      </div>

      <Tabs defaultValue="hero">
        <TabsList>
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-[#333] mb-1.5 block">Badge Text</Label>
                <Input
                  value={hero.badge}
                  onChange={(e) => setHero((prev) => ({ ...prev, badge: e.target.value }))}
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#333] mb-1.5 block">Title</Label>
                <Input
                  value={hero.title}
                  onChange={(e) => setHero((prev) => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-[#333] mb-1.5 block">Description</Label>
                <Textarea
                  value={hero.description}
                  onChange={(e) => setHero((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => saveSection("hero", JSON.stringify(hero))}
                  disabled={saving["hero"]}
                  className="bg-[#C63134] hover:bg-[#CC383E] text-white"
                >
                  {saving["hero"] ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : <Save className="w-4 h-4 mr-1.5" />}
                  Save Hero
                </Button>
                {success["hero"] && (
                  <span className="text-sm text-[#75B740] font-medium">Saved!</span>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-[#333] mb-1.5 block">Stats JSON</Label>
                <Textarea
                  value={stats}
                  onChange={(e) => setStats(e.target.value)}
                  rows={10}
                  className="font-mono text-xs"
                />
                <p className="text-xs text-[#999] mt-1">Format: JSON array of {`{ icon, value, label, suffix }`}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => saveSection("stats", stats)}
                  disabled={saving["stats"]}
                  className="bg-[#C63134] hover:bg-[#CC383E] text-white"
                >
                  {saving["stats"] ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : <Save className="w-4 h-4 mr-1.5" />}
                  Save Stats
                </Button>
                {success["stats"] && (
                  <span className="text-sm text-[#75B740] font-medium">Saved!</span>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Announcements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-[#333] mb-1.5 block">Announcements JSON</Label>
                <Textarea
                  value={announcements}
                  onChange={(e) => setAnnouncements(e.target.value)}
                  rows={12}
                  className="font-mono text-xs"
                />
                <p className="text-xs text-[#999] mt-1">Format: JSON array of {`{ title, date, icon, color }`}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => saveSection("announcements", announcements)}
                  disabled={saving["announcements"]}
                  className="bg-[#C63134] hover:bg-[#CC383E] text-white"
                >
                  {saving["announcements"] ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : <Save className="w-4 h-4 mr-1.5" />}
                  Save Announcements
                </Button>
                {success["announcements"] && (
                  <span className="text-sm text-[#75B740] font-medium">Saved!</span>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
