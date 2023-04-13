import React from 'react';
import './About.css';
import {SiHiveBlockchain, SiStrapi, SiFsecure} from "react-icons/si";
import {VscServerProcess} from "react-icons/vsc"
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <h2>A Growing Protocol Ecosystem</h2>
            <p>The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.</p>
            <div className="card-container">
                <AboutCard icon={<SiHiveBlockchain />}  heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.' />
                <AboutCard icon={<SiStrapi />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'/>
                <AboutCard icon={<SiFsecure />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'/>
                <AboutCard icon={<VscServerProcess />} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'/>
            </div>
            <button className="btn" href="">Use Defi</button>
        </div>
    </div>
  )
}

export default About