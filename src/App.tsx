import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { PreviewPage } from './pages/PreviewPage';
import { usePreview } from './hooks/usePreview';
import { PreviewResponse } from './types/tiktok';
import './index.css';

function App() {
  const previewHook = usePreview();
  const [currentView, setCurrentView] = useState<'home' | 'preview'>('home');
  const [savedPreview, setSavedPreview] = useState<PreviewResponse | null>(null);

  useEffect(() => {
    if (previewHook.status === 'success' && previewHook.preview) {
      setSavedPreview(previewHook.preview);
      setCurrentView('preview');
    }
  }, [previewHook.status, previewHook.preview]);

  const handleBack = () => {
    previewHook.reset();
    setCurrentView('home');
    setSavedPreview(null);
  };

  return (
    <div className="app-container">
      {currentView === 'home' ? (
        <HomePage previewHook={previewHook} />
      ) : (
        savedPreview && (
          <PreviewPage 
            data={savedPreview} 
            originalUrl={previewHook.url} 
            onBack={handleBack} 
          />
        )
      )}
    </div>
  );
}

export default App;
