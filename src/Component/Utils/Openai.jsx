import OpenAI from 'openai'
import {OPENAI_KEY} from './Constant'

const openai = new OpenAI({
  apiKey:OPENAI_KEY,
  dangerouslyAllowBrowser:true, // defaults to process.env["OPENAI_API_KEY"]
});
console.log("Using OpenAI Key:", import.meta.env.VITE_OPENAI_KEY);



export default openai