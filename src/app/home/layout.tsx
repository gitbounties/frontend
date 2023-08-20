import "./style.css";
import type { ReactNode } from "react";
import { Tab, TabList, TabPanel, Tabs } from "./tabs";

export default function Layout(props: { tabs: ReactNode }) {
  return (
    <main className="main" style={{backgroundColor: 'black', height: "100vh", maxWidth: "100%"}}>
      <div className="wrapper" style={{fontFamily: "Hyperion", fontSize: 20, color: "black"}}>
        GITBOUNTIES
        <Tabs>
          <TabList>
            <Tab href="/home/tabs">Maintainer</Tab>
            <Tab href="/home/tabs/new">Contributor</Tab>
          </TabList>
          <TabPanel>{props.tabs}</TabPanel>
        </Tabs>
      </div>
    </main>
  );
}
