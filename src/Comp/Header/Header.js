import { Title, InputWrapper, Input, Select, Grid, Col } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
function Header({ changeWord, category, setCategory }) {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const span = isMobile ? 12 : 6;
  return (
    <div>
      <Title order={1} align="center" style={{ fontSize: "50px" }}>
        Tech Dictionary
      </Title>
      <Grid style={{ padding: "20px 0" }}>
        <Col span={span}>
          <InputWrapper label="Search Of a Word" size="lg">
            <Input
              placeholder="Type Hear a Word"
              size="lg"
              onChange={(e) => changeWord(e.target.value)}
            />
          </InputWrapper>
        </Col>
        <Col span={span}>
          <Select
            label="Language"
            placeholder="Select a Language"
            defaultValue="en"
            value={category}
            onChange={setCategory}
            size="lg"
            data={[
              { label: "English", value: "en" },
              { label: "Hindi", value: "hi" },
              { label: "Spanish", value: "es" },
              { label: "French", value: "fr" },
              { label: "Japanese", value: "ja" },
              { label: "Russian", value: "ru" },
              { label: "German", value: "de" },
              { label: "Italian", value: "it" },
              { label: "Korean", value: "ko" },
              { label: "Brazilian Portuguese", value: "pt-BR" },
              { label: "Arabic", value: "ar" },
              { label: "Turkish", value: "tr" },
            ]}
          />
        </Col>
      </Grid>
    </div>
  );
}

export default Header;
