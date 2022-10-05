import { BaseButton, Button, MessageBar, MessageBarType } from "@fluentui/react";
import './style.scss';

type MessageBarCustomProps = {
    messageError: string;
    messageSuccess: string;
    onDismiss: (ev?: React.MouseEvent<HTMLElement | BaseButton | Button>) => any;
}

export function MessageBarCustom({
    messageError,
    messageSuccess,
    onDismiss
}: MessageBarCustomProps) {
    return (
        <div className="alert-panel">
            {messageError && (
                <MessageBar
                    delayedRender={false}
                    messageBarType={MessageBarType.error}
                    onDismiss={onDismiss}>
                    {messageError}
                </MessageBar>
            )}

            {messageSuccess && (
                <MessageBar
                    delayedRender={false}
                    messageBarType={MessageBarType.success}
                    onDismiss={onDismiss}>
                    {messageSuccess}
                </MessageBar>
            )}
        </div>
    )
}