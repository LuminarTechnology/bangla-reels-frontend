import React from "react"

export interface TableColumn <T = any>{
    key:string
    label:string
    width?:string
    render?: (value:any, row:T)=>React.ReactNode
    sortable?:boolean

}

export interface TableAction<T = any>{
 label:string
 onClick: (row:T)=>void
 variant?: "default" | "destructive"
}


export interface TableHeaderConfig{
  title: string
  searchPlaceholder?: string
  showSearch?: boolean
  showDateFilter?: boolean
  actions?:Array<{
    label: string
    onClick: ()=>void
    variant?: "default" | "outline"
    icon?: React.ReactNode
  }>
}
export interface ReusableTableProps<T = any> {
  data: T[]
  columns: TableColumn<T>[]
  headerConfig: TableHeaderConfig
  actions?: TableAction<T>[]
  onRowClick?: (row: T) => void
  className?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  onDateFilterClick?: () => void
}