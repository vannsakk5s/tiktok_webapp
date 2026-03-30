import { useState } from 'react';
import { fetchPreview } from '../services/api';
import { PreviewResponse, AppStateStatus } from '../types/tiktok';

export const usePreview = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<AppStateStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<PreviewResponse | null>(null);

  const handlePreview = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a valid TikTok URL');
      setStatus('error');
      return;
    }

    if (!url.includes('tiktok.com')) {
      setError('Does not look like a valid TikTok URL');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError(null);
    setPreview(null);

    const result = await fetchPreview(url);

    if (result.success && result.data) {
      setPreview(result.data);
      setStatus('success');
    } else {
      setError(result.message || 'An error occurred fetching the preview.');
      setStatus('error');
    }
  };

  const reset = () => {
    setStatus('idle');
    setPreview(null);
    setError(null);
    setUrl('');
  };

  return {
    url,
    setUrl,
    status,
    error,
    preview,
    handlePreview,
    reset,
  };
};
