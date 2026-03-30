import { usePreview } from '../hooks/usePreview';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorAlert } from '../components/ErrorAlert';

interface HomePageProps {
  previewHook: ReturnType<typeof usePreview>;
}

export const HomePage = ({ previewHook }: HomePageProps) => {
  const { url, setUrl, status, error, handlePreview } = previewHook;

  return (
    <div className="glass-card">
      <div className="hero">
        <h1>TikTok Downloader</h1>
        <p>Download Videos & Convert to MP3 instantly.</p>
      </div>

      <form onSubmit={handlePreview} className="input-group">
        <input
          type="text"
          className="modern-input"
          placeholder="Paste TikTok link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={status === 'loading'}
        />

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
             <>
               <span className="spinner"></span> 
               Loading...
             </>
          ) : (
            'Get Video'
          )}
        </button>
      </form>

      {status === 'error' && error && <ErrorAlert message={error} />}
    </div>
  );
};
