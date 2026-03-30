import { PreviewCard } from '../components/PreviewCard';
import { PreviewResponse } from '../types/tiktok';

interface PreviewPageProps {
  data: PreviewResponse;
  originalUrl: string;
  onBack: () => void;
}

export const PreviewPage = ({ data, originalUrl, onBack }: PreviewPageProps) => {
  return (
    <div className="glass-card">
      <button className="btn back-link" onClick={onBack} style={{ display: 'inline-flex', padding: 0, background: 'none', border: 'none', color: 'var(--text-muted)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Download another video
      </button>

      <PreviewCard data={data} originalUrl={originalUrl} />
    </div>
  );
};
