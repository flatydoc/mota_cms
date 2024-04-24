module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "nfp_hiHkn9JomcDYRVMokDqbXc2eYzzDTYU11bcf",
    },
  },
});

module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_dHOOD4MEzMi26WejJYEgzziJeiLN/Ew5CuxrBoF",
      apiToken: "X6Dr59pGscgg3PEKvPPm4yz9",
      appFilter: "mota-cms",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
