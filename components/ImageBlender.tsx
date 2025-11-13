import React from 'react';
import ImageSlot from './ImageSlot';

interface ImageBlenderProps {
    topImage: string | null;
    setTopImage: (src: string | null) => void;
    maskImage: string | null;
    setMaskImage: (src: string | null) => void;
    bottomImage: string | null;
    setBottomImage: (src: string | null) => void;
    onBlend: () => void;
    onClear: () => void;
    isLoading: boolean;
}

const ImageBlender: React.FC<ImageBlenderProps> = ({
    topImage, setTopImage,
    maskImage, setMaskImage,
    bottomImage, setBottomImage,
    onBlend, onClear, isLoading
}) => {
    const canBlend = topImage && maskImage && bottomImage;

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6">
            <h2 className="text-xl font-semibold text-white">Image Compositor</h2>
            
            <div className="space-y-4">
                <ImageSlot label="Top Layer" image={topImage} onClear={() => setTopImage(null)} />
                <ImageSlot label="Mask Layer" image={maskImage} onClear={() => setMaskImage(null)} />
                <ImageSlot label="Bottom Layer" image={bottomImage} onClear={() => setBottomImage(null)} />
            </div>

            <div className="flex flex-col gap-4">
                <button
                    onClick={onBlend}
                    disabled={isLoading || !canBlend}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-md transition duration-200 disabled:bg-cyan-800 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? 'Blending...' : 'Blend Images'}
                </button>
                 <button
                    onClick={onClear}
                    disabled={isLoading}
                    className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md transition duration-200 disabled:opacity-50"
                >
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default ImageBlender;
