import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Eye,
  Crosshair,
  Smile,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  LayoutDashboard,
  FileText,
  Database,
  Sparkles,
  Settings,
  ChevronDown,
  Calendar,
  Tag,
  Bot,
  Download,
  HelpCircle,
  Activity,
  BarChart3,
  Check,
  Plus,
  ArrowRight,
  Upload,
  Quote,
  Twitter,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Heart,
  Share2,
  MessageSquare,
  Copy,
  Star,
} from "lucide-react";
import { LeadDialog } from "@/components/LeadDialog";
import { ThemeToggle, CustomCursor, Reveal } from "@/components/SiteEnhancements";
import MegaMenu, { type MegaMenuItem } from "@/components/ui/mega-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen — AI search analytics for marketing teams" },
      {
        name: "description",
        content:
          "Track, analyze, and improve how your brand appears across AI search platforms like ChatGPT, Perplexity, and Gemini.",
      },
      { property: "og:title", content: "Lumen — AI search analytics" },
      {
        property: "og:description",
        content: "Monitor brand visibility, position, and sentiment across AI answer engines.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Chip({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-chip px-2 py-1 text-[0.95em] text-chip-foreground align-middle">
      <Icon className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <section id="home">
        <Hero />
      </section>
      <section id="explore">
        <Reveal>
          <DashboardPreview />
        </Reveal>
      </section>
      <section id="categories">
        <Reveal>
          <Logos />
        </Reveal>
      </section>
      <section id="popular">
        <Reveal>
          <KeyFeatures />
        </Reveal>
      </section>
      <Reveal>
        <Testimonial />
      </Reveal>
      <section id="latest">
        <Reveal>
          <Features />
        </Reveal>
      </section>
      <Reveal>
        <FAQ />
      </Reveal>
      <section id="pricing">
        <Reveal>
          <CTA />
        </Reveal>
      </section>
      <section id="about">
        <Footer />
      </section>
    </div>
  );
}

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Explore", id: "explore" },
  { label: "Categories", id: "categories" },
  { label: "Popular", id: "popular" },
  { label: "Latest", id: "latest" },
  { label: "Pricing", id: "pricing" },
  { label: "Favorites", id: "explore" },
  { label: "About", id: "about" },
];

