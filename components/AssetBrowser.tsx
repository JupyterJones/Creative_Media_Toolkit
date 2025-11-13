import React, { useState } from 'react';
import { GALLERY_IMAGES, MASK_IMAGES } from '../constants';

interface AssetBrowserProps {
    setTopImage: (src: string) => void;
    setMaskImage: (src: string) => void;
    setBottomImage: (src: string) => void;
}

type Tab = 'images' | 'masks';

const AssetBrowser: React.FC<AssetBrowserProps> = ({ setTopImage, setMaskImage, setBottomImage }) => {
    const [activeTab, setActiveTab] = useState<Tab>('images');
    const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

    const handleSelect = (setter: (src: string) => void) => {
        if (selectedAsset) {
            setter(selectedAsset);
            setSelectedAsset(null);
        }
    };
    
    const assets = activeTab === 'images' ? GALLERY_IMAGES : MASK_IMAGES;

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-xl h-full flex flex-col">
            <div className="flex border-b border-gray-700 mb-4">
                <button 
                    onClick={() => setActiveTab('images')}
                    className={`px-4 py-2 font-semibold transition-colors duration-200 ${activeTab === 'images' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
                >
                    Images
                </button>
                <button 
                    onClick={() => setActiveTab('masks')}
                    className={`px-4 py-2 font-semibold transition-colors duration-200 ${activeTab === 'masks' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
                >
                    Masks
                </button>
            </div>

            <div className="flex-grow overflow-y-auto pr-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                    {assets.map((src, index) => (
                        <div key={index} className="relative aspect-square cursor-pointer group" onClick={() => setSelectedAsset(src)}>
                            <img src={src} alt={`Asset ${index + 1}`} className="w-full h-full object-cover rounded-md transition-transform duration-200 group-hover:scale-105" />
                             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-md">
                                <p className="text-white font-bold">Select</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedAsset && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelectedAsset(null)}>
                    <div className="bg-gray-800 rounded-lg p-6 shadow-2xl max-w-sm w-full mx-4" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-lg font-bold mb-4 text-white">Set Image As:</h3>
                        <img src={selectedAsset} alt="Selected asset" className="w-full h-48 object-cover rounded-md mb-4"/>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <button onClick={() => handleSelect(setTopImage)} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition-colors">Top</button>
                            <button onClick={() => handleSelect(setMaskImage)} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition-colors">Mask</button>
                            <button onClick={() => handleSelect(setBottomImage)} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition-colors">Bottom</button>
                        </div>
                        <button onClick={() => setSelectedAsset(null)} className="mt-4 w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AssetBrowser;
