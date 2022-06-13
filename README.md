# Stupid Hackathon Ticket Dispenser

## How to setup Project
Set up a [Firebase project](https://firebase.google.com) > Project Settings > Service Accounts.

Genearte a new service account, and fill up environment variables, see `.env.example` for reference.

## How to setup Dispenser
Go to Firestore Database in your Firebase project.

Create a new collection `dispenser` if not existed.

Add a new document, the name will be correspond to the endpoint path.

Then create add a following fields:
- password: string
    - A secret passkey that will be used when requesting a ticket from dispenser.
- tickets: string[]
    - Available tickets to be dispensed

## How to Use
Create a `POST` request to `/dispenser/<your challenge>`.

The body must be the exact JSON as the following:
```typescript
export interface DispenserInput {
    // Password field in your document
    password: string
    // Reserver email
    from: string
}
```

## How to Deploy
You can deploy the project with Docker.

Simply run Docker build and run.
