import { DefaultButton, PrimaryButton, Spinner, SpinnerSize, Stack } from "@fluentui/react";
import { MouseEventHandler } from "react";

type PanelFooterContentProps = {
    loading: boolean;
    id: number | string;
    onConfirm: MouseEventHandler<HTMLAnchorElement>;
    onDismiss: MouseEventHandler<HTMLAnchorElement>;
}
export function PanelFooterContent({
    loading,
    id,
    onConfirm,
    onDismiss
}: PanelFooterContentProps) {
    return (
        <Stack horizontal tokens={{ childrenGap: 10 }}>
            <PrimaryButton onClick={onConfirm}
                disabled={loading}>
                {id ? 'Alterar' : 'Adicionar'}
            </PrimaryButton>
            <DefaultButton onClick={onDismiss}
                disabled={loading}>
                Cancelar
            </DefaultButton>
            {loading && <Spinner size={SpinnerSize.medium} />}
        </Stack>
    )
}