import React from 'react';
import type { GeneratedImage } from '../types';

interface ImageDisplayProps {
    image: GeneratedImage | null;
    isLoading: boolean;
    error: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ image, isLoading, error }) => {
    return (
        <div className="bg-gray-800/50 ring-1 ring-white/10 p-4 rounded-lg shadow-xl flex flex-col items-center justify-center min-h-[400px] lg:min-h-full aspect-[3/4] max-w-lg mx-auto w-full">
            {isLoading ? (
                <div className="w-full h-full bg-gray-900 rounded-lg animate-pulse flex flex-col items-center justify-center text-gray-400 p-4">
                     <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-cyan-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="mt-4 text-lg">Blending Images...</p>
                    </div>
                </div>
            ) : error ? (
                <div className="text-center text-red-400 p-4">
                    <p className="text-xl font-bold">Blending Failed</p>
                    <p className="mt-2 text-sm max-w-md">{error}</p>
                </div>
            ) : image ? (
                 <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full rounded-lg shadow-lg object-cover"
                />
            ) : (
                <div className="text-center text-gray-400 p-4">
                    <p className="text-xl font-semibold">Your blended image will appear here</p>
                    <p className="mt-2 max-w-sm">Select a Top, Mask, and Bottom image from the panels, then click "Blend Images".</p>
                </div>
            )}
        </div>
    );
};

export default ImageDisplay;
