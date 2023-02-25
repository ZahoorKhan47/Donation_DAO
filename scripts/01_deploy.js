const { ethers } = require("hardhat");

async function main(){
    const [signer1, signer2, signer3] = await ethers.getSigners();

    const Donation = await ethers.getContractFactory("Donation", signer1);
    const donation = await Donation.deploy();

    console.log("Deployed at: ", donation.address, "by: ", signer1.address);

    await signer1.sendTransaction({
        to: donation.address,
        value: ethers.utils.parseUnits('0.1', 18)
    });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
