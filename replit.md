# SecureEvidence - Blockchain Evidence Storage

## Overview
SecureEvidence is a blockchain-based evidence storage application designed for storing and managing digital evidence with encryption and IPFS storage. The application includes a React frontend for user interaction and an Express.js backend for handling file uploads and IPFS operations via Pinata.

## Current State
- **Status**: Fully functional and running
- **Frontend**: React/TypeScript with Vite dev server on port 5000
- **Backend**: Express.js server on port 3001
- **Last Updated**: September 26, 2025

## Project Architecture

### Frontend (src/)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI**: Custom styling with Tailwind CSS and Lucide React icons
- **Components**: 
  - WalletConnect (Ethereum wallet integration)
  - EvidenceUpload (File upload functionality)
  - EvidenceList (Evidence management)
  - EvidenceSearch (Search functionality)
  - AccessControl (Permission management)
  - Settings (Application settings)

### Backend (server/)
- **Framework**: Express.js with ES modules
- **Storage**: IPFS via Pinata SDK
- **Encryption**: AES-256-GCM for file encryption
- **File Upload**: Multer middleware with 10MB limit
- **API Endpoints**:
  - `/api/health` - Health check
  - `/api/upload-evidence` - Evidence file upload
  - `/api/pin-metadata` - Metadata storage

### Blockchain Components
- **Smart Contract**: EvidenceStorage.sol (Ethereum)
- **Integration**: Ethers.js for blockchain interaction
- **Network**: Configurable Ethereum network support

## Configuration

### Development
- Frontend runs on `0.0.0.0:5000` (Replit proxy compatible)
- Backend runs on `localhost:3001`
- Vite proxy configured to route `/api` requests to backend
- Concurrent execution of frontend and backend via `npm run dev`

### Environment Variables Required
- `PINATA_API_KEY` - Pinata IPFS service API key
- `PINATA_SECRET_API_KEY` - Pinata IPFS service secret key

### Deployment
- **Target**: Autoscale deployment
- **Build**: `npm run build`
- **Run**: `npm run dev` (serves both frontend and backend)

## Recent Changes
- **2025-09-26**: 
  - Converted server from CommonJS to ES modules
  - Fixed port conflicts (frontend: 5000, backend: 3001)
  - Configured Vite for Replit proxy compatibility
  - Set up concurrent frontend/backend execution
  - Updated browserslist database
  - Fixed React import in App.tsx

## User Preferences
- Prefers minimal file creation and editing of existing files
- Follows existing project patterns and conventions
- Uses TypeScript for type safety

## Known Requirements
- Pinata API credentials needed for IPFS functionality
- Ethereum wallet required for blockchain interactions
- File upload functionality depends on backend upload directory