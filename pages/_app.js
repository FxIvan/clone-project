import Layout from "../component/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { LicenseInfo } from "@mui/x-license-pro";
LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUI_PRO_LICENSE_KEY);

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className="bg-dark">
      <Component {...pageProps} />
    </Layout>
  );
}
