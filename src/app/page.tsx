import Link from 'next/link'

import { MacbookScroll } from '~/components/ui'

export default async function Home() {
  // const hello = await api.post.hello({ text: 'from tRPC' })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
        <MacbookScroll
          title={
            <span>
              This Macbook is built with Tailwindcss. <br /> No kidding.
            </span>
          }
          // src={`/linear.webp`}
          showGradient={false}
        />
      </div>
    </main>
  )
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest()

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   )
// }
