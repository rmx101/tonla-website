export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface Conversation {
  id: number;
  session_id: string;
  messages: ChatMessage[];
  is_qualified: boolean;
  company_name: string | null;
  industry: string | null;
  monthly_volume: string | null;
  contact_info: string | null;
  rejected_reason: string | null;
  created_at: string;
  updated_at: string;
}
