import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;

    const { deployer } = await getNamedAccounts();
    const greeting = "Hello, world!";

    await deployments.deploy("Greeter", {
        from: deployer,
        args: [greeting],
        log: true,
    });
};

export default func;
