import React, { memo } from 'react'
import { Tooltip } from '@material-ui/core'
import useStyles from './style'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { filterButtonsData } from '../../helper'

export const FilterButtonGroupComponent = ({
    orderTerm,
    handleChangeOrder,
}) => {
    const classes = useStyles()

    return (
        <Tooltip title="Ordenar por">
            <ToggleButtonGroup
                value={orderTerm}
                exclusive
                onChange={handleChangeOrder}
            >
                {filterButtonsData.map((filterItem) => {
                    return (
                        <ToggleButton
                            value={filterItem.value}
                            className={classes.searchButton}
                            key={filterItem.id}
                        >
                            {filterItem.text}
                        </ToggleButton>
                    )
                })}
            </ToggleButtonGroup>
        </Tooltip>
    )
}

export const FilterButtonGroup = memo(
    FilterButtonGroupComponent,
    (prevProps, nextProps) => {
        return Object.is(prevProps, nextProps)
    }
)
