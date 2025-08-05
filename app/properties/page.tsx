'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRulerCombined, FaFilter } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    title: '3 Bedroom Duplex in Lekki Phase 1',
    type: 'For Sale',
    price: '₦85,000,000',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 3,
    baths: 4,
    sqft: '2,500',
    location: 'Lekki Phase 1'
  },
  {
    id: 2,
    title: 'Modern 2 Bedroom Apartment',
    type: 'For Rent',
    price: '₦2,500,000/year',
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    location: 'Victoria Island'
  },
  {
    id: 3,
    title: 'Luxury Villa with Pool',
    type: 'Shortlet',
    price: '₦50,000/night',
    image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 5,
    baths: 6,
    sqft: '4,000',
    location: 'Ajah'
  },
  {
    id: 4,
    title: '4 Bedroom Terrace House',
    type: 'For Sale',
    price: '₦120,000,000',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 4,
    baths: 5,
    sqft: '3,200',
    location: 'Ikoyi'
  },
  {
    id: 5,
    title: 'Studio Apartment',
    type: 'For Rent',
    price: '₦1,200,000/year',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 1,
    baths: 1,
    sqft: '600',
    location: 'Surulere'
  },
  {
    id: 6,
    title: 'Executive 3 Bedroom Flat',
    type: 'Shortlet',
    price: '₦35,000/night',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 3,
    baths: 3,
    sqft: '1,800',
    location: 'Lekki'
  },
  {
    id: 7,
    title: '5 Bedroom Mansion',
    type: 'For Sale',
    price: '₦250,000,000',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 5,
    baths: 7,
    sqft: '5,000',
    location: 'Banana Island'
  },
  {
    id: 8,
    title: 'Cozy 1 Bedroom Apartment',
    type: 'For Rent',
    price: '₦800,000/year',
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 1,
    baths: 1,
    sqft: '500',
    location: 'Yaba'
  },
  {
    id: 9,
    title: 'Penthouse Suite',
    type: 'Shortlet',
    price: '₦80,000/night',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    beds: 4,
    baths: 5,
    sqft: '3,500',
    location: 'Victoria Island'
  }
];

export default function Properties() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const handleFilter = () => {
    let filtered = properties;

    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(property => property.type === typeFilter);
    }

    if (locationFilter !== 'all') {
      filtered = filtered.filter(property => property.location === locationFilter);
    }

    setFilteredProperties(filtered);
  };

  const locations = [...new Set(properties.map(p => p.location))];
  const types = [...new Set(properties.map(p => p.type))];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-luxury-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Our Properties
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive collection of premium properties across Lagos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12"
              />
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                onClick={handleFilter}
                className="bg-luxury-green hover:bg-luxury-green/90 h-12"
              >
                <FaFilter className="mr-2" />
                Filter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge 
                      className={`absolute top-4 left-4 ${
                        property.type === 'For Sale' ? 'bg-luxury-green' :
                        property.type === 'For Rent' ? 'bg-blue-600' : 'bg-orange-600'
                      }`}
                    >
                      {property.type}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold luxury-green mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{property.location}</p>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaBed className="mr-1" />
                        {property.beds} Beds
                      </div>
                      <div className="flex items-center">
                        <FaBath className="mr-1" />
                        {property.baths} Baths
                      </div>
                      <div className="flex items-center">
                        <FaRulerCombined className="mr-1" />
                        {property.sqft} sqft
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-2xl luxury-green">
                        {property.price}
                      </span>
                      <Link href={`/properties/${property.id}`}>
                        <Button size="sm" className="bg-luxury-green hover:bg-luxury-green/90">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}