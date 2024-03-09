import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
