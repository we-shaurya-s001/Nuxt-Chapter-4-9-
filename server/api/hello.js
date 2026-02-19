import {useQuery} from 'vue'
export default defineEventHandler((event) => {

const {name} = readBody(event);

  return {
        message: `Hello ${name}, you are 10 years old`
  };
});
