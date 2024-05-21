/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be? - array
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

let myNfts = [];
let newNft;
function mintNFT (_name,_course,_id,_rating,_isElite) {
    const newNft ={
        "name" : _name,
        "course" : _course,
        "id" : _id,
        "rating" : _rating,
        "isElite" : _isElite
    };
    myNfts.push(newNft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let counter =0 ; counter<myNfts.length;counter++){
        console.log(myNfts[counter]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("total number of available nfts are: "+myNfts.length);
}

// call your functions below this line

mintNFT("msatt","JS proof",181,5,true);
mintNFT("vibranium","JS proof",183,5,true);
mintNFT("chakara","JS proof",185,5,true);

listNFTs();
getTotalSupply();