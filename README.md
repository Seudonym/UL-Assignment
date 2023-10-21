# E-Commerce Marketplace API

This project is an e-commerce marketplace API built with Node.js, Express.js, and MongoDB using Mongoose. It provides functionality for users, sellers, catalogs, products, and orders. Buyers and sellers can register, manage catalogs, create orders, and more.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

- Node.js: Download and install from [nodejs.org](https://nodejs.org/).
- MongoDB: Download and install from [mongodb.com](https://www.mongodb.com/try/download/community).

### Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/Seudonym/UL-Assignment.git
```
2. Navigate into the repository's folder:
```bash
cd UL-Assignment
```
3. Install dependencies
```bash
npm install
```
4. Run
```bash
npm start
```
Your API should now be running at ```https://localhost:3000/```



## API Endpoints

### Authentication APIs

- **Register a User**: 
    - Endpoint: `POST /api/auth/register`
    - Description: Allows users to register.

- **User Login**:
    - Endpoint: `POST /api/auth/login`
    - Description: Allows registered users to log in.

### APIs for Buyers

- **Get List of Sellers**:
    - Endpoint: `GET /api/buyer/list-of-sellers`
    - Description: Retrieve a list of all sellers.

- **Get Seller's Catalog**:
    - Endpoint: `GET /api/buyer/seller-catalog/:seller_id`
    - Description: Get the catalog of a specific seller by `seller_id`.

- **Create Order**:
    - Endpoint: `POST /api/buyer/create-order/:seller_id`
    - Description: Allows buyers to create an order for a specific seller with `seller_id`.

### APIs for Sellers

- **Create a Catalog**:
    - Endpoint: `POST /api/seller/create-catalog`
    - Description: Sellers can create a catalog of items.

- **Retrieve Seller's Orders**:
    - Endpoint: `GET /api/seller/orders`
    - Description: Retrieve the list of orders received by a seller.

For more detailed information on these API endpoints, please refer to the project's source code.

