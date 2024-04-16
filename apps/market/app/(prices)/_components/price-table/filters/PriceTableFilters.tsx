import { useState } from "react"
import { Button, DialogFooter } from "@ui/components"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/ui/dialog"
import LimitFilter from "~/app/(prices)/_components/price-table/filters/LimitFilter"
import MinVolumeFilter from "~/app/(prices)/_components/price-table/filters/MinVolumeFilter"
import OrderByFilter from "~/app/(prices)/_components/price-table/filters/OrderByFilter"
import OrderDirectionFilter from "~/app/(prices)/_components/price-table/filters/OrderDirectionFilter"
// import SelectedFilters from "~/app/(prices)/_components/price-table/filters/SelectedFilters"
import TagFilter from "~/app/(prices)/_components/price-table/filters/TagFilter"
import { useStore } from "~/store"
import { Filters } from "~/types"
import { FilterIcon } from "lucide-react"

export interface FilterProps {
  filters: Partial<Filters> | undefined
  setFilters: (key: keyof Filters, value: string | undefined) => void
}

function PriceTableFilters() {
  const [openFilterModal, setOpenFilterModal] = useState(false)
  const [filters, setFilters] = useState<Partial<Filters>>({})
  const setGlobalFilters = useStore((state) => state.setFilters)

  const handleFilter = (key: keyof Filters, value: string | undefined) => {
    if (filters && filters[key as keyof Filters] === value) {
      const updatedFilters = { ...filters }
      delete updatedFilters[key]
      setFilters(updatedFilters)
    } else {
      setFilters({ ...filters, [key]: value })
    }
  }

  const handleApplyFilters = () => {
    setGlobalFilters(filters)
    setOpenFilterModal(false)
  }

  // const deselectFilter = (key: keyof Filters) =>{
  //   const updatedFilters = { ...filters }
  //   delete updatedFilters[key]
  //   setFilters(updatedFilters)
  // }

  return (
    <Dialog open={openFilterModal} onOpenChange={setOpenFilterModal}>
      <DialogTrigger asChild>
        <Button variant="cta">
          <FilterIcon className="mr-1 size-4" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {/*<SelectedFilters filters={filters} setFilters={deselectFilter} />*/}
          <TagFilter filters={filters} setFilters={handleFilter} />
          <OrderByFilter filters={filters} setFilters={handleFilter} />
          <OrderDirectionFilter filters={filters} setFilters={handleFilter} />
          <MinVolumeFilter filters={filters} setFilters={handleFilter} />
          <LimitFilter filters={filters} setFilters={handleFilter} />
        </DialogDescription>
        <DialogFooter>
          <Button type="button" variant="brand" onClick={handleApplyFilters}>
            Apply filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PriceTableFilters