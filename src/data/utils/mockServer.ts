import { setupServer } from "msw/node"
import { handlers } from "./mockHandlers"

export const server = setupServer(...handlers)