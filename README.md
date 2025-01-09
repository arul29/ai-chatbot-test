# AI ChatBot React Native

## Overview

This is a React Native project built using React Native CLI. This project follows modern React Native development practices and includes environment configuration.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- JDK (version 17 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/arul29/ai-chatbot-test.git
cd ai-chatbot-test
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (macOS only):

```bash
cd ios
pod install
cd ..
```

## Environment Setup

1. Create a `.env` file in the root directory:

2. Add your environment variables to `.env`:

```plaintext
OPENAI_API_KEY=your_api_key_here
```

3. Create a `.env.example` file to show which environment variables are required:

```bash
cp .env .env.example
```

4. Edit `.env.example` to remove sensitive values:

```plaintext
OPENAI_API_KEY=
```

Note: Make sure to add `.env` to your `.gitignore` file to prevent sensitive information from being committed.

## Running the App

### Android

```bash
npm run android
```

### iOS (macOS only)

```bash
# Using npm
npm run ios

# For specific device, open the project in Xcode:
# 1. Open ./ios/[ProjectName].xcworkspace in Xcode
# 2. Select your target device
# 3. Click the Run button or press Cmd + R
```
