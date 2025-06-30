import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="min-h-svh">
      <div className="flex flex-col gap-2">
        <div className="text-center text-2xl">
          Sorry, this page is not existing.
        </div>
        <div className="flex justify-center align-middle">
            <Link to='/home' className="w-fit underline">
              Go to home page
            </Link>
        </div>
      </div>
    </div>
  )
}