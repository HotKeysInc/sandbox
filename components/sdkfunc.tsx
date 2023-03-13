import * as hotkeys from "hotkeys-sdk";
import * as Web3 from "@solana/web3.js";



export async function Sdkfunc() {

    const [txId, mintId] = await hotkeys.generateKey(
        connection,
        owner,
        "HK: Plugin",
        "https://raw.githubusercontent.com/HotKeysInc/programs/main/assets/test_metadata.json"
    );


const token = new PublicKey("4eepA7KT2ZzyA8Gih94AxVb5uNPXy7d2mPZR6HF2TtZF");

const txId = await hotkeys.sellKey(connection, owner, buyer, token, 0.1);

console.log("txId: ", txId);
    
    console.log("txId: ", txId);
    console.log("mintId: ", mintId);
    

    return(
        <h1>refer to this demo project</h1>
    );

}