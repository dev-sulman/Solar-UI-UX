import { Zap, Sun, Award, Clock } from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { label: "Active Project", value: "12", icon: Zap, color: "text-amber-500" },
        { label: "Solar Experts", value: "8", icon: Sun, color: "text-yellow-500" },
        { label: "Awards Won", value: "15", icon: Award, color: "text-accent" },
        { label: "Hours Consulting", value: "1,240", icon: Clock, color: "text-blue-500" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div>
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>
                <p className="text-muted-foreground mt-2">Welcome back, Dr. Mahmoud.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg bg-muted ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8 rounded-3xl bg-card border border-border">
                    <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                                    S
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium">New Solar Expert Profile Created</h4>
                                    <p className="text-sm text-muted-foreground">Expert profile for John Doe has been published.</p>
                                </div>
                                <span className="text-xs text-muted-foreground">2h ago</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-accent">Quick Actions</h3>
                        <p className="text-sm text-accent/70 mb-6">Manage your solar consulting portal with ease.</p>

                        <div className="space-y-3">
                            <button className="w-full py-3 px-4 rounded-xl bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all">
                                New Blog Post
                            </button>
                            <button className="w-full py-3 px-4 rounded-xl bg-card border border-accent/20 text-accent font-bold hover:bg-accent/10 transition-all">
                                Add Solar Expert
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-accent/10">
                        <p className="text-xs text-accent/50 text-center italic">
                            "Powering the future, one panel at a time."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
