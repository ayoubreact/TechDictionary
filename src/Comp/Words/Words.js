import {
  Badge,
  Card,
  Group,
  Paper,
  Text,
  Title,
  Col,
  Divider,
  Center,
} from "@mantine/core";
import React from "react";

function Words({ meanings, word }) {
  return (
    <div style={{ marginTop: "18px" }}>
      {meanings.length > 0 && word ? (
        <Card shadow="md" spacing="lg" className="words">
          <Center>
            <Group align="center">
              <Title order={4} style={{ textTransform: "capitalize" }}>
                {" "}
                {meanings[0].word}{" "}
              </Title>
              <Badge size="lg">{meanings[0].phonetic}</Badge>
              <audio
                controls
                src={meanings[0].phonetics[0].audio}
                type="audio/mp3"
              ></audio>
            </Group>
          </Center>
          {meanings.map((word) => {
            return word.meanings.map((mean) => {
              return (
                <Col span={12}>
                  <Divider
                    margins="xs"
                    label={
                      <Group>
                        <Text weight="bold">Part Of Speech</Text>
                        <Badge> {mean.partOfSpeech} </Badge>
                      </Group>
                    }
                  />

                  {mean.definitions.map((def) => {
                    return (
                      <Group direction="column" grow>
                        <Paper padding="md" className="meaning-word">
                          <Text size="md" weight="bold" className="word-text">
                            {def.definition}
                          </Text>
                          <Divider size="xs" margins="xs" className="divider" />
                          <Group>
                            <Text className="word-text" weight="bold">
                              Example:
                            </Text>
                            <Text className="word-text">{def.example} </Text>
                          </Group>
                          <Group>
                            <Text className="word-text" weight="bold">
                              Synonyms:
                            </Text>
                            <Text className="word-text">
                              {def.synonyms.reduce((acc, curr) => {
                                return ` ${curr}, ${acc}`;
                              }, "")}
                            </Text>
                          </Group>
                        </Paper>
                      </Group>
                    );
                  })}
                </Col>
              );
            });
          })}
        </Card>
      ) : (
        <Card>
          <Text size="xl" weight="bold">
            Start by typing a word in search
          </Text>
        </Card>
      )}
    </div>
  );
}

export default Words;
