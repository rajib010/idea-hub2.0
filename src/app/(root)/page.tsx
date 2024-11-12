import SearchForm from "@/components/SearchForm";
import StartUpCard, { StartupCardType } from "@/components/StartUpCard";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: Date.now(),
      views: 55,
      author: { _id: 1 , name:"Rajib"},
      _id: 1,
      description: 'This is a description',
      image: 'https://plus.unsplash.com/premium_photo-1729636852214-dff2864cce02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
      category: 'IT',
      title: 'Web House'
    },
    {
      _createdAt: 'today',
      views: 50,
      author: { _id: 2 , name:"Rupesh" },
      _id: 2,
      description: 'This is 2nd description',
      image: 'https://images.unsplash.com/photo-1725994390784-1ab5232a387d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
      category: 'robots',
      title: 'we robot'
    },
    {
      _createdAt: 'tomorrow',
      views: 45,
      author: { _id: 1,  name:"Rajib" },
      _id: 3,
      description: 'This is 3rd description',
      image: 'https://images.unsplash.com/photo-1726499642197-e84767270f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
      category: 'games',
      title: 'game House'
    },
    {
      _createdAt: 'long time',
      views: 545,
      author: { _id: 3 , name:"Sabina" },
      _id: 4,
      description: 'This is 4th description',
      image: 'https://images.unsplash.com/photo-1727163941315-1cc29bb49e54?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'quote',
      title: 'Quote House'
    },
  ]

  return (
    <>
      <section className="slate-container">
        <h1 className="heading">Present your ideas
          <br />
          Get Funded by Investors.
        </h1>

        <p className="sub-heading !max-w-3xl">
          Share your ideas and fulfil your ambitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold text-center">
          {query ? `Search Results for ${query}` : "All StartUps"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartUpCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found.</p>
          )}
        </ul>
      </section >
    </>
  )
}
