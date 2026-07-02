import { Link, useParams } from 'react-router-dom';

const galleryData = {
  furnace: {
    title: 'Furnace',
    heading: 'Suhu',
    images: Array.from({ length: 11 }, (_, index) => ({
      src: `/img/galery/Furnace/${index + 1}.jpg`,
      alt: `Furnace ${index + 1}`,
    })),
  },
  kalorimeter: {
    title: 'Kalorimeter',
    heading: 'Instrument',
    images: Array.from({ length: 6 }, (_, index) => ({
      src: `/img/galery/Kalorimeter/${index + 1}.jpg`,
      alt: `Kalorimeter ${index + 1}`,
    })),
  },
  'laboratory-mill': {
    title: 'Laboratory Mill',
    heading: 'Laboratory Mill',
    images: Array.from({ length: 6 }, (_, index) => ({
      src: `/img/galery/LaboratoryMill/${index + 1}.jpg`,
      alt: `Laboratory Mill ${index + 1}`,
    })),
  },
  timbangan: {
    title: 'Timbangan',
    heading: 'Massa',
    images: Array.from({ length: 6 }, (_, index) => ({
      src: `/img/galery/Timbangan/${index + 1}.jpg`,
      alt: `Timbangan ${index + 1}`,
    })),
  },
};

function GalleryPage() {
  const { slug } = useParams();
  const current = galleryData[slug] ?? galleryData.furnace;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-dark py-8 text-white">
        <div className="container px-4">
          <Link to="/" className="text-sm text-primary hover:text-orange-400">← Kembali ke Beranda</Link>
          <h1 className="mt-4 text-3xl font-bold">{current.title}</h1>
          <p className="mt-2 text-slate-300">{current.heading}</p>
        </div>
      </header>

      <main className="container px-4 py-12">
        <div className="flex flex-wrap justify-center">
          {current.images.map((image) => (
            <div key={image.src} className="w-full p-2 sm:w-1/2 lg:w-1/3">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src={image.src} alt={image.alt} className="w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default GalleryPage;
