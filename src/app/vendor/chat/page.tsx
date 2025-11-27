"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Send, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Avatars from "@/components/reusable/avater";

// --------------------- Types ---------------------
interface Contact {
  id: number;
  name: string;
  initials: string;
  preview: string;
  time: string;
  avatar: string;
  role?: string;
}

interface Message {
  id: number;
  sender: "user" | "contact";
  text: string;
  time: string;
}

// --------------------- Constants ---------------------
const defaultUserAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Man";

const contacts: Contact[] = [
  // ... your 40 contacts here
];

// --------------------- Message Bubble ---------------------
function MessageBubble({
  type,
  avatarSrc,
  message,
  time,
}: {
  type: "incoming" | "outgoing";
  avatarSrc: string;
  message: string;
  time: string;
}) {
  const isIncoming = type === "incoming";
  return (
    <div
      className={`flex items-end ${isIncoming ? "justify-start" : "justify-end"}`}
    >
      {isIncoming && (
        <Avatars
          src={avatarSrc}
          fallback="C"
          className="w-10 h-10 mr-2 rounded-full"
          alt="Contact Avatar"
        />
      )}
      <div
        className={`flex flex-col max-w-[70%] p-3 rounded-lg ${
          isIncoming
            ? "bg-gray-100 text-gray-800 rounded-bl-none"
            : "bg-[#F7F3EB] text-gray-800 rounded-br-none"
        }`}
      >
        <p className="text-sm break-words">{message}</p>
        <span className="text-xs text-gray-500 mt-1 self-end">{time}</span>
      </div>
      {!isIncoming && (
        <Avatars
          src={avatarSrc || defaultUserAvatar}
          fallback="U"
          className="w-10 h-10 ml-2 rounded-full"
          alt="User Avatar"
        />
      )}
    </div>
  );
}

// --------------------- Chat Box ---------------------
interface ChatBoxProps {
  selectedContact: Contact | null;
  messages: Message[];
  messageInput: string;
  setMessageInput: (value: string) => void;
  handleSendMessage: () => void;
  onBack?: () => void;
}

function ChatBox({
  selectedContact,
  messages,
  messageInput,
  setMessageInput,
  handleSendMessage,
  onBack,
}: ChatBoxProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!selectedContact) return null;

  return (
    <div className="flex-1 flex flex-col h-full border rounded-md">
      {/* Header */}
      <div className="m-5 border-b">
        <div className="flex pb-4 space-x-2 items-center">
          {onBack && (
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden mr-2 hover:bg-transparent border rounded-full"
              onClick={onBack}
            >
              <ArrowLeft size={18} />
            </Button>
          )}
          <Avatars
            src={selectedContact.avatar}
            fallback={selectedContact.initials}
            alt={selectedContact.name}
          />
          <div>
            <h2 className="font-semibold text-foreground truncate">
              {selectedContact.name}
            </h2>
            {selectedContact.role && (
              <p className="text-xs text-muted-foreground">
                {selectedContact.role}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            type={message.sender === "user" ? "outgoing" : "incoming"}
            avatarSrc={
              message.sender === "user"
                ? defaultUserAvatar
                : selectedContact.avatar
            }
            message={message.text}
            time={message.time}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="py-5 px-5 md:px-10 border-t flex items-center gap-3">
        <Input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          className="flex-1 bg-muted border-0 text-foreground placeholder:text-muted-foreground rounded-full focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <Button
          onClick={handleSendMessage}
          size="icon"
          className="rounded-full bg-primary/60 hover:bg-primary"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
}

// --------------------- Messaging App ---------------------
export default function MessagingApp() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    contacts[0]
  );

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "contact", text: "Hi, how are you?", time: "10:36 AM" },
    { id: 2, sender: "user", text: "Hello! I am fine 😊", time: "10:37 AM" },
  ]);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    const trimmedMessage = messageInput.trim();
    if (!trimmedMessage) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: trimmedMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  return (
    <div className="flex h-[calc(100vh-90px)] w-full gap-x-5 container mx-auto my-10">
      {/* Sidebar */}
      <div
        className={`p-4 w-full lg:w-80 border h-full rounded-md overflow-y-auto ${
          isResponsive ? "hidden" : "block"
        } lg:block`}
      >
        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 bg-muted text-foreground placeholder:text-muted-foreground border-0 rounded-md"
          />
        </div>
        <div>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => {
                setSelectedContact(contact);
                setIsResponsive(true);
              }}
              className={`px-4 py-3 border-b cursor-pointer transition-colors ${
                selectedContact?.id === contact.id
                  ? "bg-muted"
                  : "hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatars
                  src={contact.avatar}
                  fallback={contact.initials}
                  alt={contact.name}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold text-foreground truncate">
                      {contact.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {contact.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`flex-1 ${isResponsive ? "block" : "hidden"} lg:block`}>
        <ChatBox
          selectedContact={selectedContact}
          messages={messages}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          handleSendMessage={handleSendMessage}
          onBack={() => setIsResponsive(false)}
        />
      </div>
    </div>
  );
}
