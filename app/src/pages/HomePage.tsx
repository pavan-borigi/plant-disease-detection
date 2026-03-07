import Hero from '../sections/Hero';
import AlbumCube from '../sections/AlbumCube';
import ParallaxGallery from '../sections/ParallaxGallery';
import TourSchedule from '../sections/TourSchedule';
import Footer from '../sections/Footer';

const HomePage = () => {
    return (
        <div className="relative w-full min-h-screen bg-void-black overflow-x-hidden">
            {/* Hero Section - Immersive landing */}
            <Hero />

            {/* Album Cube Section - 3D showcase */}
            <AlbumCube />

            {/* Parallax Gallery Section */}
            <ParallaxGallery />

            {/* Tour Schedule Section */}
            <TourSchedule />

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default HomePage;
