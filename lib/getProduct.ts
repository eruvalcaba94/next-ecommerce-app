export default async function getProduct(id: any) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
  
    if(!res.ok) {
      throw new Error ('Could not get product')
    }
  
    return res.json()
  }