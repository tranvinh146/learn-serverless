export const handler = async (event, context) => {
  const keys = [
    {
      kty: "RSA",
      e: "AQAB",
      use: "sig",
      kid: "ff191685b0bc926f66cbdebe90263155fcd69c8d2c5e51d76ca6ee8abc484dd9",
      n: "n9v4RHCrl37C3Ah3qh4DWlDiUfKXghlC5s4iweBSBMxO4gydbNe1msbQx7dDApS2f3J2ucWToxR1xXRJP9MQ8X4t7clviUyPdMV0XceljYT3rbLOt5pue5djZUl3XhbcbKZHRsWG81D752cflU30MsZ0PQYpjwzQyv2CsbJxXBJMrtxMh7wZw3l63rWoJezbs3dtvMg4655n7FAS4cAH8HFAXgAgdWxFry_DGNp4JBuhmETF47qgRZfVgqIoEslB-_aelLhg9eB0SpTTtwaxNn0vPwMAhnV8LHr-m0UmQJ87-M4eXeGvVP6DK_nK-KoHx_kK0kzczIzk4B03XiXmdw",
      alg: "RS256",
    },
  ];
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      keys,
    }),
  };
};
