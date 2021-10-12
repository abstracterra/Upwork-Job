import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";

import { ContentBlockProps } from "../../components/ContentBlock/types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "../../components/ContentBlock/RightContentBlock/styles";
import SolanaButton from "../../components/SolanaButton";

import { useMemo } from "react";
import { Component} from 'react';
//UI Imports

import icon from '../../images/2790.png'
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { MiddleBlockSection } from "../../components/MiddleBlock/styles";





const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ThreeColumns = lazy(() => import("../../components/ThreeColumns"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));




const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});


export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props:HomeProps) => {

  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  return (
  <main>
    
    <Container>
      <ScrollToTop />

      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      /> */}

    <RightBlockContainer>
      <Fade direction="up">
        <Row justify="space-between" align="middle">
          <Col lg={11} md={11} sm={24} xs={24}>
            <ContentWrapper>
            <Fade delay={0} direction="up">
              <h1>Metaverse of ducks is in need of your help</h1>
            </Fade>

            <Fade delay={500} direction="up">
              <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Content>
            </Fade>
              <Row className="margin-bottom" justify="space-between" align="middle">
                <Col lg={9} md={9} sm={24} xs={24}>
                <Fade delay={500} direction="up">
                  <div className="card-hero-left">
                  
                    <div> <p>Current Bid</p></div>
              
              
                  <div> <h5>2 Sol</h5></div>
                  {/* Import DECK file */}
                  </div>
                  </Fade>
                </Col>
                <Col lg={13} md={13} sm={24} xs={24}>
                <Fade delay={700} direction="up">
                  <div className="card-hero-right">
                    <div><p>Minting starts</p></div>
                    <div><p>00 57 10 </p></div>
                  </div>
                  </Fade>
                </Col>
              </Row>
              <Fade delay={900} direction="up">
              <ThemeProvider theme={theme}>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect={true}>
                  <WalletDialogProvider>
                    <SolanaButton
                      candyMachineId={candyMachineId}
                      config={config}
                      connection={connection}
                      startDate={startDateSeed}
                      treasury={treasury}
                      txTimeout={txTimeout}
                    />
                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
            </ThemeProvider>
            </Fade>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
          <Fade delay={500} direction="up">
            <main>
              <section className="cards">
                <div className="card charizard animated"></div>

              </section>
            </main>
          </Fade>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>



  <MiddleBlockSection>
      
      <Row justify="center" align="middle">
        <ContentWrapper>
      
        
          <Col lg={24} md={24} sm={24} xs={24}>
          <Fade delay={0} direction="up">
            <h1>Explore the vast multiverses of Abstracterra</h1>
            </Fade>
            <Fade delay={300} direction="up">
            <Content>Take the chance of being one of the few people who travel into the Abstracterra portal to different kind of worlds</Content>
            </Fade>
            
        
            

            <Fade direction="up">
              <div className="wrapper-showcase">
                  <div className="container-showcase nature">
                    
                    <div className="card-showcase">
                    </div>
                    <div className="card-showcase">
                    </div>
                  </div>
              </div>
            </Fade>
          
          </Col>
          
              
      
        </ContentWrapper>
      </Row>
     

  </MiddleBlockSection>

   

      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="2790.png"
        id="about"
      />
 
    </Container>

    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}


export default Home;
