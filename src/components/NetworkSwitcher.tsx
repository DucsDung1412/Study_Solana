import { FC } from "react";
import dynamic from "next/dynamic";
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";
// import NetworkSwitcher from "./SVG/NetworkSwitcherSVG";


const NetworkSwitcher: FC = () => {
  const {networkConfiguration, setNetworkConfiguration} = useNetworkConfiguration();

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
        <select className="select max-w-xs border-none bg-transparent outline-0" value={networkConfiguration} onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}>
          <option value="mainnet-beta">main</option>
          <option value="devnet">dev</option>
          <option value="testnet">test</option>
        </select>
      </label>
    </>
  )
}

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});