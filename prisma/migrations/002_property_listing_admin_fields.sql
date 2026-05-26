ALTER TABLE properties ADD COLUMN IF NOT EXISTS slug VARCHAR(255);
ALTER TABLE properties ADD COLUMN IF NOT EXISTS owner VARCHAR(255) NOT NULL DEFAULT 'Sammy Realty';
ALTER TABLE properties ADD COLUMN IF NOT EXISTS phone VARCHAR(50) NOT NULL DEFAULT '+2348148414913';
ALTER TABLE properties ADD COLUMN IF NOT EXISTS area_sqm INTEGER;
ALTER TABLE properties ALTER COLUMN image TYPE VARCHAR(500);

CREATE INDEX IF NOT EXISTS properties_slug_idx ON properties(slug);

CREATE TABLE IF NOT EXISTS property_photos (
  id SERIAL PRIMARY KEY,
  property_id INTEGER NOT NULL,
  url VARCHAR(500) NOT NULL,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT property_photos_property_id_fkey
    FOREIGN KEY (property_id)
    REFERENCES properties(id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS property_photos_property_id_idx ON property_photos(property_id);
