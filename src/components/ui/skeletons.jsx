import React from "react";

export function PropertyCardSkeleton() {
  return (
    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
      <div className="ltn__product-img animate-pulse">
        <div className="h-64 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="ltn__product-info p-4 animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <div className="ltn__testimonial-item ltn__testimonial-item-7 animate-pulse">
      <div className="ltn__testimoni-info p-4">
        <div className="h-24 bg-gray-300 rounded mb-4"></div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqItemSkeleton() {
  return (
    <div className="ltn__faq-item animate-pulse mb-4">
      <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>
    </div>
  );
}

export function PropertyDetailsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-96 bg-gray-300 rounded-lg mb-6"></div>
      <div className="space-y-4">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-32 bg-gray-200 rounded mt-6"></div>
      </div>
    </div>
  );
}

export function TestimonialFormSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-12 bg-gray-300 rounded"></div>
      <div className="h-12 bg-gray-300 rounded"></div>
      <div className="h-32 bg-gray-300 rounded"></div>
      <div className="h-10 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
}

export function GridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <PropertyCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function CarouselSkeleton({ count = 3 }) {
  return (
    <div className="flex gap-4 overflow-hidden">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
          <TestimonialCardSkeleton />
        </div>
      ))}
    </div>
  );
}
