import { Card, CardHeader, CardBody } from "../../../components/layout";
import { DataCompYearTable } from "./table/DataCompYearTable";
import { DataCompYearTablePermanent } from "./table/DataCompYearTablePermanent";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function DataCompYearCard() {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <Card>
      <CardHeader title="Data Comp Year" />
      <CardBody>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Balanço patrimonial Ativo Circulante" {...a11yProps(0)} />
            <Tab label="Balanço patrimonial" {...a11yProps(1)} />
            <Tab label="Balanço patrimonial" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <DataCompYearTable />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <DataCompYearTablePermanent />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          
        </TabPanel>
      </CardBody>
    </Card>
    //Balanço Patrimonial Ativo Permanente
  );
}
