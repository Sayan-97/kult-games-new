import {
    Html,
    Body,
    Tailwind,
    Container,
    Img,
    Section,
    Row,
    Column,
    Link,
    Head,
    Preview,
  } from "@react-email/components";
  import * as React from "react";
  
  export default function Email() {
    return (
      <Html>
        <Head>
          <title>You are on the kult games waitlist.</title>
        </Head>
        <Preview>You are on the kult games waitlist.</Preview>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  background: "#040719",
                  foreground: "#ffffff",
                },
              },
            },
          }}
        >
          <Body>
            <Container className="w-[400px]">
              <Section className="flex flex-col relative">
                <Img
                  src="https://www.kult.games/imgs/emailer.png"
                  alt="img"
                  className="w-[400px]"
                />
  
                <Section className="bg-background">
                  <Row>
                    <Column className="pl-4">
                      <Link href="https://t.me/KultGamesOfficial">
                        <Img
                          src="https://www.kult.games/imgs/telegram.png"
                          alt=""
                          width={37.919}
                          height={37.353}
                        />
                      </Link>
                    </Column>
                    <Column className="pl-4">
                      <Link href="https://discord.com/invite/2duGeatqtp">
                        <Img
                          src="https://www.kult.games/imgs/discord.png"
                          alt="img"
                          width={37.919}
                          height={37.353}
                        />
                      </Link>
                    </Column>
                    <Column className="pl-4">
                      <Link href="https://www.instagram.com/kult_games_/?igsh=dzAxNnJ3eWQ4NmUz&utm_source=qr">
                        <Img
                          src="https://www.kult.games/imgs/instagram.png"
                          alt="img"
                          width={37.919}
                          height={37.353}
                        />
                      </Link>
                    </Column>
                    <Column className="pl-4">
                      <Link href="https://twitter.com/_KultGames">
                        <Img
                          src="https://www.kult.games/imgs/twitter.png"
                          alt="img"
                          width={37.919}
                          height={37.353}
                        />
                      </Link>
                    </Column>
                    <Column className="pl-4">
                      <Link href="https://medium.com/@kult_games">
                        <Img
                          src="https://www.kult.games/imgs/medium.png"
                          alt="img"
                          width={37.919}
                          height={37.353}
                        />
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  