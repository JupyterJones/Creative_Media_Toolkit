import React from 'react';

interface ImageSlotProps {
    label: string;
    image: string | null;
    onClear: () => void;
}

const ImageSlot: React.FC<ImageSlotProps> = ({ label, image, onClear }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <div className="w-full aspect-[4/3] bg-gray-700/50 rounded-md flex items-center justify-center relative overflow-hidden ring-1 ring-gray-600">
                {image ? (
                    <>
                        <img src={image} alt={label} className="w-full h-full object-cover" />
                        <button 
                            onClick={onClear} 
                            className="absolute top-1 right-1 bg-red-600/80 hover:bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold transition-transform duration-200 hover:scale-110"
                            aria-label={`Clear ${label}`}
                        >
                            ✕
                        </button>
                    </>
                ) : (
                    <span className="text-gray-400 text-xs text-center px-2">Select from Asset Browser</span>
                )}
            </div>
        </div>
    );
};

export default ImageSlot;
