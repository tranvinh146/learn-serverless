export const handler = async (event, context) => {
  const data = {
    kty: "RSA",
    e: "AQAB",
    use: "sig",
    kid: "/xkWhbC8km9my96+kCYxVfzWnI0sXlHXbKbuirxITdk=",
    n: "n9v4RHCrl37C3Ah3qh4DWlDiUfKXghlC5s4iweBSBMxO4gydbNe1msbQx7dDApS2f3J2ucWToxR1xXRJP9MQ8X4t7clviUyPdMV0XceljYT3rbLOt5pue5djZUl3XhbcbKZHRsWG81D752cflU30MsZ0PQYpjwzQyv2CsbJxXBJMrtxMh7wZw3l63rWoJezbs3dtvMg4655n7FAS4cAH8HFAXgAgdWxFry_DGNp4JBuhmETF47qgRZfVgqIoEslB-_aelLhg9eB0SpTTtwaxNn0vPwMAhnV8LHr-m0UmQJ87-M4eXeGvVP6DK_nK-KoHx_kK0kzczIzk4B03XiXmdw",
    alg: "RS256",
  };

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      data,
    }),
  };
};
