import Link from 'next/link';

const services = [
  {
    slug: 'plumbing',
    title: 'Plumbing Services',
    content: 'We offer a wide range of plumbing services, from fixing leaky faucets to installing new water heaters.'
  },
  {
    slug: 'heating',
    title: 'Heating Services',
    content: 'Our certified technicians can repair and install all types of heating systems, including furnaces and boilers.'
  },
  {
    slug: 'cooling',
    title: 'Cooling Services',
    content: 'Stay cool in the summer with our expert air conditioning repair and installation services.'
  }
];

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(a => a.slug === params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <h1>{service.title}</h1>
          <p>{service.content}</p>
          <Link href="/">Back to Services</Link>
        </div>
      </div>
    </div>
  );
}
