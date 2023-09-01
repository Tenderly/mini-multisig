const tenderlyContainerSomething = "332bdc8a-2b31-4ac1-ad3c-f3379c09784d";
const tenderlyUsername = ""
const tenderlyProjectSlug = "";

const simulationUrl = `https://api.tenderly.co/api/v1/account/${tenderlyUsername}/project/${tenderlyProjectSlug}/container/${tenderlyContainerSomething}/simulate`;

const payload = {
  network_id: "1",
  block_number: 18041153,
  transaction_index: 0,
  from: "0x0000000000000000000000000000000000000000",
  input:
    "0x80b1dd2b0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb9226600000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c80000000000000000000000003c44cdddb6a900fa2b585dd299e03d12fa4293bc",
  to: "0x6cd13dd1071ac80ec6f784bc19bc0d47315b1c91",
  gas: 8000000,
  gas_price: "0",
  value: "0",
  access_list: [],
  generate_access_list: true,
  save: true,
  source: "dashboard",
  block_header: null,
  skip_fork_head_update: false,
  alias: "",
  description: "",
};
