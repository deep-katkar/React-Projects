import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{
        base: "full",
        lg: "256px",
      }}
      height="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" pt="56px">
          @TRADING_CAPITAL
        </Heading>
        <Box mt="24px" mx="12px">
          {navLinks.map((item) => (
            <Link to={item.link} key={item.text}>
              <HStack
                borderRadius="10px"
                py="12px"
                px="16px"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                {" "}
                // we can also use multiple of 4 as px like mx='3' 4*3 = 12
                <Icon as={item.icon} />
                <Text fontSize="20px" fontWeight="medium">
                  {item.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="24px" mx="12px" mb="24px">
        <Link to={"/support"}>
          <HStack
            borderRadius="10px"
            py="12px"
            px="16px"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="18px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
