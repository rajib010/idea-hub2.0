import SearchForm from "@/components/SearchForm";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query
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

        <SearchForm query={query}/>
      </section>
    </>
  )
}
