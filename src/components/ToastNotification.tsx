import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, CheckCircle, Zap } from "lucide-react";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "success" as const,
    icon: CheckCircle,
    title: "✨ Buffet artesanal desde 17,80€ · Todos los días",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    delay: 2000,
  },
  {
    id: 2,
    type: "warning" as const,
    icon: Zap,
    title: "🔥 Sushi fresco preparado al momento en tu mesa",
    color: "text-sushi-coral",
    bgColor: "bg-sushi-coral/10",
    borderColor: "border-sushi-coral/30",
    delay: 8000,
  },
  {
    id: 3,
    type: "info" as const,
    icon: AlertCircle,
    title: "💫 Ubicado en Calle San Agustín 6 · Centro histórico",
    color: "text-sushi-neon",
    bgColor: "bg-sushi-neon/10",
    borderColor: "border-sushi-neon/30",
    delay: 14000,
  },
];

export default function ToastNotification() {
  const [activeToast, setActiveToast] = useState<number | null>(null);

  useEffect(() => {
    const timers = NOTIFICATIONS.map(notif => {
      return setTimeout(() => {
        setActiveToast(notif.id);
        // Auto-hide after 5 seconds
        setTimeout(() => setActiveToast(null), 5000);
      }, notif.delay);
    });

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <AnimatePresence mode="wait">
      {NOTIFICATIONS.map(notif => {
        if (activeToast !== notif.id) return null;

        const Icon = notif.icon;

        return (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveToast(null)}
            className={`fixed bottom-8 right-6 max-w-sm z-50 p-4 rounded-xl border
                        ${notif.bgColor} ${notif.borderColor} ${notif.color}
                        backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                        hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:scale-105
                        transition-all duration-300 cursor-pointer group`}
          >
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon className="w-5 h-5 shrink-0 mt-0.5" />
              </motion.div>
              <div>
                <p className="font-sans text-sm font-semibold text-white">
                  {notif.title}
                </p>
              </div>
              <motion.div
                className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Progress bar */}
            <motion.div
              className={`absolute bottom-0 left-0 h-0.5 ${notif.color.replace("text-", "bg-")}`}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
