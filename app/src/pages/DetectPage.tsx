import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Detection from '../sections/Detection';
import { useState, useEffect } from 'react';

const DetectPage = () => {
    const [isEntering, setIsEntering] = useState(true);

    useEffect(() => {
        // Trigger fade in after component mounts
        setIsEntering(false);
    }, []);

    return (
        <main
            className="relative w-full min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
            style={{ backgroundImage: 'url(/detection-bg.png)' }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-void-black/60 z-0"></div>

            {/* Page Transition Overlay */}
            <div
                className={`fixed inset-0 bg-void-black z-[100] transition-opacity duration-500 pointer-events-none ${isEntering ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full bg-void-black/50 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all text-sm font-medium tracking-wide uppercase"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="font-display font-semibold text-lg tracking-wider text-white uppercase">
                        Detection AI
                    </div>
                </div>
            </nav>

            {/* Main Detection Module wrapper */}
            <div className="relative z-10 pt-16">
                <Detection />
            </div>
        </main>
    );
};

export default DetectPage;
