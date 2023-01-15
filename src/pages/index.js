import Head from 'next/head'
import { useEffect, useState } from 'react'




export default function Home() {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('/api/hello')
      .then(res => {
        setLoading(false)
        return res.json()
      })
      .then(json => setProducts(json))
  }, [])
  if (loading) {
    return <div className='flex justify-center  py-10'>
      <h1>Loading...</h1>
    </div>
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto'>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">

            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {
                products?.products?.map((p, index) => {
                  return <tr key={p.id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className='w-32'>
                        <img src={p.images[0].src} alt={p.images[0].name} />
                      </div>
                    </td>
                    <td>{p.name}</td>
                    <td>${p.price}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