const MEGA_MENU_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "Products",
    subMenus: [
      {
        title: "Analytics & Insights",
        items: [
          {
            label: "Dashboard",
            description: "Live search query visibility & rankings",
            icon: LayoutDashboard,
          },
          {
            label: "AI Brand Mentions",
            description: "Track ChatGPT, Perplexity & Gemini responses",
            icon: Bot,
          },
        ],
      },
      {
        title: "Growth & Optimization",
        items: [
          {
            label: "Competitive Intelligence",
            description: "Compare citation share with market rivals",
            icon: BarChart3,
          },
          {
            label: "Content Optimization",
            description: "AI engine friendly source suggestions",
            icon: Sparkles,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Solutions",
    subMenus: [
      {
        title: "Use Cases",
        items: [
          {
            label: "B2B SaaS Marketing",
            description: "Own the AI conversation in your category",
            icon: Eye,
          },
          {
            label: "Enterprise SEO",
            description: "Adapt legacy search teams for generative AI",
            icon: Crosshair,
          },
          {
            label: "Reputation Protection",
            description: "Detect and flag hallucinated brand errors",
            icon: Activity,
          },
        ],
      },
      {
        title: "Integrations",
        items: [
          {
            label: "CRM Sync",
            description: "Connect Salesforce, HubSpot, and Pipedrive",
            icon: Database,
          },
          {
            label: "Custom API & Export",
            description: "Automate daily reporting & data streams",
            icon: Download,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Pricing",
    link: "#pricing",
  },
  {
    id: 4,
    label: "About",
    link: "#about",
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = Array.from(new Set(NAV_ITEMS.map((n) => n.id)));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 50);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-6 w-6 rounded-md bg-primary" />
          <span>lenxl</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <MegaMenu items={MEGA_MENU_ITEMS} />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#"
            className="hidden rounded-md px-3 py-1.5 text-sm text-foreground hover:bg-muted md:inline-flex"
          >
            Log in
          </a>
          <a
            href="#"
            className="hidden items-center rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 md:inline-flex"
          >
            Sign up
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          style={{ zIndex: 9998, backgroundColor: "rgba(0,0,0,0.6)" } as React.CSSProperties}
          className={`fixed inset-0 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          style={{ zIndex: 9999 } as React.CSSProperties}
          className={`fixed left-0 top-0 h-full w-[85%] max-w-sm rounded-r-3xl border-r border-border bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <div className="h-6 w-6 rounded-md bg-primary" />
              <span>lenxl</span>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="sticky top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((n) => {
              const isActive = active === n.id;
              return (
                <button
                  key={n.label}
                  onClick={() => handleClick(n.id)}
                  style={{ fontSize: "22px", fontWeight: 600, lineHeight: 1.8 }}
                  className={`relative flex items-center justify-between rounded-lg px-4 py-2 text-left transition-colors ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-primary" />
                  )}
                  <span>{n.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </button>
              );
            })}
          </nav>
          <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6">
            <a
              href="#"
              className="rounded-md border border-border px-4 py-2.5 text-center text-sm font-medium hover:bg-muted"
            >
              Log in
            </a>
            <a
              href="#"
              className="rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Sign up
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-danger opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-danger" />
          </span>
          browse---copy---bulid
        </span>

        <h1
          className="mt-7 text-[clamp(1.875rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight"
          style={{ fontFamily: '"OffBit", "Inter", sans-serif' }}
        >
          The complete libary for
          <br />
          <span className="text-muted-foreground">ui and ux designers</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-[1.05rem] leading-relaxed text-muted-foreground">
          Track, analyze, and improve brand performance on AI answer engines through key metrics
          like <Chip icon={Eye}>Visibility</Chip>, <Chip icon={Crosshair}>Position</Chip>, and{" "}
          <Chip icon={Smile}>Sentiment</Chip>.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <LeadDialog
            title="Talk to sales"
            description="Tell us about your team and we'll reach out within one business day."
            trigger={
              <button className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted">
                <span className="h-1.5 w-1.5 rounded-sm bg-muted-foreground/60" />
                Talk to sales
              </button>
            }
          />
          <LeadDialog
            trigger={
              <button className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Start free trial
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="relative px-6 pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_80px_-24px_rgba(0,0,0,0.18)]">
        <div className="grid grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="border-r border-border bg-secondary/40 p-3 text-sm">
            <div className="mb-3 flex items-center gap-2 rounded-md px-2 py-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
                A
              </div>
              <span className="font-medium">Acme's Dashboard</span>
            </div>
            <div className="mb-4 flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5 text-muted-foreground">
              <Search className="h-3.5 w-3.5" />
              <span className="text-xs">Quick actions</span>
            </div>
            <div className="px-2 text-[11px] uppercase tracking-wider text-muted-foreground">
              Pages
            </div>
            <nav className="mt-2 space-y-0.5 text-[13px]">
              <SideItem icon={LayoutDashboard} label="Overview" active />
              <SideItem icon={FileText} label="Prompts" />
              <SideItem icon={Database} label="Sources" />
              <SideItem icon={Sparkles} label="Models" />
              <SideItem icon={Settings} label="Settings" />
            </nav>
          </aside>

          {/* Main */}
          <div className="p-4">
            {/* Toolbar */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <ToolChip
                  icon={() => (
                    <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-primary text-[8px] font-bold text-primary-foreground">
                      A
                    </div>
                  )}
                >
                  Acme
                </ToolChip>
                <ToolChip icon={Calendar}>Last 7 days</ToolChip>
                <ToolChip icon={Tag}>All tags</ToolChip>
                <ToolChip icon={Bot}>All models</ToolChip>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <HelpCircle className="h-4 w-4" />
                <button className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 hover:bg-muted">
                  <Download className="h-3.5 w-3.5" /> Export
                </button>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-secondary/30 px-3 py-2 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Activity className="h-3.5 w-3.5" />
                Overview ·{" "}
                <span className="text-foreground">
                  Acme's visibility trending up 5.2% this month
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span>
                  Visibility: <span className="text-foreground font-medium">3/14</span>{" "}
                  <ArrowDownRight className="inline h-3 w-3 text-danger" />
                </span>
                <span>
                  Sentiment: <span className="text-foreground font-medium">2/14</span>{" "}
                  <ArrowUpRight className="inline h-3 w-3 text-success" />
                </span>
                <span>
                  Position: <span className="text-foreground font-medium">5/14</span>{" "}
                  <ArrowUpRight className="inline h-3 w-3 text-success" />
                </span>
              </div>
            </div>

            <GalleryGrid />
          </div>
        </div>
      </div>
    </section>
  );
}

type GalleryItem = {
  title: string;
  author: string;
  price: string;
  category: string;
  description: string;
  tags: string[];
  views: number;
  downloads: number;
  likes: number;
  date: string;
  img: string;
  prompt: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Aurora Fields",
    author: "Nia Park",
    price: "$12",
    category: "Landing",
    description: "A calm, aurora-inspired hero layout with soft gradients and typographic focus.",
    tags: ["Hero", "Gradient", "Editorial"],
    views: 12400,
    downloads: 320,
    likes: 942,
    date: "Apr 12, 2026",
    img: "https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=1200&auto=format&fit=crop&q=70",
    prompt:
      "A minimal aurora landing page with a bold serif headline, gradient sky background, and floating pricing card.",
  },
  {
    title: "Quiet Coastline",
    author: "John Doe",
    price: "Free",
    category: "Portfolio",
    description:
      "Editorial coastal portfolio with generous whitespace and slow, cinematic reveals.",
    tags: ["Portfolio", "Editorial"],
    views: 8210,
    downloads: 210,
    likes: 512,
    date: "Apr 08, 2026",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=70",
    prompt:
      "A quiet coastline portfolio with editorial spacing, muted palette, and slow scroll reveals.",
  },
  {
    title: "Neon District",
    author: "Yuki Tanaka",
    price: "$24",
    category: "Dashboard",
    description: "Neon-lit night dashboard with cyberpunk accents and dense data cards.",
    tags: ["Dashboard", "Dark", "Neon"],
    views: 21500,
    downloads: 1120,
    likes: 2044,
    date: "Apr 02, 2026",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop&q=70",
    prompt:
      "A neon cyberpunk dashboard with magenta accents, dark surfaces, and dense analytics cards.",
  },
  {
    title: "Studio Session",
    author: "Amelia Ross",
    price: "$18",
    category: "Marketing",
    description: "Warm studio-lit marketing site with product photography as the hero.",
    tags: ["Marketing", "Warm"],
    views: 6210,
    downloads: 180,
    likes: 388,
    date: "Mar 28, 2026",
    img: "https://images.unsplash.com/photo-1519336305165-fa16dea63054?w=1200&auto=format&fit=crop&q=70",
    prompt: "A warm studio-lit product marketing site with editorial imagery and confident CTAs.",
  },
  {
    title: "Alpine Draft",
    author: "Lars Berg",
    price: "Free",
    category: "Blog",
    description: "Alpine-inspired reading experience with wide margins and slow rhythm.",
    tags: ["Blog", "Reading"],
    views: 4300,
    downloads: 96,
    likes: 260,
    date: "Mar 21, 2026",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop&q=70",
    prompt: "A serene alpine blog layout with generous line-height and cold-blue accents.",
  },
  {
    title: "Type Specimen",
    author: "Ines Vidal",
    price: "$9",
    category: "Typography",
    description: "Type specimen page with weight ladder, character grid, and glyph inspector.",
    tags: ["Type", "Specimen"],
    views: 15900,
    downloads: 540,
    likes: 1201,
    date: "Mar 14, 2026",
    img: "https://images.unsplash.com/photo-1526481280695-3c469368b0d7?w=1200&auto=format&fit=crop&q=70",
    prompt:
      "A modern type specimen page with a variable-font weight slider and glyph inspector grid.",
  },
  {
    title: "Warm Interior",
    author: "Marco Ali",
    price: "$14",
    category: "Ecommerce",
    description: "Warm-toned interior ecommerce with slow product carousels and rich color.",
    tags: ["Ecommerce", "Warm"],
    views: 9800,
    downloads: 410,
    likes: 720,
    date: "Mar 07, 2026",
    img: "https://images.unsplash.com/photo-1505692433770-36f19f51681d?w=1200&auto=format&fit=crop&q=70",
    prompt:
      "An interior-goods ecommerce site with warm-toned photography and calm product carousels.",
  },
  {
    title: "Long Exposure",
    author: "Priya Nair",
    price: "Free",
    category: "Editorial",
    description: "Long-exposure photo editorial with immersive scrolling and pinned captions.",
    tags: ["Editorial", "Photo"],
    views: 5600,
    downloads: 132,
    likes: 344,
    date: "Feb 28, 2026",
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&auto=format&fit=crop&q=70",
    prompt: "A long-exposure photo essay with immersive scrolling and pinned editorial captions.",
  },
  {
    title: "Paper Grid",
    author: "Sam Cole",
    price: "$16",
    category: "Docs",
    description: "Paper-inspired documentation site with a strict typographic grid.",
    tags: ["Docs", "Grid"],
    views: 7400,
    downloads: 288,
    likes: 402,
    date: "Feb 20, 2026",
    img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&auto=format&fit=crop&q=70",
    prompt: "A paper-inspired docs site with a strict grid, soft shadows, and pill navigation.",
  },
];

function GalleryGrid() {
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const copyPrompt = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard?.writeText(item.prompt).catch(() => {});
    toast.success("Prompt copied!");
  };

  const toggleLike = (title: string) => {
    setLikes((l) => ({ ...l, [title]: !l[title] }));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {GALLERY_ITEMS.map((it, i) => (
          <div
            key={it.title}
            role="button"
            tabIndex={0}
            onClick={() => setOpenItem(it)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setOpenItem(it);
              }
            }}
            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[18px] border border-border bg-card text-left shadow-sm transition-all duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_60px_-20px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)]"
            style={{ animation: `fade-in 0.5s ease-out ${i * 50}ms both` }}
          >
            <div
              className="relative w-full overflow-hidden bg-muted"
              style={{ aspectRatio: "16 / 9" }}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <button
                onClick={(e) => copyPrompt(e, it)}
                className="absolute bottom-3 right-3 inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:opacity-90"
              >
                <Copy className="h-3.5 w-3.5" /> Copy Prompt
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-foreground">{it.title}</div>
                <div className="truncate text-xs text-muted-foreground">{it.author}</div>
              </div>
              <div
                className={`shrink-0 text-xs font-semibold ${it.price === "Free" ? "text-success" : "text-foreground"}`}
              >
                {it.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <DesignModal
        item={openItem}
        open={!!openItem}
        onOpenChange={(v) => !v && setOpenItem(null)}
        liked={openItem ? !!likes[openItem.title] : false}
        onToggleLike={() => openItem && toggleLike(openItem.title)}
        onOpenItem={setOpenItem}
      />
    </>
  );
}

function DesignModal({
  item,
  open,
  onOpenChange,
  liked,
  onToggleLike,
  onOpenItem,
}: {
  item: GalleryItem | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  liked: boolean;
  onToggleLike: () => void;
  onOpenItem: (i: GalleryItem) => void;
}) {
  if (!item) return null;
  const related = GALLERY_ITEMS.filter((g) => g.title !== item.title).slice(0, 4);
  const copyPrompt = () => {
    navigator.clipboard?.writeText(item.prompt).catch(() => {});
    toast.success("Prompt copied!");
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-6xl gap-0 overflow-hidden rounded-2xl border-border bg-card p-0 sm:w-[90vw]">
        <div className="max-h-[90vh] overflow-y-auto">
          <div
            className="relative w-full overflow-hidden bg-muted"
            style={{ aspectRatio: "16 / 9" }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-secondary px-2 py-0.5">
                  {item.category}
                </span>
                <span>·</span>
                <span>{item.date}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {item.title}
              </h2>
              <div className="mt-1 text-sm text-muted-foreground">by {item.author}</div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={onToggleLike}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition-all ${
                    liked
                      ? "border-danger bg-danger/10 text-danger"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 transition-transform ${liked ? "scale-110 fill-current" : ""}`}
                  />
                  {liked ? "Liked" : "Like"}
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm hover:bg-muted">
                  <Star className="h-4 w-4" /> Reviews
                </button>
                <button
                  onClick={copyPrompt}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  <Copy className="h-4 w-4" /> Copy Prompt
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href).catch(() => {});
                    toast.success("Link copied!");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm hover:bg-muted"
                >
                  <Share2 className="h-4 w-4" /> Share
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm hover:bg-muted">
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">Reviews</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-current text-amber-500" />
                    <span className="font-medium">4.8</span>
                    <span className="text-muted-foreground">(126)</span>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    {
                      name: "Ava Ito",
                      rating: 5,
                      comment: "Beautifully composed. The spacing rhythm is chef's kiss.",
                      date: "Apr 14, 2026",
                    },
                    {
                      name: "Diego Lima",
                      rating: 4,
                      comment: "Loved the palette. Would use for a client pitch.",
                      date: "Apr 10, 2026",
                    },
                  ].map((r) => (
                    <div key={r.name} className="rounded-xl border border-border bg-background p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-200 to-rose-300" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">{r.name}</div>
                            <div className="text-xs text-muted-foreground">{r.date}</div>
                          </div>
                          <div className="mt-0.5 flex text-amber-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3.5 w-3.5 ${i < r.rating ? "fill-current" : "opacity-30"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{r.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-3">
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Price</div>
                <div
                  className={`mt-1 text-2xl font-semibold ${item.price === "Free" ? "text-success" : ""}`}
                >
                  {item.price}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Views", value: item.views },
                  { label: "Downloads", value: item.downloads },
                  { label: "Likes", value: item.likes },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-background p-3 text-center"
                  >
                    <div className="text-sm font-semibold">{s.value.toLocaleString()}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="border-t border-border p-6 md:p-8">
            <h3 className="text-lg font-semibold tracking-tight">Related designs</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((r) => (
                <button
                  key={r.title}
                  onClick={() => onOpenItem(r)}
                  className="group overflow-hidden rounded-xl border border-border bg-background text-left transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <div
                    className="relative w-full overflow-hidden bg-muted"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <img
                      src={r.img}
                      alt={r.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2">
                    <div className="min-w-0">
                      <div className="truncate text-xs font-medium">{r.title}</div>
                      <div className="truncate text-[11px] text-muted-foreground">{r.author}</div>
                    </div>
                    <div
                      className={`text-[11px] font-semibold ${r.price === "Free" ? "text-success" : ""}`}
                    >
                      {r.price}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SideItem({
  icon: Icon,
  label,
  active,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left ${
        active ? "bg-card border border-border" : "text-muted-foreground hover:bg-muted"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}

function ToolChip({
  icon: Icon,
  children,
  small,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border border-border bg-card text-foreground ${
        small ? "px-1.5 py-0.5" : "px-2 py-1"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Chart() {
  // Simple inline SVG line chart
  const lines = [
    {
      color: "oklch(0.55 0.18 250)",
      d: "M0,80 C40,70 80,55 120,50 S200,30 240,35 320,20 360,25 440,18 480,22",
    },
    {
      color: "oklch(0.62 0.18 25)",
      d: "M0,95 C40,90 80,85 120,75 S200,55 240,58 320,45 360,40 440,35 480,30",
    },
    {
      color: "oklch(0.7 0.16 90)",
      d: "M0,110 C40,108 80,100 120,95 S200,80 240,82 320,70 360,65 440,55 480,48",
    },
    {
      color: "oklch(0.6 0.14 145)",
      d: "M0,130 C40,125 80,120 120,115 S200,100 240,98 320,90 360,85 440,75 480,70",
    },
  ];
  return (
    <div className="relative h-56 w-full">
      <svg viewBox="0 0 480 160" className="h-full w-full" preserveAspectRatio="none">
        {[0, 40, 80, 120].map((y) => (
          <line
            key={y}
            x1="0"
            x2="480"
            y1={y}
            y2={y}
            stroke="var(--color-border)"
            strokeDasharray="2 4"
          />
        ))}
        {lines.map((l, i) => (
          <path key={i} d={l.d} fill="none" stroke={l.color} strokeWidth="1.8" />
        ))}
        <line x1="320" x2="320" y1="0" y2="160" stroke="var(--color-border)" />
      </svg>
      <div className="absolute right-3 top-1 rounded-md border border-border bg-card p-2 text-[10px] shadow-sm">
        <div className="mb-1 font-medium">April 2026</div>
        {[
          ["Monday", "65%", "oklch(0.55 0.18 250)"],
          ["Salesforce", "62%", "oklch(0.62 0.18 25)"],
          ["Acme", "47%", "oklch(0.7 0.16 90)"],
          ["Zero", "32%", "oklch(0.6 0.14 145)"],
        ].map(([n, v, c]) => (
          <div key={n} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: c as string }} />
              {n}
            </span>
            <span className="font-medium">{v}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 text-[10px] text-muted-foreground">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function Logos() {
  const names = ["ChatGPT", "Perplexity", "Gemini", "Claude", "Copilot", "Grok"];
  return (
    <section className="border-y border-border bg-secondary/30 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 text-center text-xs uppercase tracking-wider text-muted-foreground">
          Monitoring across every major AI answer engine
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-medium text-muted-foreground">
          {names.map((n) => (
            <span key={n} className="tracking-tight">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Eye,
      title: "Visibility",
      body: "See how often your brand surfaces in AI answers across thousands of tracked prompts.",
    },
    {
      icon: Crosshair,
      title: "Position",
      body: "Know where you rank inside generated responses — first mention, citation, or footnote.",
    },
    {
      icon: Smile,
      title: "Sentiment",
      body: "Measure how AI describes your brand and catch reputation shifts before they spread.",
    },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">
          The metrics that matter
          <br />
          <span className="text-muted-foreground">in the age of AI answers.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="card-lift rounded-xl border border-border bg-card p-6 text-left"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary">
                <it.icon className="h-4 w-4" />
              </div>
              <div className="text-lg font-semibold tracking-tight">{it.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-primary p-12 text-center text-primary-foreground">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">
          Start tracking your AI presence today.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70">
          14-day free trial. No credit card required.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <LeadDialog
            trigger={
              <button className="rounded-md bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:opacity-90">
                Start free trial
              </button>
            }
          />
          <LeadDialog
            title="Talk to sales"
            description="Tell us about your team and we'll reach out within one business day."
            trigger={
              <button className="rounded-md border border-primary-foreground/30 px-4 py-2.5 text-sm font-medium hover:bg-primary-foreground/10">
                Talk to sales
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}

function KeyFeatures() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Key features
          </span>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Turn AI search insights into new customers with Lumen.
            </h2>
            <p className="self-end border-l border-border pl-5 text-muted-foreground">
              Identify the prompts that matter, monitor your rankings, and act before your
              competitors do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FeatureCard
            title="Set up Prompts"
            body="Prompts are the foundation of your AI search strategy. Uncover and organize the prompts that matter most for your team."
            visual={<PromptsVisual />}
          />
          <FeatureCard
            title="Use Data to Pick Winners"
            body="Leverage AI-suggested prompts and search volumes to focus on the biggest opportunities first."
            visual={<SuggestedVisual />}
          />
          <FeatureCard
            title="Add Brands"
            body="See how you rank against the players that matter in your market."
            visual={<BrandsVisual />}
            tall
          />
          <FeatureCard
            title="Choose AI Models"
            body="Track rankings across the models that drive the most traffic and visibility."
            visual={<ModelsVisual />}
            tall
          />
          <FeatureCard
            title="Find Key Sources"
            body="Spot the citations shaping your visibility and refine your generative engine optimization strategy."
            visual={<SourcesVisual />}
          />
          <FeatureCard
            title="Act on Insights"
            body="Use recommendations to capture high-impact opportunities and boost your ranking."
            visual={<InsightsVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  visual,
  tall,
}: {
  title: string;
  body: string;
  visual: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <div className="card-lift overflow-hidden rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
      <div className={`mt-6 ${tall ? "h-64" : "h-56"} relative overflow-hidden`}>{visual}</div>
    </div>
  );
}

function PromptsVisual() {
  return (
    <div className="absolute inset-x-0 top-0 rounded-lg border border-border bg-card p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <FileText className="h-3.5 w-3.5" /> Tracked prompts
        </span>
        <span className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary px-1.5 py-0.5 text-[10px]">
          <Upload className="h-3 w-3" /> Bulk import CSV
        </span>
      </div>
      <div className="space-y-1.5 text-xs">
        {[
          ["Best CRMs for fast-growing companies", "84%"],
          ["CRM with strong automation workflows", "61%"],
          ["Top sales pipeline tools 2026", "58%"],
        ].map(([q, v]) => (
          <div
            key={q}
            className="flex items-center justify-between rounded-md border border-border bg-secondary/40 px-2 py-1.5"
          >
            <span className="truncate text-foreground">{q}</span>
            <span className="text-muted-foreground">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-border bg-background p-2 text-xs">
        <div className="mb-1.5 font-medium">Pipeline tools for fast-growing companies?</div>
        <div className="grid grid-cols-3 gap-1.5 text-[10px]">
          <Mini label="Tags" value="problem-aware" />
          <Mini label="Location" value="US" />
          <Mini label="Est. volume" value="median" />
        </div>
      </div>
    </div>
  );
}

function SuggestedVisual() {
  const swayClass = [
    "animate-swipe-sway",
    "animate-swipe-sway-delay-1",
    "animate-swipe-sway-delay-2",
  ];
  return (
    <div className="absolute inset-0">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`absolute left-0 right-0 ${swayClass[i]}`}
          style={{ top: `${i * 22}px` }}
        >
          <div
            className="rounded-lg border border-border bg-card p-3 shadow-sm"
            style={{ transform: `rotate(${(i - 1) * 1.2}deg)` }}
          >
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>Suggested prompts (14)</span>
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div className="text-sm font-medium">
              Best CRM software with intuitive user interfaces and customizable workflows
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
              <span className="rounded-md border border-border bg-secondary px-1.5 py-0.5">
                Auto-tagged
              </span>
              <span className="rounded-md border border-border bg-secondary px-1.5 py-0.5">
                High volume
              </span>
              <span
                className="rounded-md border border-border px-1.5 py-0.5"
                style={{ background: "oklch(0.92 0.06 300)" }}
              >
                Solution aware
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BrandsVisual() {
  const rows = [
    { name: "Monday", url: "monday.com", color: "oklch(0.7 0.18 25)", action: "+ Start tracking" },
    {
      name: "Pipedrive",
      url: "pipedrive.com",
      color: "oklch(0.55 0.18 145)",
      action: "✓ Actively tracking",
    },
    { name: "Acme", url: "acme.com", color: "oklch(0.6 0.18 250)", action: "✓ You" },
  ];
  return (
    <div className="absolute inset-0">
      <div className="absolute right-2 top-0 inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-0.5 text-[11px] text-muted-foreground shadow-sm">
        Brands <span className="text-foreground">(5)</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.name}
          className="absolute left-0 right-0 flex items-center justify-between rounded-lg border border-border bg-card p-2.5 shadow-sm"
          style={{ top: `${28 + i * 56}px`, transform: `rotate(${(i - 1) * 1}deg)` }}
        >
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-md" style={{ background: r.color }} />
            <div className="text-xs">
              <div className="font-medium">{r.name}</div>
              <div className="text-muted-foreground">{r.url}</div>
            </div>
          </div>
          <span className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px]">
            {r.action}
          </span>
        </div>
      ))}
    </div>
  );
}

function ModelsVisual() {
  const models = [
    { name: "ChatGPT", checked: true },
    { name: "AI Overviews", checked: true },
    { name: "Claude", checked: true },
    { name: "DeepSeek R1", checked: false },
    { name: "Perplexity", checked: false },
    { name: "Gemini", checked: false },
    { name: "Grok", checked: false },
  ];
  return (
    <div className="absolute inset-x-0 top-0 rounded-lg border border-border bg-card p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 font-medium">
          <Bot className="h-3.5 w-3.5" /> Models
        </span>
        <span className="text-muted-foreground">Set frequency: Daily ▾</span>
      </div>
      <div className="space-y-1">
        {models.map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between rounded-md px-1 py-1 text-xs"
          >
            <span className="flex items-center gap-2">
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                  m.checked ? "border-primary bg-primary text-primary-foreground" : "border-border"
                }`}
              >
                {m.checked && <Check className="h-3 w-3" />}
              </span>
              {m.name}
            </span>
            <span className="h-4 w-4 rounded-full bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SourcesVisual() {
  const rows = [
    { d: "reddit.com", t: "UGC", u: "32%", c: "3.2" },
    { d: "lumen.com", t: "You", u: "43%", c: "5.2", self: true },
    { d: "wikipedia.org", t: "Reference", u: "31%", c: "1.4" },
    { d: "competitor.io", t: "Competitor", u: "39%", c: "1.1" },
  ];
  return (
    <div className="absolute inset-x-0 top-0 rounded-lg border border-border bg-card p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-0.5">
          <Search className="h-3 w-3" /> Search sources
        </span>
        <span className="text-muted-foreground">All types ▾</span>
      </div>
      <table className="w-full text-xs">
        <thead className="text-muted-foreground">
          <tr className="border-b border-border">
            <th className="py-1 text-left font-normal">Domain</th>
            <th className="py-1 text-left font-normal">Type</th>
            <th className="py-1 text-right font-normal">Used</th>
            <th className="py-1 text-right font-normal">Cit.</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.d} className="border-b border-border/60 last:border-0">
              <td className="py-1.5">{r.d}</td>
              <td className="py-1.5">
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] ${
                    r.self ? "bg-green-100 text-green-800" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {r.t}
                </span>
              </td>
              <td className="py-1.5 text-right">{r.u}</td>
              <td className="py-1.5 text-right">{r.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InsightsVisual() {
  const items = [
    "Review sites are regularly cited — make sure you have a profile",
    "LinkedIn is a common source — consider joining the conversation",
    "Join r/CRM subreddit discussions — show frequently in sources",
    "Articles from NYT regularly show up — place a story via digital PR",
  ];
  return (
    <div className="absolute inset-0 space-y-1.5">
      {items.map((t, i) => (
        <div
          key={t}
          className={`flex items-center justify-between rounded-lg border border-border p-2.5 text-xs ${
            i === 2 ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
          }`}
        >
          <span className="truncate">{t}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
        </div>
      ))}
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-secondary/40 px-1.5 py-1">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="truncate text-[10px] font-medium">{value}</div>
    </div>
  );
}

function Testimonial() {
  return (
    <section className="border-y border-border bg-secondary/40 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto h-6 w-6 text-muted-foreground" />
        <p className="mt-4 font-display text-2xl leading-relaxed tracking-tight md:text-3xl">
          Metrics like brand mentions, impressions, and sentiment are hard to track — which is why
          lenxl is so powerful: it shows how LLMs are framing our brand.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-rose-300" />
          <div className="text-left text-sm">
            <div className="font-medium">Riley Chen</div>
            <div className="text-muted-foreground">Head of Growth, Northwind</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "What is lenxl?",
      a: "lenxl is an AI search analytics platform. We monitor how your brand appears in answers from ChatGPT, Perplexity, Gemini, Claude, and other answer engines.",
    },
    {
      q: "Which AI models do you track?",
      a: "ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, DeepSeek, and Google's AI Overviews. New models are added as they reach meaningful market share.",
    },
    {
      q: "How is this different from SEO tools?",
      a: "Traditional SEO tools track blue-link rankings. lenxl tracks generative answers — what AI models actually say about your brand, how often, and in what context.",
    },
    {
      q: "Do I need a credit card to start?",
      a: "No. The 14-day trial is free and requires no card. You'll only be asked for billing details if you choose to continue after the trial.",
    },
    {
      q: "Can I export the data?",
      a: "Yes. Every report, prompt set, and competitor table is exportable as CSV. We also offer an API on team and enterprise plans.",
    },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Questions, answered.
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="rounded-xl border border-border bg-card px-5"
        >
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-0">
              <AccordionTrigger className="text-left text-base font-medium">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Changelog", "Roadmap", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Customers", "Press", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Guides", "Help center", "API docs", "Status"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
    },
  ];
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <div className="h-6 w-6 rounded-md bg-primary" />
              <span>lenxl</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              AI search analytics for marketing teams that want to win the generative web.
            </p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="card-lift inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} lenxl Labs, Inc. All rights reserved.</span>
          <span>Made for the AI-answer era.</span>
        </div>
      </div>
    </footer>
  );
}
