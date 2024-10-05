let config = {
  api_url: process.env.REACT_APP_BASE_URL,
  crm_api_url: process.env.REACT_APP_CRM_BASE_URL,
  image_url: process.env.REACT_APP_IMAGE_URL,
  insta_api: "https://graph.instagram.com/me/media",
  insta_token: process.env.REACT_APP_INSTA_TOKEN,
  joiOptions: {
    abortEarly: false,
    allowUnknown: true,
    errors: {
      wrap: {
        label: "",
      },
    },
  },
};

export default config;
