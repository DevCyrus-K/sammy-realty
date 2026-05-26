CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE login_otps (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  otp VARCHAR(10) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  CONSTRAINT login_otps_ibfk_1
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE INDEX login_otps_user_id_idx ON login_otps(user_id);

CREATE TABLE password_resets (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  token VARCHAR(255) NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX password_resets_email_index ON password_resets(email);
CREATE INDEX password_resets_token_index ON password_resets(token);

CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  image VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL,
  location VARCHAR(255) NOT NULL,
  description TEXT,
  location_id INTEGER NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  amenities VARCHAR(255),
  price NUMERIC(15, 2) NOT NULL,
  agent_id INTEGER NOT NULL,
  agent_image VARCHAR(255),
  property_type VARCHAR(50) NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  photo_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE inquiries (
  id SERIAL PRIMARY KEY,
  property_id INTEGER,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT inquiries_property_id_fkey
    FOREIGN KEY (property_id)
    REFERENCES properties(id)
);

CREATE INDEX inquiries_property_id_idx ON inquiries(property_id);

CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_location TEXT NOT NULL,
  client_photo_url TEXT,
  rating INTEGER NOT NULL DEFAULT 5,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- seed passwords/tokens omitted for security
