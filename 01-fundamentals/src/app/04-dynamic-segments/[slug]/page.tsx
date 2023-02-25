type PageProps = React.PropsWithChildren & {
  params: Record<'slug', string>;
};

export const metadata = {
  title: 'DynamicSegments',
};

/* export async function generateMetadata({ params, searchParams }) {
  return { title: 'Next.js' };
} */

export default function Page({ params }: PageProps) {
  return (
    <section data-name="DynamicSegments">
      <p className="text-5xl">[slug]:{params.slug}</p>
    </section>
  );
}
