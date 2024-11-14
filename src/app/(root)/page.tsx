import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import { StartupCard, StartupTypeCard } from "@/components/StartUpCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const session = await auth()
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

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
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section >
      <SanityLive />
    </>
  )
}
