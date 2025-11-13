import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900/50 backdrop-blur-sm text-white p-4 sm:p-6 shadow-lg border-b border-gray-700 sticky top-0 z-10">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-cyan-400">Creative Media Toolkit</h1>
                <p className="text-lg sm:text-xl text-gray-300 mt-1">Image & Video Tools</p>
            </div>
        </header>
    );
};

export default Header;
