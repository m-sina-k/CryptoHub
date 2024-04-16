import { Badge } from "@ui/components"
import { FilterProps } from "~/app/(prices)/_components/price-table/filters/PriceTableFilters"
import { Filters } from "~/types"

function SelectedFilters({ filters, setFilters }: FilterProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {filters &&
        Object.entries(filters).map(([key, value]) => (
          <Badge
            key={key}
            variant="destructive"
            onClick={() => setFilters(key as keyof Filters, key)}
            className="flex cursor-pointer justify-center py-1"
          >
            {key === "limit" || key === "minVolume" ? (
              <p>
                {key} : {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            ) : (
              <p>
                {key} : {value}
              </p>
            )}
          </Badge>
        ))}
    </div>
  )
}

export default SelectedFilters
