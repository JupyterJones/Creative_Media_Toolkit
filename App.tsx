import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageBlender from './components/ImageBlender';
import AssetBrowser from './components/AssetBrowser';
import ImageDisplay from './components/ImageDisplay';
import { blendImages } from './services/imageService';
import type { GeneratedImage } from './types';

const App: React.FC = () => {
    const [topImage, setTopImage] = useState<string | null>(null);
    const [maskImage, setMaskImage] = useState<string | null>(null);
    const [bottomImage, setBottomImage] = useState<string | null>(null);
    const [blendedImage, setBlendedImage] = useState<GeneratedImage | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleBlend = useCallback(async () => {
        if (!topImage || !maskImage || !bottomImage) {
            setError("Please select a top, mask, and bottom image.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setBlendedImage(null);

        try {
            const resultUrl = await blendImages(bottomImage, topImage, maskImage);
            setBlendedImage({ src: resultUrl, alt: "Blended image" });
        } catch (err) {
            const message = err instanceof Error ? err.message : 'An unexpected error occurred during blending.';
            setError(message);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [topImage, maskImage, bottomImage]);

    const clearImages = () => {
        setTopImage(null);
        setMaskImage(null);
        setBottomImage(null);
        setBlendedImage(null);
        setError(null);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Panel: Controls */}
                    <div className="lg:col-span-3">
                        <ImageBlender
                            topImage={topImage}
                            setTopImage={setTopImage}
                            maskImage={maskImage}
                            setMaskImage={setMaskImage}
                            bottomImage={bottomImage}
                            setBottomImage={setBottomImage}
                            onBlend={handleBlend}
                            onClear={clearImages}
                            isLoading={isLoading}
                        />
                    </div>

                    {/* Center Panel: Result */}
                    <div className="lg:col-span-5">
                        <ImageDisplay
                            image={blendedImage}
                            isLoading={isLoading}
                            error={error}
                        />
                    </div>

                    {/* Right Panel: Asset Browser */}
                    <div className="lg:col-span-4">
                       <AssetBrowser 
                            setTopImage={setTopImage}
                            setMaskImage={setMaskImage}
                            setBottomImage={setBottomImage}
                       />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
