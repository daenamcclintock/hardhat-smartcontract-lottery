
module.exports = async function({ getNamedAccounts, deployments }) {
    const { deployer, log } = deployments
    const { deployer } = await getNamedAccounts()

    const raffle = await deployer("Raffle.sol")
}