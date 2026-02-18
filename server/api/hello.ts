import { useFetch } from "nuxt/app";

export default defineEventHandler(() => {
  return {
    message: 'Hello from the server!'
  };
});
