import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getCarousel: builder.query<CAROUSEL.GetResponse, CAROUSEL.GetRequest>({
			query: () => ({
				url: '/3b6f19428aaeb1f211229ba40c1e04cc/carousel-discounts',
				method: 'GET'
			}),
			providesTags: ['carousel']
		})
	})
});
export const { useGetCarouselQuery } = api;
