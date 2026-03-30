import { ApiPreviewResult } from '../types/tiktok';

const API_BASE = 'https://tiktokdownloadskkh.duckdns.org/api/tiktok';

export const fetchPreview = async (url: string): Promise<ApiPreviewResult> => {
  try {
    const res = await fetch(`${API_BASE}/preview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => null);
      throw new Error(errData?.message || 'Failed to fetch video preview.');
    }

    return await res.json();
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'Network error fetching preview.',
    };
  }
};

export const getDownloadUrl = (type: 'video' | 'mp3', url: string) => {
  return `${API_BASE}/download/${type}?url=${encodeURIComponent(url)}`;
};

export const getThumbnailUrl = (imageUrl: string) => {
  if (!imageUrl) return '';
  return `${API_BASE}/thumbnail?url=${encodeURIComponent(imageUrl)}`;
};
