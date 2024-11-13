import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
  domains: ['emotionalsobrietycoaching.com'], 
});

export default withAutoCert({});

