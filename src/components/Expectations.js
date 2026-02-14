import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Expectations.css';

// Exact File Mappings based on system audit
const folders = [
    {
        id: 'smm',
        title: 'Social Media Management',
        description: 'Strategic content curation and community growth.',
        // Source: public/assets/smm (6 files found)
        images: [
            "/assets/smm/smm-Dark-Brown-Aestetic-Instagram-Feed-Grid.jpg",
            "/assets/smm/smm-Faceless-Trendy-Aesthetic-Instagram-Templates-for-Creators---Canva-Editable.jpg",
            "/assets/smm/smm-Instagram-Feed-Inspiration.jpg",
            "/assets/smm/smm-SMM-agency.jpg",
            "/assets/smm/smm-download-1.jpg",
            "/assets/smm/smm-download-2.jpg"
        ]
    },
    {
        id: 'influencer',
        title: 'Influencer Management',
        description: 'Connecting your brand with authentic voices.',
        // Source: public/assets/ugc (5 files found) - User requested UGC content for Influencer
        images: [
            "/assets/ugc/ugc-.jpg",
            "/assets/ugc/ugc-Beauty-of-Joseon-sunscreen.jpg",
            "/assets/ugc/ugc-Este-2026-ser-literalmente-una-pinteres-girl-.jpg",
            "/assets/ugc/ugc-Sustainable-skincare-is-multipurpose-skincare-.jpg",
            "/assets/ugc/ugc-download-7.jpg"
        ]
    },
    {
        id: 'photo',
        title: 'Product Photography',
        description: 'High-end editorials and studio shots.',
        // Source: public/assets/pp (8 files found)
        images: [
            "/assets/pp/pp---Paper-cup-and-holder-designed-for-POCKET-cafe-and-pastry-.jpg",
            "/assets/pp/pp-Laneige-campaign-photography-by-McKenzie-Thompson.jpg",
            "/assets/pp/pp-Spoil-them-with-scent--Share-the-gift-of-skincare-infused-intoxicating-fragrance-with-Body-Mist-.jpg",
            "/assets/pp/pp-creative-product-photography-cream-aesthetic-still-life-with-cream-and-textile.jpg",
            "/assets/pp/pp-download-3.jpg",
            "/assets/pp/pp-download-4.jpg",
            "/assets/pp/pp-download-5.jpg",
            "/assets/pp/pp-download-6.jpg"
        ]
    }
];

const Expectations = () => {
    const [selectedId, setSelectedId] = useState(null);
    const selectedFolder = folders.find(f => f.id === selectedId);

    // Helper to duplicate images for infinite scroll effect
    // We duplicate 4 times to ensure:
    // 1. Enough height to fill screen
    // 2. Exactly even duplication for the 50% CSS translation loop
    const getImages = (folder) => {
        if (!folder || !folder.images) return [];
        return [...folder.images, ...folder.images, ...folder.images, ...folder.images]; // 4x duplication
    };

    return (
        <section className="expectations-section">
            <div className="expectations-header">
                <h2>What To Expect From Us</h2>
                <p>Comprehensive Creative Solutions.</p>
            </div>

            <div className="folders-grid">
                {folders.map((folder) => (
                    <motion.div
                        key={folder.id}
                        layoutId={`folder-${folder.id}`}
                        className="folder-card"
                        whileHover={{ y: -10 }}
                        onClick={() => setSelectedId(folder.id)}
                    >
                        <motion.div className="folder-tab" layoutId={`tab-${folder.id}`}></motion.div>
                        <motion.div className="folder-body" layoutId={`body-${folder.id}`}>
                            <motion.h3 layoutId={`title-${folder.id}`}>{folder.title}</motion.h3>
                            <p className="folder-desc">{folder.description}</p>
                            <span className="folder-cta">View Gallery</span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="collage-modal-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Overlay Backdrop */}
                        <motion.div
                            className="modal-backdrop"
                            onClick={() => setSelectedId(null)}
                        />

                        {/* Expanding Folder Content */}
                        <motion.div
                            className="collage-modal"
                            layoutId={`folder-${selectedId}`}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <button className="close-btn" onClick={() => setSelectedId(null)}>
                                <X size={32} />
                            </button>

                            <div className="collage-header">
                                <motion.h2 layoutId={`title-${selectedId}`}>{selectedFolder.title}</motion.h2>
                            </div>

                            <motion.div
                                className="collage-container"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                            >
                                <div className="collage-column col-down">
                                    {getImages(selectedFolder).map((img, i) => (
                                        <img key={i} src={img} alt="Gallery" />
                                    ))}
                                </div>
                                <div className="collage-column col-up">
                                    {/* Reverse logic: Duplicate then reverse to keep 50% alignment logic valid */}
                                    {[...getImages(selectedFolder)].reverse().map((img, i) => (
                                        <img key={i} src={img} alt="Gallery" />
                                    ))}
                                </div>
                                <div className="collage-column col-down">
                                    {getImages(selectedFolder).map((img, i) => (
                                        <img key={i} src={img} alt="Gallery" />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Expectations;
