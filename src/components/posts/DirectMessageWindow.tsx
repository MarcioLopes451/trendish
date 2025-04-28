
import { useState } from "react";
import  Button  from "@/ui/Button";
import { Input } from "@/ui/Input";
import { X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DirectMessageWindowProps {
  username: string;
  onClose: () => void;
  onSend: (message: string) => void;
}

export const DirectMessageWindow = ({ 
  username, 
  onClose, 
  onSend 
}: DirectMessageWindowProps) => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
      toast({
        title: "Success",
        description: `Message sent to ${username}`,
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="absolute bottom-10 left-0 z-50 w-[300px] rounded-lg bg-white p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[14px] font-semibold text-black">
          Message {username}
        </p>
        <Button 
         ariaLabel="Close message window"
          className="inline-flex items-center justify-center h-6 w-6 text-gray-500 hover:text-black rounded-md transition-colors"
          onclick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex gap-2">
        <Input
          className="bg-white rounded-lg border border-black p-2 text-[12px] text-black placeholder:text-black focus:outline-none"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Direct message input"
        />
        <Button 
         className="inline-flex items-center justify-center h-10 w-10 px-3 bg-Black text-[#f8fafc] hover:bg-[#0f172ae6] rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          ariaLabel="Send message"
          onclick={handleSend}
          
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div> 
  );
};