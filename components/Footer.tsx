import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-950 text-center p-4 text-gray-500 mt-8 border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} Creative Media Toolkit. Powered by React & Canvas API.</p>
        </footer>
    );
};

export default Footer;
