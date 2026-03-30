export interface PreviewResponse {
  title: string;
  author: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
}

export interface ApiPreviewResult {
  success: boolean;
  data?: PreviewResponse;
  message?: string;
}

export type AppStateStatus = 'idle' | 'loading' | 'success' | 'error';
