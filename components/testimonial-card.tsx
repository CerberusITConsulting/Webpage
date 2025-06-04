interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <div className="flex flex-col p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
      <div className="mb-4">
        <svg
          className="h-8 w-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4 italic">{quote}</p>
      <div className="mt-auto">
        <p className="font-medium text-slate-900">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  )
}
