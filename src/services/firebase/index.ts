import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const {
    env: { projectId, privateKey, clientEmail }
} = process

if (!projectId) throw new Error('project_id is not set')
if (!privateKey) throw new Error('privateKey is not set')
if (!clientEmail) throw new Error('clientEmail is not set')

const key = privateKey.replaceAll('\\n', '\n')

const app = initializeApp({
    credential: cert({
        projectId,
        privateKey: key,
        clientEmail
    })
})

export const firestore = getFirestore(app)

export default app
