import * as process from "process"
import axios from "axios"

const TIMEOUT = process.env.NEXT_PUBLIC_API_TIMEOUT as string
const BASE_URL = process.env.NEXT_PUBLIC_COINRANK_BASE_URL as string
const API_KEY = process.env.NEXT_PUBLIC_COINRANK_API_KEY as string
const HOST = process.env.NEXT_PUBLIC_COINRANK_HOST as string

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: parseInt(TIMEOUT),
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
