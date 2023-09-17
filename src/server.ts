/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function boostrap() {
  try {
    // Connect with database
    mongoose
      .connect(config.database_url as string) //  It returns a promise
      .then(() => {
        console.log('Database Connected Successfully')
      })
      .catch((error: any) => {
        console.log('Error Connecting to Dabase', error)
      })

    // Start the server
    app.listen(config.port, () => {
      console.log(`Server started successfully on port ${config.port}`)
    })
  } catch (error) {
    console.log('Connection to Database Failed.')
  }
}

boostrap()
