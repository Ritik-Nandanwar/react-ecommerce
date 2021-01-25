import { Card, Grid,CardContent, Typography } from '@material-ui/core'
import React from 'react'

const Product = (props) => {
  return (
    <div>
      {
        <Grid container spacing={4}>
          <Grid item  sx={12} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {props.item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
    </div>
  )
}

export default Product
