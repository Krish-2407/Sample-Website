"use client";

import React, { useState, useRef, forwardRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PageProps {
  pageNumber: number;
  width?: number;
}

const PageContent = forwardRef<HTMLDivElement, PageProps>(({ pageNumber, width }, ref) => {
  return (
    <div ref={ref} className="bg-white shadow-xl h-full flex justify-center items-center overflow-hidden border border-zinc-200">
      <Page 
        pageNumber={pageNumber} 
        width={width} 
        renderAnnotationLayer={false} 
        renderTextLayer={false} 
        className="w-full h-full object-contain"
      />
    </div>
  );
});

PageContent.displayName = 'PageContent';

export default function FlipbookMenu({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<any>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  // Handle page flip event from the book
  const onPageFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const nextButtonClick = () => {
    if (flipBookRef.current) {
        // @ts-ignore
        flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
        // @ts-ignore
        flipBookRef.current.pageFlip().flipPrev();
    }
  };

  // Effect to handle window resize for responsive PDF
  React.useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        
        let idealWidth = vw * 0.9;
        const maxHeight = vh - 200; 
        const maxWidthByHeight = maxHeight * 0.7; // 1:1.4 aspect ratio rough estimate

        if (idealWidth > maxWidthByHeight) {
          idealWidth = maxWidthByHeight;      
        }
        
        if(vw < 768) {
             idealWidth = vw * 0.95;
        }

        setContainerWidth(Math.max(idealWidth, 300));
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center py-10" ref={containerRef}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
          loading={
             <div className="flex flex-col items-center justify-center h-[60vh] text-primary">
                <span className="material-symbols-outlined animate-spin text-4xl mb-4">settings</span>
                <p className="font-label text-xs tracking-widest uppercase">Preparing Gastronomic Experience...</p>
             </div>
          }
        >
          {numPages && containerWidth > 0 && (
            // @ts-ignore - react-pageflip ts types are slightly outdated for React 18
            <HTMLFlipBook 
              ref={flipBookRef}
              width={containerWidth} 
              height={containerWidth * 1.414} // A4/Standard aspect ratio
              size="fixed"
              minWidth={300}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1414}
              maxShadowOpacity={0.4}
              drawShadow={true}
              showCover={true}
              mobileScrollSupport={true}
              flippingTime={800} // Snappier, more realistic page turn time
              swipeDistance={30}
              useMouseEvents={true}
              className="mt-8 transition-transform shadow-[0_20px_50px_rgba(8,112,184,0.07)] mx-auto"
              onFlip={onPageFlip}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <PageContent key={`page_${index + 1}`} pageNumber={index + 1} width={containerWidth} />
              ))}
            </HTMLFlipBook>
          )}
        </Document>

        {numPages && (
            <div className="mt-12 flex items-center space-x-8">
                <button 
                  onClick={prevButtonClick}
                  disabled={currentPage === 0}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 transition-all ${
                     currentPage === 0 
                     ? "opacity-30 cursor-not-allowed text-zinc-400" 
                     : "hover:bg-primary hover:text-white hover:border-primary text-zinc-600 shadow-sm"
                  }`}
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                
                <div className="flex flex-col items-center">
                   <p className="font-label text-[11px] uppercase tracking-[0.4em] text-zinc-800">
                       Page <span className="text-primary font-bold">{currentPage + 1}</span> of {numPages}
                   </p>
                   <p className="font-body text-xs italic text-zinc-400 mt-1 tracking-wider">
                       Drag or use arrows to flip
                   </p>
                </div>

                <button 
                  onClick={nextButtonClick}
                  disabled={currentPage === numPages - 1}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 transition-all ${
                     currentPage === numPages - 1 
                     ? "opacity-30 cursor-not-allowed text-zinc-400" 
                     : "hover:bg-primary hover:text-white hover:border-primary text-zinc-600 shadow-sm"
                  }`}
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        )}
    </div>
  );
}
