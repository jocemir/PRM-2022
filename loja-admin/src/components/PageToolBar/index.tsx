import { Breadcrumb, PrimaryButton, Stack } from "@fluentui/react"
import { MouseEventHandler } from "react";

type PageToolBarProps = {
    currentPageTitle: string;
    loading: boolean;
    onNew: MouseEventHandler<HTMLAnchorElement>;
}

export function PageToolBar({
    currentPageTitle,
    loading,
    onNew
}: PageToolBarProps) {
    return (
        <Stack horizontal verticalAlign="center"
            styles={{
                root: {
                    justifyContent: 'space-between'
                }
            }}>
            <Breadcrumb
                items={[
                    { text: 'Home', key: 'home' },
                    { text: currentPageTitle, key: 'current', isCurrentItem: true },
                ]} />

            <PrimaryButton onClick={onNew}
                disabled={loading}>
                Adicionar
            </PrimaryButton>
        </Stack>
    )
}