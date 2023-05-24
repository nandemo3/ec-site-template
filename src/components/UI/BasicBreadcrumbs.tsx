import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Breadcrumbs, Link, Typography } from '@mui/material'

export interface BreadcrumbType {
  name: string
  url: string
}

export interface BasicBreadcrumbsType {
  breadcrumbs: BreadcrumbType[]
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
}

export default function BasicBreadcrumbs({ breadcrumbs }: BasicBreadcrumbsType) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
          <Link key={index} underline="hover" color="inherit" href={breadcrumb.url}>
            <Typography variant='caption' fontWeight="bold">
              {breadcrumb.name}
            </Typography>
          </Link>
          )
        })}
      </Breadcrumbs>
    </div>
  )
}
