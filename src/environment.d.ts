declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      SENDGRID_API_KEY: string
      SENDGRID_RECEIVER: string
      SENDGRID_SENDER: string
      GOOGLE_SHEETS_EMAIL: string
      GOOGLE_SHEETS_CLIENT_ID: string
      GOOGLE_SHEETS_PRIVATE_KEY: string
    }
  }
}

export {}
