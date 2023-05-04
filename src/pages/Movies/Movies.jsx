import MoviesList from '@/components/MoviesList/MoviesList';
import SearchForm from '@/components/SearchForm/SearchForm';

import './Movies.scss';

export default function Movies () {
  const movies = [
    {
      nameRU: 'очень длииииииииииииииииииииииииииииииииииииииииинное название',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      isSaved: true,
      id: 1
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      id: 2
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      isSaved: true,
      id: 3
    },
    {
      nameRU: 'В погоне',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      id: 4
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      id: 5
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      isSaved: true,
      id: 6
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      id: 7
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      id: 8
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      isSaved: true,
      id: 9
    },
    {
      nameRU: 'В погоне за Бенкси',
      trailerLink: '#',
      thumbnail: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1684108800&Signature=qaR9rCEyGn0WqEPqe70jCvXMgcXBLjtBr28nXcy4ZF-E8nAuWbjdOSfmMYqdzYcKRKk-waOsTRWhIxRdRqmuqdIY2JVXz~mJo45YH43qrc--lFQi4zThfACAw3qCRu0E5lUY9dZEUoNslohnRjvmAKxb~zEzYjP6DVERXZNz9jwO48hnAfAehGqpc5zP-Lc7LXvshg9JPYCFTY8K38GV2hIlVwvA9V9wvSaaVKlWrZPEdH1hnqnRVlocdrpaqcRrvfmnar~QhZfhvfIgCEu6Rydj-ePseJvU07gKRcLOgBucK6YJJJUjZv~q8RTXghRzgykocr0QE-kNqWE54yb-yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      duration: '45 мин',
      id: 10
    }
  ];
  return (
    <div className="container">
      <SearchForm></SearchForm>
      <div className='movies-container'>
        <MoviesList data={movies}></MoviesList>
      </div>
    </div>
  );
}
