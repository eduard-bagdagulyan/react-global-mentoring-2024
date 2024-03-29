export const MovieGenres = ['Documentary', 'Comedy', 'Horror', 'Crime']

export type MovieGenresType = (typeof MovieGenres)[number]

export const SortOptions = {
    release_date: 'Release Date',
    title: 'Title',
}

export type SortOptionsType = keyof typeof SortOptions
