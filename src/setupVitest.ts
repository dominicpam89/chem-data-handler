import "@testing-library/jest-dom"
import { beforeAll, afterEach, afterAll } from "vitest"
import { server } from "./data/utils/mockServer"

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())