import jszip from "jszip";
import useSWR from "swr";
import fetch from "unfetch";

interface Manifest {
  exposureKeySets: string[];
  riskCalculationParameters: string;
  appConfig: string;
}

async function fetchAndUnzip<T extends jszip.OutputType>(url: string, fileName: string, outputType: T) {
  const resp = await fetch(url);
  const buf = await resp.arrayBuffer();

  const zip = await jszip.loadAsync(buf);

  if (!zip.files[fileName]) {
    throw new Error(`Manifest ZIP archive is missing "${fileName}" file.`);
  }

  return zip.files[fileName].async(outputType);
}

async function fetchKeySets(manifestURL: string): Promise<ArrayBuffer[]> {
  const manifestJSON = await fetchAndUnzip(manifestURL, "content.bin", "string");
  const manifest = JSON.parse(manifestJSON) as Manifest;

  return Promise.all(manifest.exposureKeySets.map(fetchKeySet));
}

async function fetchKeySet(keySetID: string): Promise<ArrayBuffer> {
  const keySet = await fetchAndUnzip(
    `https://productie.coronamelder-dist.nl/v1/exposurekeyset/${keySetID}`,
    "export.bin",
    "arraybuffer"
  );

  // Return binary data (with header removed).
  return keySet.slice(17);
}

function Index(): JSX.Element {
  const { data: keySets, error } = useSWR("https://productie.coronamelder-dist.nl/v1/manifest", fetchKeySets);

  if (error) return <div>Error: {error.message}</div>;
  if (!keySets) return <div>Loading ...</div>;

  const utf8decoder = new TextDecoder();

  return (
    <div>
      <h1>CoronaMelder: TEK Dashboard</h1>
      <ul>
        {keySets.map((keySet, idx) => {
          const bindump = new Uint8Array(keySet);
          return <li key={idx}>{utf8decoder.decode(bindump)}</li>;
        })}
      </ul>
    </div>
  );
}

export default Index;
