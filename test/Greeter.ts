/* eslint-disable func-names */
import { expect } from "chai";
import { MockContract } from "ethereum-waffle";
import { deployments, ethers } from "hardhat";
import { Greeter } from "../typechain";
import { deploy, deployMock } from "./helpers";

const setup = deployments.createFixture(async () => {
    const admin = await ethers.getNamedSigner("admin");
    const greeter = (await deploy("Greeter", { args: ["Hello, world!"], connect: admin })) as Greeter;
    const mockGreeter = await deployMock("Greeter", admin);

    return {
        greeter,
        mockGreeter,
    };
});

describe("Unit tests", function () {
    describe("Greeter", function () {
        let greeter: Greeter;
        let mockGreeter: MockContract;

        beforeEach(async function () {
            const deployment = await setup();
            greeter = deployment.greeter;
            mockGreeter = deployment.mockGreeter;
        });

        it("should return the new greeting once it's changed", async function () {
            expect(await greeter.greet()).to.equal("Hello, world!");

            await greeter.setGreeting("Hola, mundo!");
            expect(await greeter.greet()).to.equal("Hola, mundo!");
        });

        it("should return the expected greeting when mocked", async function () {
            // Not really a proper test, just demonstrating how to mock contracts
            await mockGreeter.mock.greet.returns("I'm a mock!");
            expect(await mockGreeter.greet()).to.equal("I'm a mock!");
        });
    });
});
