'use client'

import './styles.css';
import Button from '../../Common/Button';
import ButtonTwo from '../../Common/ButtonTwo';
import iphone from '../../../public/iphone.png'
import gradient from '../../../public/gradient.png';
import { motion } from 'framer-motion'
import { RWebShare } from 'react-web-share';
import Link from 'next/link';

function MainComponent() {

    return (
        <div className='flex-info'>
            <div className='left-component'>
                <motion.h1
                    className='track-crypto-heading'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >Track Crypto</motion.h1>
                <motion.h1
                    className='real-time-heading'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >Real Time.</motion.h1>
                <motion.p
                    className='info-text'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div
                    className='landing-page-btn'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <Link href="/dashboard"><Button text="Dashboard" /></Link>
                    <RWebShare
                        data={{
                            text: "Crypto Tracker",
                            url: "https://crypto-tracker-website-hg9m.vercel.app/",
                            title: "CryptoTracker.",
                        }}
                        onClick={() => console.log("Share Enable")}
                    >
                        <ButtonTwo text="Share" outlined={true} />
                    </RWebShare>
                </motion.div>
            </div>
            <div className='right-component'>
                <img src='https://crypto-tracker-website-hg9m.vercel.app/static/media/gradient.12a666ed10b3b442b534.12a666ed10b3b442b534.png' className="gradient" />
                <motion.img
                    src='https://crypto-tracker-website-hg9m.vercel.app/static/media/iphone.bc8a136af7bf0dd49e7a.png'
                    className="iphone"
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
            </div>
        </div>
    )
}

export default MainComponent
