import axios from "axios";

const BASE_URL = "http://localhost:80/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTk1MDU0M2EzMzliMmE1ODVkNzIyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjUzMzc2MCwiZXhwIjoxNzA2NzkyOTYwfQ.X5Lf8DJQaI9NAXlZewXWru6_Oz4Vq__jV1P38zl8KFA";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});