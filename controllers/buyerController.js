// GET /api/buyer/list-of-sellers
// GET /api/buyer/seller-catalog/:seller_id
// POST /api/buyer/create-order/:seller_id

export const listOfSellers = async (req, res) => {
  res.send("GET: List of sellers");
}

export const sellerCatalog = async (req, res) => {
  res.send("GET: Seller catalog");
}

export const createOrder = async (req, res) => {
  res.send("POST: Create order");
}
