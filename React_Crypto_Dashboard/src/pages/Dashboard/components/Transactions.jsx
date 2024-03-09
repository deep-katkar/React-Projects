import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaBtc, FaIndianRupeeSign } from "react-icons/fa6";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaIndianRupeeSign,
      text: "INR Deposit",
      amount: "+ 81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.4851310 BTC",
      timestamp: "2022-06-05 11:36 AM",
      totalvalue: "+ $81,123.10",
    },
    {
      id: "3",
      icon: FaIndianRupeeSign,
      text: "INR Deposit",
      amount: "+ 15,233.10",
      timestamp: "2022-06-01 12:15 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider mt="2" />}
            <Flex gap={4} w="full">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize="10"
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing="0">
                  <Text textStyle="h5">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.80">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Stack spacing="0">
                  <Text textStyle="h6">{transaction.amount}</Text>
                  {transaction.totalvalue && (
                    <Flex justifyContent="end">
                      <Text fontSize="sm" color="black.80">
                        {transaction.totalvalue}
                      </Text>
                    </Flex>
                  )}
                </Stack>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button borderRadius="none" w="full" mt="6" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
