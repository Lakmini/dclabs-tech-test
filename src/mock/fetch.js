const fetch = () => {
  return Promise.resolve({
    json: () => Promise.resolve({ data: "response" }),
  });
};

export default fetch;
