import { MouseEventHandler, useState } from "react";

//UI
import { IButtonProps, IconButton, IIconProps, Stack, TeachingBubble, TooltipHost } from "@fluentui/react"


//ICONS
const iconEdit: IIconProps = { iconName: 'Edit' };
const iconDelete: IIconProps = { iconName: 'Delete' };

type DetailsListOptionsProps = {
    onEdit: MouseEventHandler<HTMLAnchorElement>;
    onDelete: MouseEventHandler<HTMLAnchorElement>;
}

export function DetailsListOptions({
    onEdit,
    onDelete
}: DetailsListOptionsProps) {

    return (
        <Stack horizontal horizontalAlign="center">
            <TooltipHost content="Editar">
                <IconButton iconProps={iconEdit}
                    onClick={onEdit} />
            </TooltipHost>
            <TooltipHost content="Remover">
                <IconButton iconProps={iconDelete}
                    onClick={onDelete} />
            </TooltipHost>            
        </Stack>
    )
}