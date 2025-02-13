interface CategoryProps {
  params: {
    categories: string[],
    searchParms: string
  }
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params
  return (
    <h1>Categoria dinamica: { categories }</h1>
  )
}