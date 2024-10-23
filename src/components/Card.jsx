import Link from "next/link"
import Image from "next/image"

const Card = ({result}) => {
  return (
    <div>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster.path}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg"
          alt="Movie Poster"
        >
          
        </Image>
      </Link>
    </div>
  )
}

export default Card