type PageProps = {
  params: Record<'slug', string>;
};

export const metadata = {
  title: 'DynamicSegments',
};

/* export async function generateMetadata({ params, searchParams }) {
  return { title: 'Next.js' };
} */

export default function Page({ params }: PageProps) {
  return <div>My Post, {params.slug}</div>;
}
