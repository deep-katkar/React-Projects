import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="1rem">
        <SupportCard
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          icon={IoMdMail}
        />
        <SupportCard
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={RiMessage2Fill}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
