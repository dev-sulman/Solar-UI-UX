import { LayoutDashboard, Users, FileText, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-xl fixed h-full z-50">
                <div className="p-6">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
                        Admin Portal
                    </h2>
                </div>

                <nav className="px-4 space-y-2">
                    {[
                        { icon: LayoutDashboard, label: "Dashboard", active: true },
                        { icon: Users, label: "Experts" },
                        { icon: FileText, label: "Blog Posts" },
                        { icon: Settings, label: "Settings" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${item.active
                                    ? "bg-accent/10 text-accent border border-accent/20"
                                    : "text-muted-foreground hover:bg-muted"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="absolute bottom-6 left-4 right-4">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
