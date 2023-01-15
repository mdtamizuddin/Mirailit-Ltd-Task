// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import api from "@/wooapi"

export default async function handler(req, res) {
  const responseData = {
    success: false,
    products: [],
    error: false
  }
  try {
    const data  = await api.get('products').then((res) => res.data)

    responseData.success = true,
      responseData.products = data
    res.json(responseData)
  }
  catch (err) {
    responseData.error = err.message
    res.status(500).json(responseData)
  }
}
