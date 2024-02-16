interface ServiceIconType {
  fill: string
}

export default function ServiceIcon({ fill }: ServiceIconType) {
  return (
    <svg width="90" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="transparent"/>
        <text x="50%" y="50%" font-family="Helvetica, Arial, sans-serif" font-size="24" fontWeight="bold" fill={fill} dominant-baseline="middle" text-anchor="middle">MYEC</text>
    </svg>
  )
}
