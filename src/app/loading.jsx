import Image from "next/image"

const loading = () => {
  return (
    <div className="flex justify-center">
      <Image className="h-96" width={100}
          height={100} src="loading.svg" alt="Loading..." />
    </div>
  )
}

export default loading