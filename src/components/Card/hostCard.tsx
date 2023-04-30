import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Host } from '../../types/host'
import { Link } from 'react-router-dom'

const HostCard = ({ host }: Props) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Link to={`/host/${host.id}`}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {host.username}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {host.address}
            </Typography>
            <Typography variant="body2">{host.bio}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  )
}

export default HostCard

interface Props {
  host: Host
}
