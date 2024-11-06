# Zalora API SDK

Mode.js SDK for managing the Zalora Seller Center API as per the [Zalora Seller Center API documentation](https://sellercenter-api.zalora.com/docs/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Overview](#api-overview)
  - [Endpoints](#endpoints)
- [Request and Response Interfaces](#request-and-response-interfaces)
  - [Interface Structure](#interface-structure)
- [Examples](#examples)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ghaowei08/zalora-api-sdk
   ```
2. **Install dependencies**:
   ```bash
   yarn
   ```
3. **Compile TypeScript:**:
   ```bash
   yarn build
   ```

## Usage

### Initializing the SDK:

Create an instance of the `ZaloraInstance` by passing your credentials and configuration:

```bash
const clientId = process.env.clientId ?? "";
const clientSecret = process.env.clientSecret ?? "";
const accessToken = process.env.accessToken ?? "";
const zalora = new ZaloraInstance({ country: Country.GSC, environment: Environment.Production, clientId, clientSecret, accessToken });
```

### Fetching an Access Token:

To authenticate and obtain an access token, use:

```bash
await zalora.auth.getAccessToken();
```

### Sending API Requests

Example of fetching categories with pagination:

```bash
await zalora.category.getCategories({limit: 100, offset: 0});
```

## API Overview

### Endpoints

The SDK automatically determines the appropriate global and environment-specific endpoints based on the `country` and `environment` parameters provided during initialization.

## Request and Response Interfaces

### Interface Structure

All API requests and responses are strictly typed using TypeScript interfaces to ensure type safety and clarity.

## Examples

Explore more usage examples in the `examples` directory or refer to the [Documentation](#documentation).

## Documentation

Comprehensive documentation can be found in the `docs` folder, which includes:

- `order_status_flow.png`: A visual guide to the order status flow.
- `openapi-standalone.yml`: The original API OpenAPI specification for reference.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (feature/your-feature).
3. Commit your changes.
4. Push to the branch.
5. Create a pull request.

## License

This project is licensed under the MIT License.
