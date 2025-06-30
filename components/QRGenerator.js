import React, { useState, useRef, useEffect, useCallback } from 'react';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';

const QRGenerator = () => {
  const [text, setText] = useState('https://instant-qr.vercel.app');
  const [logoFile, setLogoFile] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const [qrSize, setQrSize] = useState(256);
  const [isGenerating, setIsGenerating] = useState(false);
  const qrRef = useRef(null);
  const fileInputRef = useRef(null);

  // Handle logo file upload
  const handleLogoUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  // Remove logo
  const removeLogo = useCallback(() => {
    setLogoFile(null);
    setLogoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  // Download QR code as PNG
  const downloadQR = useCallback(async () => {
    if (!qrRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(qrRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const link = document.createElement('a');
      link.download = `instant-qr-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Error generating QR code. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  }, []);

  // Determine QR size based on screen size
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setQrSize(180);  // Smaller for mobile
      } else if (window.innerWidth < 1024) {
        setQrSize(220);  // Medium for tablet
      } else {
        setQrSize(280);  // Larger for desktop
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-4 md:p-6 lg:p-8 backdrop-pattern">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start lg:items-center">
            
            {/* Input Section - Left aligned */}
            <div className="space-y-3 md:space-y-4 order-1 lg:order-1">
              {/* Social Media Links */}
              <div className="flex justify-center lg:justify-start space-x-3 mb-3 md:mb-4">
                <a
                  href="https://instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  Create Your QR Code
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Enter text or URL to generate a beautiful QR code instantly
                </p>
              </div>

              {/* Text Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Text or URL
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text, URL, or any content..."
                  rows={3}
                  className="input-field resize-none"
                />
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Custom Logo (Optional)
                </label>
                <div className="space-y-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="btn-secondary cursor-pointer inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Upload Logo
                  </label>
                  
                  {logoUrl && (
                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/30">
                      <img
                        src={logoUrl}
                        alt="Logo preview"
                        className="w-12 h-12 object-contain rounded-lg"
                      />
                      <span className="text-sm text-gray-600 flex-1">
                        Logo uploaded successfully
                      </span>
                      <button
                        onClick={removeLogo}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={downloadQR}
                disabled={!text.trim() || isGenerating}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PNG
                  </div>
                )}
              </button>
            </div>

            {/* QR Code Display - Right aligned */}
            <div className="flex flex-col items-center lg:items-end space-y-3 md:space-y-4 order-2 lg:order-2">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center lg:text-right">
                Your QR Code
              </h3>
              
              <div className="relative">
                {text.trim() ? (
                  <div
                    ref={qrRef}
                    className="relative p-6 bg-white rounded-2xl shadow-2xl"
                  >
                    <QRCode
                      value={text}
                      size={qrSize}
                      level="H"
                      includeMargin={true}
                      style={{
                        height: 'auto',
                        maxWidth: '100%',
                        width: '100%',
                      }}
                    />
                    
                    {/* Logo overlay */}
                    {logoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-2 shadow-lg">
                          <img
                            src={logoUrl}
                            alt="QR Logo"
                            className="w-12 h-12 object-contain"
                            style={{
                              maxWidth: `${qrSize * 0.2}px`,
                              maxHeight: `${qrSize * 0.2}px`
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
                    <div className="text-center text-gray-500">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                      <p className="text-sm md:text-lg font-medium">Enter text to generate QR code</p>
                    </div>
                  </div>
                )}
              </div>

              {/* QR Code Info */}
              {text.trim() && (
                <div className="text-center lg:text-right space-y-2">
                  <p className="text-sm text-gray-600">
                    High quality • No watermark • Ready to download
                  </p>
                  <div className="flex items-center justify-center lg:justify-end gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      PNG Format
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      High Resolution
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Vector Quality
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;