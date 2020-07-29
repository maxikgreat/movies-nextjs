import { useRouter } from 'next/router';

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <section>
      <div className="container">
        <h1>{id}</h1>
      </div>
    </section>
  )
}
