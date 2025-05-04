import SearchForm from '@/components/SearchForm';

export default async function Home({searchParams}:{searchParams:Promise<{query:string}>}) {
	const query = (await searchParams)?.query;

	return (
		<>
			<section className="pink_container pattern bg-primary">
				<h1 className="heading">
					Pitch Your startup, <br />
					Connect with Entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submut Ideas, Vite on Pitches, and Get Noticed in Virtual
				</p>
				<SearchForm query={query}/>
			</section>
		</>
	);
}
