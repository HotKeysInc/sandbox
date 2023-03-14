/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */

import { NextPage } from "next";


import { AppShell, BackgroundImage, Button, Stack, Title, Image, Alert} from "@mantine/core";
import * as Web3 from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Connection, PublicKey } from "@solana/web3.js";
import * as hk from "hotkeys-sdk";
import { useEffect } from "react";


async function doStuff(user) {

  const { publicKey } = useWallet();

  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  
  const [txId, mintId]  = await hk.generateKey(

    
    connection,
    owner,
    "HK: Plugin",
    "https://raw.githubusercontent.com/HotKeysInc/programs/main/assets/test_metadata.json"
  );
  
  console.log("txId: ", txId);
  console.log("mintId: ", mintId);

  
    

}





const Home: NextPage =  (props) => {
  const { publicKey } = useWallet();

  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  useEffect(() => {
    doStuff(publicKey);
  }, [])


  






 






  return (
    <>

      <p>check console :P</p>
      <WalletMultiButton></WalletMultiButton>
    </>
  );
};

export default Home;
