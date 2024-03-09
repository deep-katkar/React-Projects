import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { FaArrowDown } from "react-icons/fa6";
import TransactionTable from "./components/TransactionTable";
import { FaSearch } from "react-icons/fa";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={FaArrowDown} />}>Import CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" h="14" w="40">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" mr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
