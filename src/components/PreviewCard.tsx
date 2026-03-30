import { PreviewResponse } from '../types/tiktok';
import { getDownloadUrl, getThumbnailUrl } from '../services/api';

interface Props {
  data: PreviewResponse;
  originalUrl: string;
}

export const PreviewCard = ({ data, originalUrl }: Props) => {


  return (
    <div className="preview-content">
      <div className="preview-header">
        <div className="video-container">
          <video 
            src={data.videoUrl} 
            poster={getThumbnailUrl(data.thumbnail)}
            controls
            playsInline
            className="video-player"
          />
        </div>
        
        <div className="preview-info">
          <h3>{data.title}</h3>
          <p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            @{data.author}
          </p>
        </div>
      </div>

      <div className="actions-grid">
        <a className="btn btn-primary" href={getDownloadUrl('video', originalUrl)} download="tiktok-video.mp4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download MP4
        </a>
        <a className="btn btn-secondary" href={getDownloadUrl('mp3', originalUrl)} download="tiktok-audio.mp3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          Convert to MP3
        </a>
      </div>
    </div>
  );
};
