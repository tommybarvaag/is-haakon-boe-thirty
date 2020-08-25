import * as React from "react";
import Container from "../components/container";
import Heading from "../components/heading";
import Image from "../components/image";
import Paragraph from "../components/paragraph";
import ScrollIndicator from "../components/scroll-indicator";
import ScrollSnap from "../components/scroll-snap";
import Seo from "../components/seo";
import Video from "../components/video";
import styles from "../styles/home.module.css";
import { getCollagePage } from "../utils/api";
import { useCountdown } from "../utils/countdownProvider";

export default function BleDenbu({ assets }) {
  const { deadlineReached } = useCountdown();

  return (
    <>
      <Seo />
      <main className={styles.main}>
        {deadlineReached ? (
          <ScrollSnap>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <Heading style={{ textAlign: "center" }}>Gratulerer med dagen!</Heading>
              <Container>
                <Paragraph style={{ textAlign: "center" }}>
                  Bensin, den nye breidda brenn, mørk fortid liggjer kaldt.
                </Paragraph>
                <Paragraph style={{ textAlign: "center" }}>
                  Skuggje, mi søte skuggje, til deg ser eg ikkje meir.
                </Paragraph>
              </Container>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <ScrollIndicator />
                <Paragraph>Scroll for ei reise</Paragraph>
              </Container>
            </Container>
            {assets.map((asset, index) =>
              asset.type === "movie" ? (
                <Video
                  key={`asset-${index}`}
                  mp4={asset.url}
                  alt={asset.alt}
                  caption={asset.caption}
                />
              ) : (
                <Image
                  key={`asset-${index}`}
                  asset={asset}
                  src={asset.url}
                  alt={asset.alt}
                  caption={asset.caption}
                />
              )
            )}
          </ScrollSnap>
        ) : (
          <Heading style={{ textAlign: "center" }}>
            Den som ventar på noko godt ventar ikkje forgjeves?
          </Heading>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const page = await getCollagePage();

  return {
    revalidate: 3600,
    props: {
      ...page
    }
  };
}
