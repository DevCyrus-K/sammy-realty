import { Bath, BedDouble, Edit, Home, MoreHorizontal, Ruler } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import type { Property } from "@/lib/mock-data";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={16 / 10} className="bg-muted">
          {property.thumbnail ? (
            <img src={property.thumbnail} alt={property.title} className="h-full w-full object-cover" />
          ) : (
            <div className="grid h-full place-items-center text-muted-foreground">
              <Home className="size-10" />
            </div>
          )}
        </AspectRatio>
        <StatusBadge status={property.status} className="absolute right-3 top-3 bg-card" />
      </div>
      <CardContent>
        <p className="m-0 text-lg font-semibold text-primary">{property.price}</p>
        <h2 className="mb-1 mt-2 text-base font-semibold">{property.title}</h2>
        <p className="m-0 text-sm text-muted-foreground">{property.address}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <BedDouble className="size-4" /> {property.beds}
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath className="size-4" /> {property.baths}
          </span>
          <span className="inline-flex items-center gap-1">
            <Ruler className="size-4" /> {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <Button variant="outline" size="sm">
          <Edit className="mr-1 size-4" /> Edit
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Property actions">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View public page</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}
