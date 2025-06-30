import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import QRGenerator from '../components/QRGenerator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Instant QR - Beautiful QR Code Generator</title>
        <meta name="description" content="Generate beautiful QR codes instantly with custom logos. Free, high-quality, and no watermarks." />
        <meta name="keywords" content="QR code, generator, custom logo, free, instant, beautiful, download" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://instant-qr.vercel.app/" />
        <meta property="og:title" content="Instant QR - Beautiful QR Code Generator" />
        <meta property="og:description" content="Generate beautiful QR codes instantly with custom logos. Free, high-quality, and no watermarks." />
        <meta property="og:image" content="https://instant-qr.vercel.app/logo.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://instant-qr.vercel.app/" />
        <meta property="twitter:title" content="Instant QR - Beautiful QR Code Generator" />
        <meta property="twitter:description" content="Generate beautiful QR codes instantly with custom logos. Free, high-quality, and no watermarks." />
        <meta property="twitter:image" content="https://instant-qr.vercel.app/logo.jpeg" />
      </Head>

      <div className="min-h-screen relative">{/* Allow scrolling, ensure minimum height */}
        {/* Custom Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/background.jpeg)' }}
        ></div>
        
        {/* Background Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-purple-100/30 to-pink-100/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 backdrop-pattern opacity-20"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 floating-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 floating-element" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-20 floating-element" style={{ animationDelay: '6s' }}></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <QRGenerator />
          </main>
        </div>
      </div>
    </>
  );
}