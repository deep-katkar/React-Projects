import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius={"1rem"}>
      <Stack spacing="6">
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter first name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter last name" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter message..." />
        </FormControl>
        <Checkbox>
          <Text fontSize="xs">
            I agree with{" "}
            <Box as="span" color="p.purple">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray" color="black.100">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
