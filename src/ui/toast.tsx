import * as React from "react";
import { useToast } from "@/hooks/use-toast";

export interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
}

export const Toast: React.FC<ToastProps> = ({ open, onOpenChange, title, description, action }) => {
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    if (open && !isExiting) {
      const timer = setTimeout(() => {
        setIsExiting(true); // Start exit animation
      }, 4000); // Display for 4s
      return () => clearTimeout(timer);
    }
    if (isExiting) {
      const animationTimer = setTimeout(() => {
        onOpenChange(false); // Unmount after animation
      }, 500); // Animation duration (0.5s)
      return () => clearTimeout(animationTimer);
    }
  }, [open, isExiting, onOpenChange]);

  if (!open && !isExiting) return null;

  return (
    <div
      className={`w-[300px] bg-white rounded-lg p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.2)] ${
        open && !isExiting ? "toast-enter" : "toast-exit"
      }`}
    >
      {title && <h3 className="text-sm font-semibold text-[#4182F9]">{title}</h3>}
      {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
};

export const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map((toast: { id: React.Key | null | undefined; open: boolean; onOpenChange: (open: boolean) => void; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; action: React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | undefined; }) => (
        <Toast
          key={toast.id}
          open={toast.open}
          onOpenChange={toast.onOpenChange}
          title={toast.title}
          description={toast.description}
          action={toast.action}
        />
      ))}
    </div>
  );
};