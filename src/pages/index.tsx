import jszip from "jszip";
import useSWR from "swr";
import fetch from "unfetch";
import { Container, Typography } from "@material-ui/core";

import { TemporaryExposureKeyExport } from "../lib/protobuf/TemporaryExposureKeyExport";
import Dashboard from "../components/Dashboard";

const BASE_URL = "https://naked.coronamelder-backend.nl/v1";

interface Manifest {
  exposureKeySets: string[];
  riskCalculationParameters: string;
  appConfig: string;
}

async function fetchAndUnzip<T extends jszip.OutputType>(url: string, fileName: string, outputType: T) {
  const resp = await fetch(url, {
    mode: "no-cors",
  });
  const buf = await resp.arrayBuffer();

  const zip = await jszip.loadAsync(buf);

  if (!zip.files[fileName]) {
    throw new Error(`ZIP archive is missing "${fileName}" file.`);
  }

  return zip.files[fileName].async(outputType);
}

async function fetchTekExports(manifestURL: string): Promise<TemporaryExposureKeyExport[]> {
  const manifestJSON = await fetchAndUnzip(manifestURL, "content.bin", "string");
  const manifest = JSON.parse(manifestJSON) as Manifest;

  return Promise.all(manifest.exposureKeySets.map(fetchTekExport));
}

async function fetchTekExport(keySetID: string): Promise<TemporaryExposureKeyExport> {
  const buf = await fetchAndUnzip(`${BASE_URL}/exposurekeyset/${keySetID}`, "export.bin", "arraybuffer");
  const protobuf = buf.slice(16);

  return TemporaryExposureKeyExport.decode(new Uint8Array(protobuf));
}

function Index(): JSX.Element {
  const { data: tekExports, error } = useSWR(`${BASE_URL}/manifest`, fetchTekExports);

  if (error) return <div>Error: {error.message}</div>;
  if (!tekExports) return <div>Loading ...</div>;

  return (
    <Container maxWidth="md" style={{ marginTop: "2em" }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ marginBottom: "1em" }}>
        🦠 CoronaMelder: TEK Export Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom style={{ marginBottom: "1em" }}>
        🚧 Work in progress.{" "}
        <a href="https://github.com/dstotijn/corona-melder-keyset-dashboard">View source on GitHub.</a>
      </Typography>
      <Dashboard tekExports={tekExports.reverse()} />
    </Container>
  );
}

export default Index;
