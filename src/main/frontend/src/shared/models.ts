export interface Tool {
  name: string;
  description: string;
}

export interface McpServer {
  name: string;
  serverName: string;
  healthy: boolean;
  tools: Tool[];
  protocol?: {
    type: string;
    displayName: string;
    bindingKey: string;
  };
}

export interface PromptArgument {
  name: string;
  description: string;
  required: boolean;
  defaultValue?: any;
  schema?: any;
}

export interface McpPrompt {
  serverId: string;
  serverName: string;
  name: string;
  description: string;
  arguments: PromptArgument[];
}

export interface EnhancedPromptMetrics {
  totalPrompts: number;
  serversWithPrompts: number;
  available: boolean;
  promptsByServer: { [serverId: string]: McpPrompt[] };
}

export interface PlatformMetrics {
  conversationId: string;
  chatModel: string;
  embeddingModel: string;
  vectorStoreName: string;
  mcpServers: McpServer[];
  prompts: EnhancedPromptMetrics;
}
