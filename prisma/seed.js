import prisma from '../src/lib/prisma.js'
import { FALLBACK_LISTINGS } from '../src/data/fallbackListings.js'

const properties = FALLBACK_LISTINGS.map(({ areaSqm, createdAt, ...property }) => ({
  ...property,
  amenities: [
    property.amenities,
    areaSqm ? `${areaSqm} sqm` : '',
  ].filter(Boolean).join(', '),
  agentImage: '/sammy/img/team/1.jpg',
}))

const testimonials = [
  {
    id: 1,
    clientName: 'Chinedu Okafor',
    clientLocation: 'Home Buyer, Lagos',
    clientPhotoUrl: null,
    rating: 5,
    body: 'Sammy Realty helped me secure my dream home in Lekki with zero stress. Their agents were professional and transparent throughout the process. Highly recommend!',
  },
  {
    id: 2,
    clientName: 'Hauwa Mohammed',
    clientLocation: 'Real Estate Investor, Abuja',
    clientPhotoUrl: null,
    rating: 5,
    body: 'I invested in land through Sammy Realty in Abuja, and the title verification process was seamless. I felt safe and guided the whole way.',
  },
  {
    id: 3,
    clientName: 'Emeka Umeh',
    clientLocation: 'Commercial Buyer, Port Harcourt',
    clientPhotoUrl: null,
    rating: 5,
    body: 'From the initial consultation to closing, Sammy Realty handled everything professionally. Their market insight in Port Harcourt is top-notch.',
  },
  {
    id: 4,
    clientName: 'Blessing Adewale',
    clientLocation: 'Tenant, Ikeja',
    clientPhotoUrl: null,
    rating: 5,
    body: 'Renting an apartment in Ikeja was fast and secure with Sammy Realty. Their customer service was exceptional, and they found me the perfect spot within days.',
  },
]

const agents = [
  {
    name: 'Adebayo Johnson',
    email: 'info@sammyrealty.com',
    phone: '+2348148414913',
    photoUrl: '/sammy/img/team/1.jpg',
    bio: 'Sammy Realty lead advisor for Lagos rentals and premium homes.',
  },
  {
    name: 'Fatima Okonkwo',
    email: 'sales@sammyrealty.com',
    phone: '+2348148414913',
    photoUrl: '/sammy/img/team/2.jpg',
    bio: 'Buyer and seller representative for residential and land opportunities.',
  },
  {
    name: 'Chinedu Eze',
    email: 'contact@sammyrealty.com',
    phone: '+2348148414913',
    photoUrl: '/sammy/img/team/3.jpg',
    bio: 'Commercial property and shortlet specialist.',
  },
]

async function main() {
  for (const property of properties) {
    await prisma.property.upsert({
      where: { id: property.id },
      update: property,
      create: property,
    })
  }

  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: testimonial.id },
      update: testimonial,
      create: testimonial,
    })
  }

  for (const agent of agents) {
    await prisma.agent.upsert({
      where: { email: agent.email },
      update: agent,
      create: agent,
    })
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
