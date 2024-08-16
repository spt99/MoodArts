export const navigation = {
    categories: [
      {
        id: 'ArtDIYS',
        name: 'ArtDIYS',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://i.pinimg.com/736x/d4/4c/88/d44c88098f15baa58deda7340d00d8a4.jpg',
            imageAlt: 'Water base',
          },
          {
            name: 'Basic work',
            href: '/',
            imageSrc: 'https://i.pinimg.com/736x/d4/4c/88/d44c88098f15baa58deda7340d00d8a4.jpg',
            imageAlt: 'Close up of Basic work',
          },
        ],
        sections: [
          {
            id: 'CanvasPaintings',
            name: 'CanvasPaintings',
            items: [
              { name: 'Water_colour', id:"Ancient", href: `{ArtDIYS/CanvasPaintings/Water_colour}` },
              { name: 'Acrylic', id:"Oil_colour", href: '#' },
              { name: 'ArtDIYS Modern', id: 'Vague' },
              { name: 'Charcoal', id: 'Sketch' },
              { name: 'Pastels', id: 'sweater' },
              { name: 'NewFabricArt', id: 'Newshirt' },
              { name: 'Showpiece', id: 'jacket' },
              { name: 'Murals', id: 'Murals' },
              { name: 'Large', id: 'Abstract' },
              { name: 'Miniature', id: 'Miniature' },
            ],
          },
          {
            id: 'WallArts',
            name: 'WallArts',
            items: [
              { name: 'DIYS', id: 'Love' },
              { name: 'WoodBase', id: 'WoodBase' },
              { name: 'Fabric', id: 'Fabric' },
              { name: 'Resin', id: 'Resin' },
              { name: 'Oil', id: 'Oil' },
              { name: 'Macrome', id: 'Macrome' },
            ],
          },
          {
            id: 'Artists',
            name: 'Artists',
            items: [
              { name: 'Nelson', id: '#' },
              { name: 'Way', id: '#' },
              { name: 'Re-Arrsa', id: '#' },
              { name: 'Coursay', id: '#' },
              { name: 'misa', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'Paintings',
        name: 'Paintings',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring Ancient with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three FabricArt in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of New.',
          },
        ],
        sections: [
          {
            id: 'CanvasPaintings',
            name: 'CanvasPaintings',
            items: [
              { name: 'Abstract Miniature', id: '' },
              { name: 'New', id: 'New' },
              { name: 'Paintings Modern', id: '' },
              { name: 'Pastels', id: '#' },
              { name: 'NewFabricArt', id: '' },
              { name: 'Showpiece', id: '#' },
              { name: 'Resin', id: '#' },
              
            ],
          },
          {
            id: 'WallArts',
            name: 'WallArts',
            items: [
              { name: 'DIYS', id: '#' },
              { name: 'WoodBase', id: '#' },
              { name: 'Fabric', id: '#' },
              { name: 'Resin', id: '#' },
              { name: 'Oil', id: '#' },
              { name: 'Macrome', id: '#' },
            ],
          },
          {
            id: 'Artists',
            name: 'Artists',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }